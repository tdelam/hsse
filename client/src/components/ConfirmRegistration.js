import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ConfirmRegistration extends Component {
    
    render() {

        return (
            <div className="form-size">
                <br />
                <h2>Please check your email to confirm registration.</h2>
            </div>
        );
    }
}
  
export default connect(null, actions)(ConfirmRegistration);