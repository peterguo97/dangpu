import React from 'react';
import { Router, Route } from 'dva/router';
import MainLayout from './components/Layout.js';
import SearchList from './components/SearchList.js';
import Admin from './components/Admin.js';
import Detail from './components/Detail.js';
import ChangeForm from './components/Form.js';
import Main from './components/Main.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route component={MainLayout}>
        <Route path="/" component={Main} />
        <Route path="/search" component={SearchList}/>
        <Route path="/admin" component={Admin} />
        <Route path="/detail" component={Detail} />
        <Route path="/form(/:number)" component={ChangeForm} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
