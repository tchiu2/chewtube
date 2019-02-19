import { connect } from 'react-redux';
import SideNav from './sidenav';

const msp = ({ ui: { showNav } }) => {
  return {
    showNav,
  }
};

export default connect(msp, null)(SideNav);
