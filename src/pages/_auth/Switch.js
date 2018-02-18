import React from 'react';
import { Route } from 'react-router';
import LoginComponent from './Login';
import LogoutComponent from './Logout';

export const AuthRoutes = [
  <Route
    key="login"
    path="/login"
    exact
    component={LoginComponent}
  />,
  <Route
    key="logout"
    path="/logout"
    exact
    component={LogoutComponent}
  />,
];
