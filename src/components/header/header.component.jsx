import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser, selectUserDropdownHidden } from '../../redux/user/user.selector';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import UserIcon from '../user-icon/user-icon.component';
import UserDrowpDown from '../user-dropdown/user-dropdown.component';

import { 
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink}
from './header.styles'

const Header = ({ currentUser, cartDropDownHidden, userDropdownHidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop' >STOP</OptionLink>
      <CartIcon />
      { currentUser ? 
        <UserIcon user={currentUser} /> 
        : <OptionLink to='sign-in'>SIGN IN</OptionLink>
      }
    </OptionsContainer>
    { !cartDropDownHidden ? <CartDropDown/> : null }
    { !userDropdownHidden ? <UserDrowpDown user={currentUser}/> : null }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropDownHidden: selectCartHidden,
  userDropdownHidden: selectUserDropdownHidden
})

export default connect(mapStateToProps)(Header);
