import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withRouter } from 'react-router';
import s from './Header.scss';

class Header extends Component {
  render() {
    return (
      <div>
       Header
      </div>
    );
  }
}

export default  withRouter(withStyles(s)(Header));
