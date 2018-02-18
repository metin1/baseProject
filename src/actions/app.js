import moment from 'moment';

import {
  refreshAccessToken,
  fetchPersonalData,
  setUserData,
  receiveLogin,
} from './user';

import {
  InvalidRefreshToken,
  UndefinedAccessToken,
} from '../exceptions/auth';

import {
  loadTranslations,
  setLocale,
} from 'react-redux-i18n';

import translations from '../translations';

export const FETCH_INITIAL_STATE_REQUEST = 'FETCH_INITIAL_STATE_REQUEST';
export const FETCH_INITIAL_STATE_COMPLETE = 'FETCH_INITIAL_STATE_COMPLETE';
export const FETCH_INITIAL_STATE_FAILURE = 'FETCH_INITIAL_STATE_FAILURE';
export const SWITCH_UIVERSION = 'SWITCH_UIVERSION';

export const MOBILE_VERSION = 'MOBILE_VERSION';
export const DESKTOP_VERSION = 'DESKTOP_VERSION';

export function switchUIVersion(version) {
  return {
    type: SWITCH_UIVERSION,
    UIVersion: version,
  };
}

export function requestFetchInitialState() {
  return {
    type: FETCH_INITIAL_STATE_REQUEST,
    isFetching: true,
  };
}

export function receiveInitialState() {
  return {
    type: FETCH_INITIAL_STATE_COMPLETE,
    isFetching: false,
    hasErrors: false,
  };
}

export function fetchInitialStateError() {
  return {
    type: FETCH_INITIAL_STATE_FAILURE,
    isFetching: false,
    hasErrors: true,
  };
}

/**
 * Fetch auth state. Method is meant to be
 * used in a new Promise.
 *
 * Note! This method must be dispatched.
 *
 * @param resolve
 * @param reject
 * @returns {function(*)}
 */
function fetchAuthState(resolve, reject) {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  const expiresOn = localStorage.getItem('ACCESS_TOKEN_EXPIRES_ON');

  return dispatch => {
    if (accessToken && expiresOn) {
      if (parseInt(expiresOn, 10) > (new Date()).getTime()) {
        dispatch(receiveLogin(accessToken, expiresOn));

        resolve();
      }
      else {
        return dispatch(refreshAccessToken())
          .then(() => resolve())
          .catch(e => {
            localStorage.removeItem('ACCESS_TOKEN');
            localStorage.removeItem('ACCESS_TOKEN_EXPIRES_ON');

            reject(new InvalidRefreshToken());
          });
      }
    }

    reject(new UndefinedAccessToken());
  };
}

/**
 * Fetch initial app state.
 *
 * Note! This method must be dispatched.
 *
 * @returns {function(*)}
 */
export function fetchInitialState() {
  return dispatch => {
    dispatch(requestFetchInitialState());

    return Promise.all([
      // Try to fetch user data if is authed
      new Promise((resolve, reject) => {
        dispatch(fetchAuthState(resolve, reject));
      })
      .then(() => dispatch(fetchPersonalData(
        localStorage.getItem('ACCESS_TOKEN')
      )))
      .then(data => ({data, status: 'RESOLVED'}))
      .catch(e => Promise.resolve({e, status: 'REJECTED'}))
    ])
    .then(([{data: userData, status: userStatus}]) => {
      /**
       * TODO
       * Load translations from api.
       */
      dispatch(loadTranslations(translations));

      /**
       * TODO
       * Set locale depending by authed user details,
       * cached value or by location where the user is.
       *
       * Note! in case when user is not authed, do not
       * forget to change locale after he logs in.
       */
      dispatch(setLocale('ro'));
      moment.locale('ro');

      // Set user data only if we succeed in previous step
      if (userStatus === 'RESOLVED') {
        dispatch(setUserData(userData));
      }

      return Promise.resolve();
    })
    .then(() => {
      return dispatch(receiveInitialState());
    })
    .catch(() => {
      return dispatch(fetchInitialStateError());
    });
  };
}
