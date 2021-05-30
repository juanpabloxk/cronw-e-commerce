import React from 'react';
import { connect } from 'react-redux';
import { toggleUserDropDown } from '../../redux/user/user.actions';

import './user-icon.styles.scss'
import { ReactComponent as UserImage } from '../../assets/default-user-icon.svg';

const UserIcon = ({ user: {photoURL}, toggleDropdown }) => (
  <div className="user-icon-container" onClick={() => toggleDropdown()}>
    {
      photoURL ? 
        <img className='user-icon-image' src={photoURL} alt="User icon" />
        : <UserImage className='user-icon-image' />
    }
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleUserDropDown())
})

export default connect(null,mapDispatchToProps)(UserIcon);
