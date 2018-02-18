import { combineReducers } from 'redux';
import { LOGOUT } from '../actions/user';
import { pick } from 'lodash';
import app from './app';
import auth from './auth';
import runtime from './runtime';
import { i18nReducer as i18n } from 'react-redux-i18n';

const combinedReducers = combineReducers({
  app,
  auth,
  runtime,
  i18n,
});

/**
 * Extend combined reducers and define a global action
 * LOGOUT that will reset app state on user Logout.
 *
 * @param state
 * @param action
 * @returns {any}
 */
export default (state, action) => {
  if (action.type === LOGOUT) {
    state = Object.assign({}, {}, pick(state, ['app', 'i18n']));
  }

  return combinedReducers(state, action);
};
