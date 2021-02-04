import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
// import Test from './test'
import SplashPage from './splash_page'
import DashboardContainer from './dashboard/dashboard_container'
import LoginFormContainer from './user_forms/user_signin_container'
import SignUpFormContainer from './user_forms/user_signup_container'
import NavbarContainer from './navbar/navbar_container'
import SidebarContainer from './sidebar/sidebar_container'

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

// import Sidebar from './sidebar/sidebar';
import GapiForm from './task_form/gapi_form'

const App = () => (
  <div className="app">
    <Route exact={true} path="/gapidev" component={GapiForm} />
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
          {/* <ProtectedRoute exact path="users/delivery/new" component={DashboardContainer} /> */}

          {/* customer routes  */}
          <ProtectedRoute exact path="/users/delivery/active" component={CustomerActiveDeliveryContainer} />
          <ProtectedRoute exact path="/users/delivery/unclaimed" component={UnclaimedDeliveryContainer} />
          <ProtectedRoute exact path="/users/delivery/history" component={CustomerHistoryContainer} />
          <ProtectedRoute exact path="/users/delivery/create" component={GapiForm} />

          {/* driver routes  */}
          <ProtectedRoute exact path="/driver/deliveries" component={DeliverTasksIndexContainer} />
          <ProtectedRoute exact path="/driver/currentdelivery" component={CurrentDeliveryContainer} />
          <ProtectedRoute exact path="/driver/history" component={DriverHistoryContainer} />
        </Switch>
        <Route exact={true} path="/gapidev" component={GapiForm} />
        {/* <NavbarContainer /> */}
      </div>
    </div>
    </div>
);

export default App;