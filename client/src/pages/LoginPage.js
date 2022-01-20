import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Button, Form, Input, Typography } from 'antd';

import LoginStore from '../stores/LoginStore';

const { Text, Title } = Typography;
const { Password } = Input;

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    }
  }

  onFinish = (values) => {
    if (!values.name) {
      this.setState({ error: 'Please enter name!' });
      return;
    }

    if (!values.password) {
      this.setState({ error: 'Please enter password!' });
      return;
    }

    LoginStore
      .Login(values.name, values.password)
      .then(() => {
        this.setState({ error: '' });
        this.props.history.replace('/');
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <>
        <Form onFinish={this.onFinish} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', minWidth: '300', width: '30%' }}>
          <Title>Log In</Title>
          <Form.Item name='name'>
            <Input placeholder='name' />
          </Form.Item>
          <Form.Item name='password'>
            <Password placeholder='Password' />
          </Form.Item>
          <Text type='danger'>{this.state.error}</Text>
          <Form.Item>
            <Button type='primary' htmlType='submit' style={{ width: '100%' }}>Log In</Button>
          </Form.Item>
          <Form.Item>
            <Button style={{ width: '100%' }}><Link to='/register'>Create New Account</Link></Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default withRouter(LoginPage);
