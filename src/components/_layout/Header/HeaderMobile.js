import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderMobile.scss';
import { withRouter } from 'react-router';

class HeaderMobile extends Component {
  render() {
    return (
      <div>
        mobileHeader
      </div>
    );
  }
}
export default withRouter(withStyles(s)(HeaderMobile));
