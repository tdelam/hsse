import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Tree } from 'antd';
import {
    Col,
    Label,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Input,} from 'reactstrap';

// React Select
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import 'antd/dist/antd.css';

import * as actions from '../../actions';

import questionList from '../Common/QualityAppraisalsQuestions';

const { TreeNode } = Tree;

const STATES = [
    { value: 'new-article', label: 'New Article', className: 'State-ACT' },
    { value: 'data-entry-complete', label: 'Data Entry Complete', className: 'State-NSW' },
    { value: 'live', label: 'Live', className: 'State-Vic' },
    { value: 'deleted', label: 'Deleted', className: 'State-Qld' }
]

class SSEAssignedLinkingStudiesArticleInput extends Component {

    state = {

        dropdownOpen: false,
        splitButtonOpen: false,


        displayColorPicker: false,
        displayColorPickerInput: false,
        colorSelected: '#00AABB',

        selectedOption: '',

        eligibilityFilterModel: {},

        showTitle: true,
        showRelevance: true,
        documentType: false,
        showGeneralArticleInformation: false,
        showEligibility: false,
        showHealthSystemsTopics: false,
        showCanadianAreas: false,
        showDomains: false,
        showLMICFocus: false,
        showProvinceFocus: false,
        showTheme: false,
        showPopulation: false,
        showOntarioPriorityArea: false,
        showTarget: false,
        showOntarioFocus: false,
        showArticle: false,
        showIntergovernmentalOrganizationHealthSystemDocument: false,
        showOntarianHealthSystemDocument: false,
        showCanadianHealthSystemDocument: false,
        showCanadaHealthSystemDocument: false,
        showArticleAssessment: false,


        relevanceValue: ''
    };

    componentDidMount() {

        const { history } = this.props;
        const { articleId } = this.props.match.params;

        this.props.getCurrentUser();
        this.props.fetchSSEAssignedEligibilityFiltersArticle(articleId, history);

    }

    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit = () => {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    onSubmit = e => {
        console.log('Form submitted..');
        e.preventDefault();
    }

    handleChangeSelect = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }

    isJuniorFilter() {
        
        if(this.props.currentArticle && this.props.currentUser) {
            console.log(`inside isJuniorFilter`);
            console.log(`currentUser: ${this.props.currentUser._id}, _elibilityFilterJunior: ${this.props.currentArticle._elibilityFilterJunior}`);
            return this.props.currentUser === this.props.currentArticle._elibilityFilterJunior;
        }
            
    }

    isSeniorFilter() {
        if(this.props.currentArticle && this.props.currentUser) {
            console.log(`inside isSeniorFilter`);
            console.log(`currentUser: ${this.props.currentUser}, _elibilityFilterSenior: ${this.props.currentArticle._elibilityFilterSenior}`);
            return this.props.currentUser === this.props.currentArticle._elibilityFilterSenior;
        }
            
    }

    getInputValues() {

        if(this.isJuniorFilter()) {
            console.log(`isJuniorFilter`);
            this.setState({ eligibilityFilterModel: { test: '' }/*this.props.currentArticle.elibilityFilterJuniorInput*/ });

        } else if(this.isSeniorFilter()) {

            console.log(`isSeniorFilter`);
            this.setState({ eligibilityFilterModel: this.props.currentArticle.elibilityFilterSeniorInput });

        }
    }

