import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ResetPassword extends Component {

    logPasswordChanged = () => console.log("Password has been changed");

    

    handleSubmit({ password, confirmPassword }) {
        const { match: { params } } = this.props;
        this.props.resetPassword({ password, confirmPassword }, params.token, this.logPasswordChanged);
        this.props.history.push('/');
    }
    
    render() {

        const { handleSubmit } = this.props;

        return (
            <div className="form-size">
            <br />
            <form onSubmit={ handleSubmit(this.handleSubmit.bind(this)) } >
                <h2>Reset Password</h2>
                <br />
                <fieldset className="form-group">
                <label>Password</label>
                <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                    className="form-control"
                />
                </fieldset>
                <fieldset className="form-group">
                <label>Confirm Password</label>
                <Field
                    name="confirmPassword"
                    type="password"
                    component="input"
                    autoComplete="none"
                    className="form-control"
                />
                </fieldset>
                {/*<div>{this.props.errorMessage}</div>*/}
                <br />
                <button action="submit" className="btn btn-primary">Reset</button>
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
        form: 'resetPassword', 
        fields: ['password', 'confirmPassword'] 
    })) (ResetPassword);