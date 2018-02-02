import React from 'react';
import { Router, Route } from 'dva/router';
import MainLayout from './components/Layout.js';
import SearchList from './components/SearchList.js';
import Admin from './components/Admin.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route component={MainLayout}>
        <Route path="/search" component={SearchList}/>
        <Route path="/admin" component={Admin} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
