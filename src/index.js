import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



import store from './redux/store';
import { TasksProvider } from './contexts/TasksContext';
import Faq from './pages/Faq';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
import './css/Style.css';


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