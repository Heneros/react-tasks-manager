import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



import store from './redux/store';
// import { TasksProvider } from './contexts/TasksContext';
import './css/Style.css';

import Faq from './pages/Faq';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';
// import CreateTask from './pages/CreateTask';


import EditTask from './pages/EditTask';
import DetailsTask from './pages/DetailsTask';


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
      },
      // {
      //   path: 'create-task',
      //   element: <CreateTask />
      // },
      {
        path: 'tasks/:id',
        element: <DetailsTask />
      },
      {
        path: 'edit/:id',
        element: <EditTask />
      },
    ]
  }
]);


ReactDOM.render(
  <Provider store={store}>

      <RouterProvider router={router} />

  </Provider>
  ,
  document.getElementById('root')
);