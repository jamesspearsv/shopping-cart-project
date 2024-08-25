import App from './App';
import Home from './pages/Home';
import Store from './pages/Store';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'store', element: <Store /> },
    ],
  },
];
