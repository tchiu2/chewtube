import {
  TOGGLE_SIDE_NAV,
  TOGGLE_OVERLAY,
} from '../actions/ui_actions';

const _defaultState = Object.freeze({
  showNav: true,
  showOverlay: false,
});

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_SIDE_NAV:
      return { ...state, ...action.state };
    case TOGGLE_OVERLAY:
      return { ...state, ...action.state };
    default:
      return state;
  }
};
