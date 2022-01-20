import FeedsPage from '../FeedsPage';
import HomePage from '../HomePage';

export const unauthenticatedRoutes = [
  { path: '/', component: <HomePage /> }
];

export const authenticatedRoutes = [
  { path: '/feeds/:userid', component: <FeedsPage /> }
];