import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser, selectUserDropdownHidden } from '../../redux/user/user.selector';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import UserIcon from '../user-icon/user-icon.component';
import UserDrowpDown from '../user-dropdown/user-dropdown.component';

const Header = ({ currentUser, cartDropDownHidden, userDropdownHidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop' >STOP</Link>
      <CartIcon />
      { currentUser ? 
        <UserIcon user={currentUser} /> 
        : <Link className="option" to='sign-in'>SIGN IN</Link>
      }
    </div>
    { !cartDropDownHidden ? <CartDropDown/> : null }
    { !userDropdownHidden ? <UserDrowpDown user={currentUser}/> : null }
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropDownHidden: selectCartHidden,
  userDropdownHidden: selectUserDropdownHidden
})

export default connect(mapStateToProps)(Header);
