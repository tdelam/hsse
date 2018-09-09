import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SuccessfulPasswordReset extends Component {
    
    render() {

        return (
            <div className="form-size">
                <br />
                <h2>Password has been reset.</h2>
            </div>
        );
    }
}
  
export default connect(null, actions)(SuccessfulPasswordReset);