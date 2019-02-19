import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { toggleSideNav } from '../../actions/ui_actions';
import NavBar from './navbar';

const msp = ({ session, entities: { users } }) => {
  return { 
    currentUser: users[session.currentUserId],
  }
};

const mdp = {
  logout,
  toggleSideNav, 
};

export default connect(msp, mdp)(NavBar);
