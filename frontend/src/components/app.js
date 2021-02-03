import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
<<<<<<< HEAD
// import Test from './test'
import { Switch, Route } from 'react-router-dom';
import Test from './test'
=======
import { Switch, Route } from 'react-router-dom';
// import Test from './test'
>>>>>>> creating componets for google api forms
import SplashPage from './splash_page'
import DashboardContainer from './dashboard/dashboard_container'
import LoginFormContainer from './user_forms/user_signin_container'
import SignUpFormContainer from './user_forms/user_signup_container'
import NavbarContainer from './navbar/navbar_container'
import SidebarContainer from './sidebar/sidebar_container'
<<<<<<< HEAD

//customer components
import CustomerActiveDeliveryContainer from './customer_dashboard/customer_active_delivery_container'
import UnclaimedDeliveryContainer from './customer_dashboard/unclaimed_delivery_container'
import CustomerHistoryContainer from './customer_dashboard/customer_history_container'

//driver components
import DeliverTasksIndexContainer from './driver_dashboard/delivery_tasks_container'
import CurrentDeliveryContainer from './driver_dashboard/current_delivery_container'
import DriverHistoryContainer from './driver_dashboard/driver_history_container'

import '../stylesheets/app.css'
import Sidebar from './sidebar/sidebar';
import Modal from './modal/modal';
=======
>>>>>>> creating componets for google api forms

// import Sidebar from './sidebar/sidebar';
import GapiForm from '../components/gapi_form'
const App = () => (
  <div className="app">
<<<<<<< HEAD
    <Modal />
    <NavbarContainer />
    <div className="inner-app">
      <SidebarContainer />
      <div className="routes">

        <Switch >
          <AuthRoute exact path="/" component={SplashPage} />
          <AuthRoute exact path="/users/login" component={LoginFormContainer} />
          <AuthRoute exact path="/users/signup" component={SignUpFormContainer} />
          <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
          {/* <ProtectedRoute exact path="users/delivery/new" component={DashboardContainer} /> */}

          {/* customer routes  */}
          <ProtectedRoute exact path="/users/delivery/active" component={CustomerActiveDeliveryContainer} />
          <ProtectedRoute exact path="/users/delivery/unclaimed" component={UnclaimedDeliveryContainer} />
          <ProtectedRoute exact path="/users/delivery/history" component={CustomerHistoryContainer} />
          
          {/* driver routes  */}
          <ProtectedRoute exact path="/driver/deliveries" component={DeliverTasksIndexContainer} />
          <ProtectedRoute exact path="/driver/currentdelivery" component={CurrentDeliveryContainer} />
          <ProtectedRoute exact path="/driver/history" component={DriverHistoryContainer} />
        </Switch>
=======
    <Route exact={true} path="/gapidev" component={GapiForm} />
    {/* <NavbarContainer /> */}
    <div className="inner-app">
        {/* <SidebarContainer/> */}
        <div className="routes">

    <Switch >
        {/* <AuthRoute exact={true} path="/" component={SplashPage} />
       <AuthRoute exact path="/users/login" component={LoginFormContainer} />
        <AuthRoute exact path="/users/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/dashboard" component={DashboardContainer} /> */}


         {/* <AuthRoute exact path="/login/drivers" component={LoginDriverFormContainer} />
        <AuthRoute exact path="/signup/drivers" component={SignupDriverFormContainer} /> */}

    </Switch>
>>>>>>> creating componets for google api forms
      </div>

    </div>
  </div>
);

export default App;