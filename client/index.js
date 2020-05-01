import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './source/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss';
import App from './App';
import ErrorBoundary from './source/errors/ErrorBoundary';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ErrorBoundary renderItem={() => <div>Error Occured, we will look into this, promise!</div>}>
        <App />
      </ErrorBoundary>
    </Provider>
  </Router>,
  document.getElementById('root')
);
