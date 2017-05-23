import React from 'react';
import {
  Router,
  hashHistory,
  Route,
  IndexRoute,
  Redirect,
  browserHistory
} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Institution from './components/Institution';
import List from './components/List';
import Teacher from './components/Teacher';
import User from './components/User';
import Login from './components/Login';
import Reg from './components/Reg';
import Error from './components/Error';

const RouterConfig =()=>{
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="institution" component={Institution}>
          <Route path=":aid" component={Institution}/>
        </Route>
        <Route path="list" component={List}/>
        <Route path="teacher" component={Teacher}/>
        <Route path="user" component={User}/>
        <Route path="login" component={Login}/>
        <Route path="reg" component={Reg}/>
        <Redirect from="*" to='/home'/>
        <Route path="*" component={Error}/>
      </Route>
    </Router>
  )
}

export default RouterConfig;
