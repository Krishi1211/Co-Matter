import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Layout } from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'contact',
        Component: Contact,
      },
    ],
  },
]);
