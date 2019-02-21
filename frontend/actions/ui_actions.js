export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';
export const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';

export const toggleSideNav = state => ({
  type: TOGGLE_SIDE_NAV,
  state,
});

export const toggleOverlay = state => ({
  type: TOGGLE_OVERLAY,
  state,
});
