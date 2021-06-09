import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { GlobalStyles } from './global.styles'
import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component'

import { selectCurrentUser } from './redux/user/user.selector'
import { createStructuredSelector } from "reselect";
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInUpPage = lazy(() => import('./pages/sign-in-up/sign-in-up.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))

const App = ({ currentUser, checkUserSession }) => {
  
  useEffect(() => {
    checkUserSession()
  },[checkUserSession])
  
  return (
    <div className="App">
      <GlobalStyles/>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/sign-in'
            render={() =>
              currentUser ? ( <Redirect to='' /> ) : ( <SignInUpPage /> )
            } />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
    );
}
  
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
