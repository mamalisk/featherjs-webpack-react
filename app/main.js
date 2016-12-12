import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application.js';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Application}></Route>
    </Router>
  </Provider>
)


ReactDOM.render(router, document.getElementById('root'));
