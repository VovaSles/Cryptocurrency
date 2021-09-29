import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router } from 'react-router-dom';
import {store} from './app/store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
