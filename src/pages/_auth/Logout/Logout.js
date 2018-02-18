import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { logoutUser } from '../../../actions/user';

class Logout extends Component {
  componentDidMount() {
    const {
      dispatch,
      accessToken,
      accessTokenExpiresOn,
    } = this.props;

    dispatch(
      logoutUser(
        accessToken,
        accessTokenExpiresOn
      )
    );
  }

  render() {
    return (
      <Redirect to="/" />
    );
  };
}

function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken,
    accessTokenExpiresOn: state.auth.accessTokenExpiresOn,
  };
}

export default connect(mapStateToProps)(Logout);
