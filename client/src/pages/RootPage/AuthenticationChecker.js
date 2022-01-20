import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Redirect, matchPath } from 'react-router-dom';
import { unauthenticatedRoutes, authenticatedRoutes } from './Routes';

import LoginStore from '../../stores/LoginStore';

const allRoutes = unauthenticatedRoutes.concat(authenticatedRoutes);

class AuthenticationChecker extends Component {
  render() {
    const { pathname } = this.props.location;
    if (!allRoutes.some(route => matchPath(pathname, { path: route.path, exact: true }))) {
      console.log('A');
      return <Redirect to='/' />;
    }
    else if (unauthenticatedRoutes.some(route => matchPath(pathname, { path: route.path, exact: true }))) {
      console.log('B');
      return null;
    }
    else if (!LoginStore.IsLoggedIn()) {
      console.log('C');
      return <Redirect to='/' />;
    }
    return null;
  }
}

export default withRouter(AuthenticationChecker);
