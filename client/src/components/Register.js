import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Register extends Component {

    gotoConfirmRegistration = () => console.log("***** Please check your email to confirm registration");

    handleSubmit({ email, password }) {
        this.props.signup({ email, password }, this.gotoConfirmRegistration);
        this.props.history.push('/confirmregistration');
    }
    
    render() {

        const { handleSubmit } = this.props;

        return (
            <div>
                <br />
            <form className="form-size" onSubmit={ handleSubmit(this.handleSubmit.bind(this)) } >
                <h2>Register</h2>
                <br />
                <div className="form-group">
                <label>Email</label>
                <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                    className="form-control"
                /></div>
                {/*</fieldset>
                <fieldset className="form-group">*/}<div className="form-group">
                <label>Password</label>
                <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                    className="form-control"
                />
                
                <div>{this.props.errorMessage}</div>
                <br />
                <button action="submit" className="btn btn-primary">Register</button>
                </div>
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
        form: 'signin', 
        fields: ['email', 'password'] 
    })) (Register);