import React from 'react';

import { Route, Switch } from "react-router-dom";

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




const App = () => {
  return (
    <div className="App">
      <ScrollTop />
      <Navbar/>
        <ErrorBoundary>
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/login' component={AuthenticationForm} />
              <Route exact path='/register' component={AuthenticationForm} />
              <Route exact path='/product/:id' component={ProductDescriptionPage} />
              <ProtectedRoute exact path='/profile'>
                <ProfilePage />
              </ProtectedRoute>
              <ProtectedRoute exact path='/checkout'>
                <CheckoutPage />
              </ProtectedRoute>
              <Route exact path='/cart' component={CartPage } />
              <Route path="/page-not-found" component={ErrorPage} />
              <PrivilegedRoute>
                <Route path='/resources/product/edit/:id' >
                  <Product type={'edit'} />
                </Route>
                <Route exact path='/resources/product/create' >
                  <Product type={'create'} />
                </Route>
                <Route exact path='/resources/' >
                  <PanelView />
                </Route>
              </PrivilegedRoute>
          </Switch>
        </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
