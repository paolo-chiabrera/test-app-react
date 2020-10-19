import 'bpk-stylesheets/base';
import 'bpk-stylesheets/base.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reducers from './reducers';

const store = createStore(
  reducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
