import FeedsPage from '../FeedsPage';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';

export const unauthenticatedRoutes = [
  { path: '/login', component: <LoginPage /> },
  { path: '/register', component: <RegisterPage /> },
];

export const authenticatedRoutes = [
  { path: '/', component: <HomePage /> },
  { path: '/feeds/:userid', component: <FeedsPage /> }
];