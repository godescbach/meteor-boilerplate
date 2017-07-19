import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Login from './../ui/Login';
import Signup from './../ui/Signup';
import Dashboard from './../ui/Dashboard';
import NotFound from './../ui/NotFound';

//export const browserHistory = createBrowserHistory();

//window.browserHistory = browserHistory;
const unauthenticatedPages = ['/', '/signup', '/signup/'];
const authenticatedPages = ['/dashboard', '/dashboard/'];

const onEnterPublicPage = () => {
  console.log('In onEnterPublicPage.');
  if(!!Meteor.userId()) {
    browserHistory.replace('/dashboard');
    console.log('In onEnterPublicPage and pushed "/dashboard".');
  }
};

const onEnterPrivatePage = () => {
  if(!Meteor.userId()) {
    browserHistory.replace('/');
  }
};

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
  console.log('isAuthenticated', isAuthenticated);
};

export const routes = (
  <Router history={browserHistory}>
    {/*<Switch>*/}
      <Route path="/" onEnter={onEnterPublicPage} component={Login}/>
      <Route path="/signup" onEnter={onEnterPublicPage} component={Signup}/>
      <Route path="/dashboard" component={Dashboard} onEnter={onEnterPrivatePage}/>
      <Route path="*" component={NotFound} />
    {/*</Switch>*/}
  </Router>
);
