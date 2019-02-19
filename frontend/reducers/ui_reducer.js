import {
  TOGGLE_SIDE_NAV,
} from '../actions/ui_actions';

const _defaultState = Object.freeze({
  showNav: true,
});

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_SIDE_NAV:
      return { ...state, ...action.state };
    default:
      return state;
  }
};
