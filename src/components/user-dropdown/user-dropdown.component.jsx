import React from 'react';

import { auth } from '../../firebase/firebase.utils'

import './user-dropdown.styles.scss';

const UserDrowpDown = ({user: {displayName, email}}) => (
  <div className="user-dropdown">
    <b>{displayName}</b>
    <i>{email}</i>
    <p 
      className='sign-out'
      onClick={() => auth.signOut()}>SIGN OUT
    </p>
  </div>
);

export default UserDrowpDown;
