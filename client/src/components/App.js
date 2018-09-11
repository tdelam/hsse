import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Register from './Register';
import ConfirmRegistration from './ConfirmRegistration';
import Signin from './Signin';
import Signout from './Signout';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import ConfirmPasswordReset from './ConfirmPasswordReset';
import SuccessfulPasswordReset from './SuccessfulPasswordReset';
import Dashboard from './Dashboard';
import Landing from './Landing';

import HSEArticleQuickNew from './hse/HSEArticleQuickNew';


import '../styles/bootstrap.css';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route path="/" exact component={ Landing } />
              <Route path="/register" component={ Register } />
              <Route path="/confirmregistration" component={ ConfirmRegistration } />
              <Route path="/signin" component={ Signin } />
              <Route path="/signout" component={ Signout } />
              <Route path="/forgotpassword" component={ ForgotPassword } />
              <Route path="/resetpassword/:token" component={ ResetPassword } />
              <Route path="/confirmresetpassword" component={ ConfirmPasswordReset } />
              <Route path="/successfulpasswordreset" component={ SuccessfulPasswordReset } />
              <Route path="/dashboard" component={ Dashboard } />

              <Route path="/hsearticlequick/new" component={ HSEArticleQuickNew } />
    

            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
