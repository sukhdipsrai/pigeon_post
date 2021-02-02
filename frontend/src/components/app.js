import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Test from './test'
import SplashPage from './splash_page'
import DashboardContainer from './dashboard/dashboard_container'
import LoginFormContainer from './user_forms/user_signin_container'
import SignUpFormContainer from './user_forms/user_signup_container'
import '../stylesheets/app.css'

const App = () => (
  <div className="app">

    <div className="inner-app">

    <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
       <AuthRoute exact path="/users/login" component={LoginFormContainer} />
        <AuthRoute exact path="/users/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
         {/* <AuthRoute exact path="/login/drivers" component={LoginDriverFormContainer} />
        <AuthRoute exact path="/signup/drivers" component={SignupDriverFormContainer} /> */}

    </Switch>
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