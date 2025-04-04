import RootLayout from '../pages/RootLayout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import CardPage from '../pages/CardPage';

const routes = [
  {
    path: '/Shopping-Cart',
    element: <RootLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'shop/:title', element: <CardPage /> },
    ],
  },
];

export default routes;
