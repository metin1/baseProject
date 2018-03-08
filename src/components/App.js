import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router';
import { connect, Provider as ReduxProvider } from 'react-redux';

import {
  fetchInitialState,
  MOBILE_VERSION,
  DESKTOP_VERSION,
  switchUIVersion,
} from '../actions/app';

import { PrivateRoute } from "../core/Router";
import Loader from './Loader';
import Bundle from '../core/Bundle';

/* eslint-disable */
import PageNotFound from 'bundle-loader?lazy!../pages/_errors/PageNotFound';
import Home from 'bundle-loader?lazy!../pages/Home';
import Events from 'bundle-loader?lazy!../pages/Events';
import Menu from 'bundle-loader?lazy!../pages/Menu';
/* eslint-enable */

import AdministrationLayout from '../_administration/components/_layout/Layout';
import { AuthRoutes } from '../pages/_auth/Switch';

const PageNotFoundBundle = Bundle.generateBundle(PageNotFound);
const HomeBundle = Bundle.generateBundle(Home);
const EventsBundle = Bundle.generateBundle(Events);
const MenuBundle = Bundle.generateBundle(Menu);

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  ...ReduxProvider.childContextTypes,
};

export const determineUIVersion = () => {
  if (window.innerWidth <= 768) {
    return MOBILE_VERSION;
  }

  return DESKTOP_VERSION;
};

class App extends Component {
  static propTypes = {
    context: PropTypes.shape(ContextType),
    store: PropTypes.any,
  };

  static defaultProps = {
    context: null,
  };

  static contextTypes = {
    router: PropTypes.any,
    store: PropTypes.any,
  };

  static childContextTypes = ContextType;

  constructor(props, context) {
    super(props, context);

    this.handleResize = this.handleResize.bind(this);
  }

  getChildContext() {
    const { context } = this.props;
    const { staticContext } = this.context.router;

    return context || staticContext;
  }

  componentWillMount() {
    const { dispatch } = this.props;

    this.switchUIVersionIfNeeded();

    dispatch(
      fetchInitialState()
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  switchUIVersionIfNeeded() {
    const {
      UIVersion,
      dispatch,
    } = this.props;

    const DUIVersion = determineUIVersion();

    if (UIVersion !== DUIVersion) {
      dispatch(
        switchUIVersion(
          DUIVersion
        )
      );
    }
  }

  handleResize(e) {
    this.switchUIVersionIfNeeded();
  }

  render() {
    const { isFetching, isAuthenticated } = this.props;

    if (isFetching) {
      return (
        <Loader />
      );
    }

    return (
      <Switch>
        <Route path="/" exact component={HomeBundle} />
        <Route path="/events" exact component={EventsBundle} />
        <Route path="/menu" exact component={MenuBundle} />
        <PrivateRoute isAuthenticated={isAuthenticated} path="/administration" component={AdministrationLayout} />
        {AuthRoutes}
        <Route component={PageNotFoundBundle} />
      </Switch>
    );
  }
}

function mapStateToProps(store) {
  return {
    UIVersion: store.app.UIVersion,
    isFetching: store.app.isFetching,
    isAuthenticated: store.auth.isAuthenticated,
  };
}

export default withRouter(connect(mapStateToProps)(App));
