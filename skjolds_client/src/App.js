import React from 'react';

import { Route, Switch } from "react-router-dom";

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import AuthenticationForm from './Pages/sign_in_up_page/authentication-form.component';
import ProfilePage from './Pages/profile/profile-page.component';

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
          <Route exact path='/profile' component={ProfilePage} />
          {/* <Route exact path='/register' render={ () => <AuthenticationForm formContent={ <Register />} titleText={registerTitleText} subText={registerSubText}  /> } /> */}
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
