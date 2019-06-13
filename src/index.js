import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Routes/Home';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
   document.getElementById('root'));
