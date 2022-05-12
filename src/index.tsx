import React from 'react';

// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import { App } from 'App';
import { store } from 'redux/store';
import './firabese';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);

reportWebVitals();
