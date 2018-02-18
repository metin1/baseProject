import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_LOGIN_ERRORS,
  REFRESH_ACCESS_TOKEN_SUCCESS,
} from '../actions/user';

export default function auth(state = {
  isAuthenticated: false,
  loginIsFetching: false,
  signUpIsFetching: false,
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        loginIsFetching: true,
        isAuthenticated: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loginIsFetching: false,
        isAuthenticated: true,
        loginErrors: null,
        accessToken: action.accessToken,
        accessTokenExpiresOn: action.accessTokenExpiresOn,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        loginIsFetching: false,
        isAuthenticated: false,
        loginErrors: action.errors,
      });
    case CLEAR_LOGIN_ERRORS:
      return Object.assign({}, state, {
        loginErrors: null,
      });
    case REFRESH_ACCESS_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        accessToken: action.accessToken,
        accessTokenExpiresOn: action.accessTokenExpiresOn,
      });
    default:
      return state;
  }
}
