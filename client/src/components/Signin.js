import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import * as actions from '../actions';

class Signin extends Component {

    componentWillMount() {

    }

    gotoDashboard = () => this.props.history.push('/dashboard');

    handleSubmit({ email, password }) {
        this.props.signin({ email, password }, this.gotoDashboard);
    }
    
    render() {

        const { handleSubmit } = this.props;

        return (
            <div>
                <br />
            
            <form className="form-size" onSubmit={ handleSubmit(this.handleSubmit.bind(this)) } >
                <h2>Sign In</h2>
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
                <div>{this.props.errorMessage}</div>
                <br />
                <button action="submit" className="btn btn-primary">Sign In</button>
                <span> </span>
                <Link to="/forgotpassword">Forgot Password?</Link>
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
    })) (Signin);