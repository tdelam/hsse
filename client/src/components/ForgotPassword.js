import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ForgotPassword extends Component {

    logSendingEmail = () => console.log("Sending password reset email");

    handleSubmit({ email }) {
        this.props.forgotpassword({ email }, this.logSendingEmail);
        this.props.history.push('/confirmresetpassword');
    }
    
    render() {

        const { handleSubmit } = this.props;

        return (
            <div>
            <br />
            <form className="form-size" onSubmit={ handleSubmit(this.handleSubmit.bind(this)) } >
                <h2>Forgot Password</h2>
                <br />
                <fieldset className="form-group">
                <label>Email</label>
                <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                    className="form-control"
                />
                </fieldset>
                {/*<div>{this.props.errorMessage}</div>*/}
                <br />
                <button action="submit" className="btn btn-primary">Send Reset Email</button>
            </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}
  
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ 
        form: 'forgotPassword', 
        fields: ['email'] 
    })) (ForgotPassword);