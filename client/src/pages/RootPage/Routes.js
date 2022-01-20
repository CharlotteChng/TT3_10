import FeedsPage from '../FeedsPage';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';

export const unauthenticatedRoutes = [
  { path: '/login', component: <LoginPage /> },
];

export const authenticatedRoutes = [
  { path: '/', component: <HomePage /> },
  { path: '/feeds/:userid', component: <FeedsPage /> }
];