    // Functions
    onExpand = (expandedKeys) => {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
          expandedKeys,
          autoExpandParent: false,
        });
    }
    
    onCheck = (checkedKeys) => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    }
    
    onSelect = (selectedKeys, info) => {
        console.log('onSelect', info);
        this.setState({ selectedKeys });
    }

    toggleSection = (section) => {
        this.setState({
            section: !this.state[section]
        })
    }

    showSection = (section) => {
        this.setState({
            section
        })
    }
    
    handleRelevanceChange = (event) => {
        if(event.target.value === 'Yes') {
            this.setState({
                relevanceValue: event.target.value,
                showEligibility: true
            });/*
            this.setState({
                showEligibility: true
            });*/
        }
        
    }

    renderQuestions = () => {
        return (
            questionList.forEach(question => (
                <div>
                <h5></h5>
                                <FormGroup check inline>
                                    <Label check>
                                    <Input type="checkbox" /> Not in English
                                    </Label>
                                </FormGroup>
                                <br />
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" /> No free full-text
                                    </Label>
                                </FormGroup>
                </div>
            )
        ));
    }


    renderGeneralArticleInformation = (generalInfo) => {
        if(generalInfo)
            return (
                <fieldset>
                    <legend className="offset-md-1">General article information</legend>
                    <br />
                    <FormGroup row>
                        <label className="col-md-2 col-form-label"></label>
                        <div className="col-md-10">
                            <div>
                                <h4>Ref ID: { this.props.match.params.articleId }</h4>
                            </div>
                            <div>
                                <h4>Live date: </h4>
                            </div>
                            <div>
                                <h4>Document type: </h4>
                            </div>
                            <div>
                                <h4>Question type: </h4>
                            </div>
                            <div>
                                
                                <div className="checkbox c-checkbox">
                                    <h4>General focus?</h4>
                                    <p>{" "}</p>
                                    <label>
                                    <Input type="checkbox" defaultValue=""/>
                                        
                                        <span className="fa fa-check"></span>{" "}Yes, this article has a general docus (review definition and code accordingly, nothing that the default is set to specific)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </FormGroup>
                    {/** <hr className="my-4"/> **/}
              </fieldset>
            );
    }

    

      
    
      

    

    setStateDocumentType = (documentType) => {
        
        switch(documentType) {

            case 'som': 
                this.setState({ documentType: '' });
                break;
            case 'ontario': 
                this.setState({ documentType: '' })
                break;
            case 'government':
                this.setState({ documentType: '' });
                break;
            default: 
                this.setState({ documentType: 'general' });
                break;
        }
    }

    render() {
        console.log(`currentArticle: ${this.props.currentArticle}`);
        console.log(this.props.currentUser);

        this.getInputValues();

        // used for react select
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;

        // this.setState({ eligibilityFilterModel: this.getInputValues() });

        console.log(this.state.eligibilityFilterModel);

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Quality Appraisals Articles
                        <small>Article Input Page</small>
                    </div>
                </div>
                {/* START card */}
                <Card className="card-default">
                    <CardHeader><div  >
                            <div><h3>Filterer Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } </div>
                            <div>Title: {  } </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                    <fieldset>
                        <form onSubmit={this.onSubmit}>
                        <FormGroup row>
                            <label className="col-md-2 col-form-label"><h4>Complicated Reviews</h4></label>
                            <div className="col-md-10">
                                <FormGroup check inline>
                                    <Label check>
                                    <Input type="checkbox" /> Not in English
                                    </Label>
                                </FormGroup>
                                <br />
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" /> No free full-text
                                    </Label>
                                </FormGroup>
                                <br />
                                <br />
                                <Link to="">Save as Complicated review</Link>

                               
                            </div>
                        </FormGroup>
                        </form>
                    </fieldset>
                    <fieldset>
                        <form onSubmit={this.onSubmit}>
                        <FormGroup row>
                            <label className="col-md-2 col-form-label"><h4>Questions</h4></label>
                            <div className="col-md-10">
                                <h5></h5>
                                <FormGroup check inline>
                                    <Label check>
                                    <Input type="checkbox" /> Not in English
                                    </Label>
                                </FormGroup>
                                <br />
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="checkbox" /> No free full-text
                                    </Label>
                                </FormGroup>
                                <br />
                                <br />
                                <Link to="">Save as Complicated review</Link>

                            </div>
                        </FormGroup>
                        </form>
                    </fieldset>
                    <fieldset>
                        <FormGroup row>
                            <label className="col-md-2 col-form-label"></label>
                            <div className="col-md-10">
                                <p>Testing</p>
                                { this.renderQuestions() }
                            </div>
                        </FormGroup>
                    </fieldset>
                    </CardBody>
                    <CardFooter>
                        <div className="d-flex align-items-center">
                            <div className="ml-auto">
                                <button type="submit" className="btn btn-warning">Cancel</button>{' '}
                                <button type="submit" className="btn btn-info">Save</button>
                            </div>
                            <div className="ml-auto">
                                <button type="submit" className="btn btn-success">Finish</button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                {/* END card */}
            </ContentWrapper>
            );
    }

}

// export default SSEAssignedEligibilityFilterArticleInput;

function mapStateToProps({ sseAssignedEligibilityFiltersArticleQueue, auth }) {
    return {
        currentUser: auth.currentUser,
        errorMessage: sseAssignedEligibilityFiltersArticleQueue.ssePendingEligibilityFiltersArticleErrorMessage,
        currentArticle: sseAssignedEligibilityFiltersArticleQueue.sseAssignedEligibilityFiltersArticleFetch
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'elibigibilityFilterInput'
    })) (SSEAssignedLinkingStudiesArticleInput);