import React, { Component } from 'react';

import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { unauthenticatedRoutes, authenticatedRoutes } from './Routes';

import AuthenticationChecker from './AuthenticationChecker';

const { Content } = Layout;

export default class RootPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthenticationChecker />
        <Layout style={{ background: 'white' }}>
          <Switch>
            <Route>
              <Content>
                <Switch>
                  {
                    unauthenticatedRoutes.map(route => (
                      <Route exact={true} key={route.path} path={route.path}>
                        {route.component}
                      </Route>
                    ))
                  }
                </Switch>

                <Switch>
                  {
                    authenticatedRoutes.map(route => (
                      <Route exact={true} key={route.path} path={route.path}>
                        {route.component}
                      </Route>
                    ))
                  }
                </Switch>
              </Content>
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
