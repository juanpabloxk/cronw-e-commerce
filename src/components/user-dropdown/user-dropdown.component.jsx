import React from 'react';

import { auth } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component';

import './user-dropdown.styles.scss';

const UserDrowpDown = ({user: {displayName, email}}) => (
  <div className="user-dropdown">
    <b>{displayName}</b>
    <i>{email}</i>
    <CustomButton
      type='button'
      onClick={() => auth.signOut()}>
      SIGN OUT
    </CustomButton>
  </div>
);

export default UserDrowpDown;
