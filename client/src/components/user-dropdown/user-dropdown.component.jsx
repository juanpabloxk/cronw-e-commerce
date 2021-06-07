import React from 'react';
import { connect } from 'react-redux';

import { signOutStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';

import './user-dropdown.styles.scss';

const UserDrowpDown = ({user: {displayName, email}, signOutStart}) => (
  <div className="user-dropdown">
    <b>{displayName}</b>
    <i>{email}</i>
    <CustomButton
      type='button'
      onClick={signOutStart}>
      SIGN OUT
    </CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(null, mapDispatchToProps)(UserDrowpDown);
