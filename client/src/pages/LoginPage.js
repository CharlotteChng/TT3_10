import React, { Component } from 'react';

import { Button, Form, Input, Typography } from 'antd';

import LoginStore from '../stores/LoginStore';

const { Text } = Typography;
const { Password } = Input;

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    }
  }

  onFinish = (values) => {
    if (!values.username) {
      this.setState({ error: 'Please enter username!' });
      return;
    }

    if (!values.password) {
      this.setState({ error: 'Please enter password!' });
      return;
    }

    LoginStore
      .Login(values.username, values.password)
      .then(() => {
        this.setState({ error: '' })
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <Form onFinish={this.onFinish} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', minWidth: '300', width: '30%' }}>
        <Form.Item
          name='username'>
          <Input placeholder='Username' />
        </Form.Item>
        <Form.Item
          name='password'>
          <Password placeholder='Password' />
        </Form.Item>
        <Text type='danger'>{this.state.error}</Text>
        <Form.Item>
          <Button type='primary' htmlType='submit' style={{ width: '100%' }}>Log In</Button>
        </Form.Item>
        <Form.Item>
          <Button style={{ width: '100%' }}>Create New Account</Button>
        </Form.Item>
      </Form>
    );
  }
}
