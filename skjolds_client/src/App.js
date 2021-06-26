import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { createStructuredSelector } from 'reselect';

import ErrorPage from './Pages/errorpage/error-page.component';
import ErrorBoundary from './Components/Error-boundary/error-boundary.component';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import CartPage from './Pages/Cart-page/cart-page.component';
import CheckoutPage from './Pages/Checkout-page/checkout-page.component';

import ProductDescriptionPage from './Pages/product-description-page/product-description-page.component'
import AuthenticationForm from './Pages/sign_in_up_page/authentication-form.component';
import ProfilePage from './Pages/profile/profile-page.component';
import ProtectedRoute from './Components/Protected-route/protected-route.component';
import PrivilegedRoute from './Components/Privileged-route/privileged-route.component';

import Product from './Components/Product/product.component';

import PanelView from './Components/Panel-view/panel-view.component';

import Navbar from './Components/Navbar/navbar.component';
import Footer from './Components/Footer/footer.component';
import ScrollTop from './Components/ScrollTop/scrolltop.component';
import PageSpinner from './Components/Spinners/page-spinner.component';

import { selectIsCurrentlyAuthenticating } from './Redux/user/user.select';
import { selectIsOrderProcessing } from './Redux/order/order.select';
import { checkCartSessionStorage } from './Redux/cart/cart.actions';



import './App.scss';

const App = ({ isUserAuthenticating, isOrderProcessing, checkCartSessionStorage }) => {


  useEffect(() => {
    
    checkCartSessionStorage()

  }, [])

  return (
    <div className="App">
      <ScrollTop />

      {
        !isUserAuthenticating && !isOrderProcessing ? 
          <>
            <Navbar />
              <ErrorBoundary>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/login' component={AuthenticationForm} />
                    <Route exact path='/register' component={AuthenticationForm} />
                    <Route exact path='/product/:id' component={ProductDescriptionPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/cart' component={CartPage} />
                    <ProtectedRoute exact path='/profile'>
                      <ProfilePage />
                    </ProtectedRoute>
                    <PrivilegedRoute exact path='/resources/product/edit/:id'>
                        <Product type={'edit'} />
                    </PrivilegedRoute>
                    <PrivilegedRoute exact path='/resources/product/create'>
                        <Product type={'create'} />
                    </PrivilegedRoute>
                    <PrivilegedRoute exact path='/resources/'>
                      <PanelView />
                    </PrivilegedRoute>
                    <Route path="*" component={ErrorPage} />
                </Switch>
              </ErrorBoundary>
            <Footer />
          </>
        :
          <div className="page-spinner">
            <PageSpinner />
          </div>
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isUserAuthenticating: selectIsCurrentlyAuthenticating,
  isOrderProcessing: selectIsOrderProcessing 
})

const mapDispatchToProps = dispatch => ({
  checkCartSessionStorage: () => dispatch(checkCartSessionStorage())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
