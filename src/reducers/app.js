import {
  FETCH_INITIAL_STATE_REQUEST,
  FETCH_INITIAL_STATE_COMPLETE,
  SWITCH_UIVERSION,
} from '../actions/app';

import {
  determineUIVersion
} from '../components/App';

export default function app(state = {
  UIVersion: determineUIVersion(),
  isFetching: true,
}, action) {
  switch (action.type) {
    case FETCH_INITIAL_STATE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_INITIAL_STATE_COMPLETE:
      return Object.assign({}, state, {
        isFetching: false,
      });
    case SWITCH_UIVERSION:
      return Object.assign({}, state, {
        UIVersion: action.UIVersion,
      });
    default:
      return state;
  }
}
