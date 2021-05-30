import React from 'react';

import './user-icon.styles.scss'

const UserIcon = ({ user: {displayName, photoURL} }) => (
  <div className="user-icon-container">
    <img className='user-icon-image' src={photoURL} alt="" />
  </div>
)

export default UserIcon;
