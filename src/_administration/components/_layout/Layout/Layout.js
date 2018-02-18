import React, { Component } from 'react';
import classes from 'classnames';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.scss';

import Bundle from '../../../../core/Bundle';
import Header from '../Header';
import Sidebar from '../Sidebar/Sidebar';
import Forbidden from '../../../../pages/_errors/Forbidden/Forbidden';

import {
  actionIsAllowed,
  atLeastOneActionIsAllowed,
} from '../../../../helpers/permissions';

/* eslint-disable */
import loadPageNotFound from 'bundle-loader?lazy!../../../../pages/_errors/PageNotFound';
import loadDashboard from 'bundle-loader?lazy!../../../pages/Dashboard';
/* eslint-enable */

const PageNotFoundBundle = Bundle.generateBundle(loadPageNotFound);
const DashboardBundle = Bundle.generateBundle(loadDashboard);

class Layout extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      sidebarOpen: false,
    };
  }

  render() {
    const {
      permissions,
    } = this.props;

    const {hobbies, ...rest} = permissions;

    /**
     * Improve the way we check if user has access to
     * administration panel.
     */

    if ( ! atLeastOneActionIsAllowed(rest, {
      module: '*',
      action: 'view-all-stored',
    }) &&
    ! actionIsAllowed(permissions, {
      module: 'hobbies',
      action: 'manage-everything',
    })) {
      return (
        <Forbidden />
      );
    }


    const {
      sidebarOpen,
    } = this.state;

    return (
      <div className={s.root}>
        <Sidebar />
        <div
          className={
            classes(
              s.wrap, {
                [s.sidebarOpen]: sidebarOpen,
              }
            )
          }
        >
          <Header
            sidebarToggle={() => {
              this.setState({ sidebarOpen: ! sidebarOpen });
            }}
          />
          <main className={s.content}>
            <Switch>
              <Route path="/administration" exact component={DashboardBundle} />
              <Route component={PageNotFoundBundle} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    permissions: store.user.permissions,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(Layout)));
