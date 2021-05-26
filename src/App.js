import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInUpPage from './pages/sign-in-up/sign-in-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selector'
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  unsuscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser( {
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      }
      else {
        setCurrentUser(userAuth)
      }
    })
    console.log('state:',this.state);
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
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
            this.props.currentUser ? (
              <Redirect to='' />
            ) : (
              <SignInUpPage />
            )
          } />
      </Switch>
      </div>
      );
    }
  }

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  })

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  