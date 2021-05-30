import React from 'react';

import { auth } from '../../firebase/firebase.utils'

import './user-dropdown.styles.scss';

const UserDrowpDown = ({user: {displayName, email}}) => (
  <div className="user-dropdown">
    <p>{displayName}</p>
    <p>{email}</p>
    <p className='sign-out' onClick={() => auth.signOut()}>SIGN OUT</p>
  </div>
);

export default UserDrowpDown;
