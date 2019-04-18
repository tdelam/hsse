import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Input, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

import Datetime from 'react-datetime';

import SSEFormValidator from './SSEFormValidator.js';

/**
 * Validation flow using controlled components
 *
 * 1- User type on input
 * 2- onChange event trigger validation
 * 3- Validate methods are listed using "data-validate"
 *    attribute. Content must be an array in json format.
 * 4- The validation returns an object with format {[input name]: status}
 *    where status is an array of boolean per each method
 * 5- Methods that requires an argument, read the 'data-param' attribute
 * 6- Similarly, onSubmit event does a bulk validation on all form elements
 */

class AddSSEArticle extends Component {

    state = {
        /* Group each form state in an object.
           Property name MUST match the form name */
        formRegister: {
            email: '',
            password: '',
            password2: '',
            terms: false
        },
        formLogin: {
            email: '',
            password: ''
        },
        formDemo: {
            text: '',
            email: '',
            number: '',
            integer: '',
            alphanum: '',
            url: '',
            password: '',
            password2: '',
            minlength: '',
            maxlength: '',
            length: '',
            minval: '',
            maxval: '',
            list: ''
        }
    }

     /**
      * Validate input using onChange event
      * @param  {String} formName The name of the form in the state object
      * @return {Function} a function used for the event
      */
    validateOnChange = event => {
        const input = event.target;
        const form = input.form
        const value = input.type === 'checkbox' ? input.checked : input.value;

        const result = SSEFormValidator.validate(input);

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                [input.name]: value,
                errors: {
                    ...this.state[form.name].errors,
                    [input.name]: result
                }
            }
        });

    }

    onSubmit = e => {
        const form = e.target;
        const inputs = [...form.elements].filter(i => ['INPUT', 'SELECT'].includes(i.nodeName))

        const { errors, hasError } = SSEFormValidator.bulkValidate(inputs)

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                errors
            }
        });

        console.log(hasError ? 'Form has errors. Check!' : 'Form Submitted!')

        e.preventDefault()
    }

    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return  this.state[formName] &&
                this.state[formName].errors &&
                this.state[formName].errors[inputName] &&
                this.state[formName].errors[inputName][method]
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>ADD Article
                        <small>Social Systems Evidence</small>
                    </div>
                </div>
                { /* START row */ }
                <Row>
                    
                </Row>
                { /* END row */ }
                { /* START row */ }
                <Row>
                    <div className="col-md-12">
                        <form onSubmit={this.onSubmit} action="" name="formDemo">
                            { /* START card */ }
                            <Card className="card-default">
                                <CardHeader>
                                    <div className="card-title">Add Single Article</div>
                                </CardHeader>
                                <CardBody>
                                    <legend className="mb-4">Basic Article Information</legend>
                                    <fieldset>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-2 col-form-label">Title</label>
                                            <Col md={ 6 }>
                                                <Input type="text"
                                                    name="text"
                                                    invalid={this.hasError('formDemo','text','required')}
                                                    onChange={this.validateOnChange}
                                                    data-validate='["required"]'
                                                    value={this.state.formDemo.text}
                                                />
                                                <span className="invalid-feedback">Field is required</span>
                                            </Col>
                                            <Col md={ 4 }>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-2 col-form-label">Authors</label>
                                            <Col md={ 6 }>
                                                <Input type="email"
                                                    name="email"
                                                    invalid={this.hasError('formDemo','email','required')||this.hasError('formDemo','email','email')}
                                                    onChange={this.validateOnChange}
                                                    data-validate='["required", "email"]'
                                                    value={this.state.formDemo.email}/>
                                                { this.hasError('formDemo','email','required') && <span className="invalid-feedback">Field is required</span> }
                                                { this.hasError('formDemo','email','email') && <span className="invalid-feedback">Field must be valid email</span> }
                                            </Col>
                                            <Col md={ 4 }></Col>
                                        </div>
                                    </fieldset>
    
                                    <fieldset>
                                        <div className="form-group row mb">
                                            <label className="col-md-2 col-form-label mb">Published Date</label>
                                            <Col md={ 6 }>
                                                <Datetime inputProps={{className: 'form-control'}}/>
                                            </Col>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-2 col-form-label">Journal</label>
                                            <Col md={ 6 }>
                                                <Input type="text"
                                                    name="integer"
                                                    invalid={this.hasError('formDemo','integer','integer')}
                                                    onChange={this.validateOnChange}
                                                    data-validate='["integer"]'
                                                    value={this.state.formDemo.integer}/>
                                                <span className="invalid-feedback">Field must be an integer</span>
                                            </Col>
                                            <Col md={ 4 }>
                                            </Col>
                                        </div>
                                    </fieldset>
                                            
                                </CardBody>
                                <CardFooter className="text-center">
                                    <button type="submit" className="btn btn-danger">Cancel</button>
                                    {" "}
                                    <button type="submit" className="btn btn-success">Next</button>
                                </CardFooter>
                            </Card>
                            { /* END card */ }
                        </form>
                    </div>
                </Row>
                { /* END row */ }
            </ContentWrapper>
            );
    }

}

export default AddSSEArticle;

