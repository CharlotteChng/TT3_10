import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Button, DatePicker, Form, Input, Typography } from 'antd';

import LoginStore from '../stores/LoginStore';

const { Text, Title } = Typography;
const { Password } = Input;

class RegisterPage extends Component {
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

    if (!values.password2) {
      this.setState({ error: 'Please enter password again!' });
      return;
    }

    if (!values.birthday) {
      this.setState({ error: 'Please enter birthday!' });
      return;
    }

    if (!values.email) {
      this.setState({ error: 'Please enter email!' });
      return;
    }

    if (!values.phone) {
      this.setState({ error: 'Please enter phone number!' });
      return;
    }

    if (!values.city) {
      this.setState({ error: 'Please enter city!' });
      return;
    }

    if (!values.country) {
      this.setState({ error: 'Please enter country!' });
      return;
    }

    LoginStore
      .Register(values.name, values.password, values.birthday.unix(), values.email, values.phone, values.city, values.country)
      .then(() => this.props.history.push('/login'))
      .catch(error => this.setState({ error }));
  }

  onCancel = () => {
    this.props.history.replace('/login');
  }

  render() {
    const url = 'https://preview.redd.it/jjvqtw9iapb81.gif?format=mp4&s=e333e78478df813b5b18ecd0905efc8b00ae210c';
    return (
      <Form onFinish={this.onFinish} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', minWidth: '300', width: '30%' }}>
        <Title>Register</Title>
        <Form.Item name='name'>
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item name='password'>
          <Password placeholder='Password' />
        </Form.Item>
        <Form.Item name='password2'>
          <Password placeholder='Confirm Password' />
        </Form.Item>
        <Form.Item name='birthday'>
          <DatePicker placeholder='Birthday' />
        </Form.Item>
        <Form.Item name='email'>
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item name='phone'>
          <Input placeholder='Phone Number' />
        </Form.Item>
        <Form.Item name='city'>
          <Input placeholder='City' />
        </Form.Item>
        <Form.Item name='country'>
          <Input placeholder='Country' />
        </Form.Item>
        <Text type='danger'>{this.state.error}</Text>
        <Form.Item>
          <Button type='primary' htmlType='submit' style={{ width: '100%' }}>Create New Account</Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={this.onCancel} style={{ width: '100%' }}>Cancel</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default withRouter(RegisterPage);
