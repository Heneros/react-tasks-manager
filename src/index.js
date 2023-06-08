import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { TasksProvider } from './contexts/TasksContext';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <TasksProvider>
      <App />
    </TasksProvider>
  </Provider>,
  document.getElementById('root')
);