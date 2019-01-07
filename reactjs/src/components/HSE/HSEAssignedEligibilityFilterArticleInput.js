import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardHeader, CardBody, Input, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import * as actions from '../../actions';

import $ from 'jquery';
// Wizard (jquery.steps)
import 'jquery-validation/dist/jquery.validate.js';
import 'jquery-steps/build/jquery.steps.min.js';


class HSEAssignedEligibilityFilterArticleInput extends Component {

    state = {
        userName: '',
        password: '',
        confirm: '',
        name: '',
        surname: '',
        email: '',
        address: '',
        terms: false,
        elibigilityFilter: null
    }

    componentDidMount() {

        const { history } = this.props;
        const { articleId } = this.props.match.params;

        // VALIDATION
        // -----------------------------------

        const form = $(this.refs.wizardform);

        form.validate({
            errorPlacement: (error, element) => element.is(':checkbox') ? element.parent().parent().after(error) : element.after(error),
            rules: {
                confirm: {
                    equalTo: '#password'
                }
            }
        });

        form.children('div').steps({
            headerTag: 'h4',
            bodyTag: 'fieldset',
            transitionEffect: 'slideLeft',
            onStepChanging: (event, currentIndex, newIndex) => {
                form.validate().settings.ignore = ':disabled,:hidden';
                console.log('Step changed');
                return form.valid();
            },
            onFinishing: (event, currentIndex) => {
                form.validate().settings.ignore = ':disabled';
                return form.valid();
            },
            onFinished: (event, currentIndex) => {
                // Submit form
                console.log('Submitted!');
                // console.log(JSON.stringify(this.state));
                // form.submit();
            }
        });

        // VERTICAL
        // -----------------------------------
        const verticalForm = $(this.refs.examplevertical);
        
        verticalForm.steps({
            headerTag: 'h4',
            bodyTag: 'section',
            transitionEffect: 'slideLeft',
            stepsOrientation: 'vertical',

            onStepChanging: (event, currentIndex, newIndex) => {
                this.saveValues(articleId, this.state.elibigilityFilter, history);
                //verticalForm.validate().settings.ignore = ':disabled,:hidden';
                return true;

            },
            onFinished: (event, currentIndex) => {
                // Submit form
                this.saveAndFinish(articleId, this.state.elibigilityFilter, history);
                //console.log(JSON.stringify(this.state));
                // form.submit();
            }
        });
        
        this.props.fetchHSEAssignedEligibilityFiltersArticle(articleId, history);

    }

    saveValues(articleId, inputValues, history) {
        this.props.assignHSEPendingEligibilityFiltersArticleEdit(articleId, inputValues, history);
    }

    saveAndFinish(articleId, inputValues, history) {
        this.props.assignHSEPendingEligibilityFiltersArticleEditComplete(articleId, inputValues, history);
    }

    handleInputChange = event => {
        const target = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }

    render() {
        console.log(this.props.currentArticle);
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Assessing Eligibility and Assigning Filters Articles
                        <small>Article resolution page</small>
                    </div>
                </div>
                <Card className="card-default">
                    <CardHeader>Basic Vertical Example</CardHeader>
                    <CardBody>
                        <div ref='examplevertical'>
                            <h4>Eligibility</h4>
                            <section>
                                {/*<p>Try the keyboard navigation by clicking arrow left or right!</p>*/}
                                <fieldset>
                                <legend>Input variants</legend>
                                <FormGroup row>
                                    {/*<label className="col-md-2 col-form-label">Custom Checkboxes &amp; radios</label>*/}
                                    <div className="col-md-6">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option one</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option two defaultChecke</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option three defaultChecke and disabled</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option four disabled</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option one</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option two defaultChecke</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option three defaultChecke and disabled</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option four disabled</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option one</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option two defaultChecke</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option three defaultChecke and disabled</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option four disabled</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option one</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option two defaultChecke</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option three defaultChecke and disabled</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Option four disabled</label>
                                        </div>
                                    </div>
                                </FormGroup>
                            </fieldset>
                            </section>
                            <h4>Effects</h4>
                            <section>
                                <p>Wonderful transition effects.</p>
                            </section>
                            <h4>Pager</h4>
                            <section>
                                <p>The next and previous buttons help you to navigate through your content.</p>
                            </section>
                            <h4>Pager</h4>
                            <section>
                                <p>The next and previous buttons help you to navigate through your content.</p>
                            </section>
                            <h4>Pager</h4>
                            <section>
                                <p>The next and previous buttons help you to navigate through your content.</p>
                            </section>
                            <h4>Pager</h4>
                            <section>
                                <p>The next and previous buttons help you to navigate through your content.</p>
                            </section>
                            <h4>Pager</h4>
                            <section>
                                <p>The next and previous buttons help you to navigate through your content.</p>
                            </section>
                            <h4>Pager</h4>
                            <section>
                                <p>The next and previous buttons help you to navigate through your content.</p>
                            </section>
                        </div>
                    </CardBody>
                </Card>
            </ContentWrapper>
            );
    }

}

function mapStateToProps({ hseAssignedEligibilityFiltersArticleQueue }) {
    return {
        errorMessage: hseAssignedEligibilityFiltersArticleQueue.hsePendingEligibilityFiltersArticleErrorMessage,
        currentArticle: hseAssignedEligibilityFiltersArticleQueue.hseAssignedEligibilityFiltersArticleFetch
    }
}

export default connect(mapStateToProps, actions)(HSEAssignedEligibilityFilterArticleInput);
