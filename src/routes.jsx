import App from './App';
import Store from './pages/Store';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <h1>Home Page</h1> },
      { path: 'store', element: <Store /> },
    ],
  },
  { path: 'test', element: <h2>Test Route</h2> },
];
