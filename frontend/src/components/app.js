import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
// import Test from './test'
import SplashPage from './splash_page'
import DashboardContainer from './dashboard/dashboard_container'
import LoginFormContainer from './user_forms/user_signin_container'
import SignUpFormContainer from './user_forms/user_signup_container'
import NavbarContainer from './navbar/navbar_container'
import SidebarContainer from './sidebar/sidebar_container'
import '../stylesheets/app.css'
// import Sidebar from './sidebar/sidebar';
import Modal from './modal/modal';

const App = () => (
  <div className="app">
    <Modal />
    <NavbarContainer />
    <div className="inner-app">
        <SidebarContainer/>
        <div className="routes">

    <Switch >
        <AuthRoute exact path="/" component={SplashPage} />
        <AuthRoute exact path="/users/login" component={LoginFormContainer} />
        <AuthRoute exact path="/users/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
         {/* <AuthRoute exact path="/login/drivers" component={LoginDriverFormContainer} />
        <AuthRoute exact path="/signup/drivers" component={SignupDriverFormContainer} /> */}

    </Switch>
      </div>
      {/* <Test></Test> */}
    {/* <NavBarContainer />
    <Switch>
    
    <AuthRoute exact path="/" component={MainPage} />
    
    <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
    <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />
  </Switch> */}
  </div>
  </div>
);

export default App;