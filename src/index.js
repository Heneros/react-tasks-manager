import React from 'react';
import ReactDOM from 'react-dom';

import { TasksProvider } from './contexts/TasksContext';
import { Provider } from 'react-redux';
import store from './redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Faq from './pages/Faq';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Homepage />
      },
      {
        path: 'faq',
        element: <Faq />
      }
    ]
  }
]);


ReactDOM.render(
  <Provider store={store}>
    <TasksProvider>
      <RouterProvider router={router} />
    </TasksProvider>
  </Provider>
  ,
  document.getElementById('root')
);