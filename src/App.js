import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInUpPage from './pages/sign-in-up/sign-in-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import { selectCurrentUser } from './redux/user/user.selector'
import { createStructuredSelector } from "reselect";
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
  
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  
  componentWillUnmount() {
    //this.unsuscribeFromAuth();
  }
  
  render()
  {
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/sign-in'
        render={() =>
          this.props.currentUser ? ( <Redirect to='' /> ) : ( <SignInUpPage /> )
        } />
        </Switch>
      </div>
      );
  }
}
  
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
