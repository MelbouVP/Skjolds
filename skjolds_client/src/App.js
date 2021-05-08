import React from 'react';

import { Route, Switch } from "react-router-dom";

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
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
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/login' component={AuthenticationForm} />
          <Route exact path='/register' component={AuthenticationForm} />
          <ProtectedRoute exact path='/profile'>
            <ProfilePage />
          </ProtectedRoute>
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
          {/* <PrivilegedRoute exact path='/resources/create' >
          </PrivilegedRoute>
          <PrivilegedRoute exact path='/resources/edit' >
          </PrivilegedRoute> */}
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
