import React, { Component } from 'react';

import { Button, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import LoginStore from '../../stores/LoginStore';

class TopNav extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    LoginStore.Logout();
    this.props.history.push('/login');
  }

  render() {
    const me = LoginStore.GetMe();

    return (
      <Menu mode='horizontal' selectedKeys={this.props.history.location.pathname}>
        <Menu.Item key='/'>
          <Link to='/'>Home</Link>
        </Menu.Item>

        {
          me ?
            <>
              <Menu.Item key={`/feeds/${me.id}`}>
                <Link to={`/feeds/${me.id}`}>My Feed</Link>
              </Menu.Item>
              <Menu.SubMenu style={{ position: 'absolute', right: 16 }} key='profile' icon={<UserOutlined />} title={me.name}>
                <Menu.Item key={`/profile/${me.id}`}>
                  View Profile
                </Menu.Item>
                <Menu.Item key='/logout'>
                  <Button type='primary' onClick={this.logout} style={{ width: '100%', height: '100%' }}>Logout</Button>
                </Menu.Item>
              </Menu.SubMenu>
            </>
            :
            <Menu.Item style={{ position: 'absolute', right: 16 }} key='login'>
              <Button type='primary'>
                <Link to='/login'>Login</Link>
              </Button>
            </Menu.Item>
        }
      </Menu>
    );
  }
}

export default withRouter(TopNav);
