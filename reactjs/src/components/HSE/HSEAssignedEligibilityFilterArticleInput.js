import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ContentWrapper from '../Layout/ContentWrapper';
import { Tree } from 'antd';
import {
    Col,
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

import {
    healthSystemTopicsTreeData,
    canadianAreasTreeData,
    domainsTreeData,
    lmicFocusTreeData,
    provinceFocusTreeData,


} from './HSEEligibilityFilterTrees';

const { TreeNode } = Tree;


    // used for react select
const STATES = [
    { value: 'australian-capital-territory', label: 'Australian Capital Territory', className: 'State-ACT' },
    { value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
    { value: 'victoria', label: 'Victoria', className: 'State-Vic' },
    { value: 'queensland', label: 'Queensland', className: 'State-Qld' }
]

class HSEAssignedEligibilityFilterArticleInput extends Component {

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
        showGeneralArticleInformation: true,
        showEligibility: true,
        showHealthSystemsTopics: true,
        showCanadianAreas: true,
        showDomains: true,
        showLMICFocus: true,
        showProvinceFocus: true,
        showTheme: false,
        showPopulation: false,
        showTarget: false,
        showOntarioFocus: false,
        showArticle: false
    };

    componentDidMount() {

        const { history } = this.props;
        const { articleId } = this.props.match.params;

        this.props.getCurrentUser();
        this.props.fetchHSEAssignedEligibilityFiltersArticle(articleId, history);

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

    showSection = (selection) => {
        this.setState({
            selection: true
        })
    }    

    renderRelevance = (relevance) => {
        if(relevance)
        return (
            <fieldset>
                <legend className="offset-md-1">Relevance</legend>
                <FormGroup row>
                    <label className="col-md-2 col-form-label"></label>
                    <div className="col-md-10">
                        <div>
                            <p>Is this title relevant to health systems governance, financial or delivery arrangements (or implementation strategies)?</p>
                        </div>
                        <div className="c-radio">
                            <label>
                                <Input type="radio" name="a" defaultValue="option1"/>
                                <span className="fa fa-circle"></span>{" "}Yes</label>
                        </div>
                        <div className="c-radio">
                            <label>
                                <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                <span className="fa fa-circle"></span>{" "}No</label>
                        </div>
                    </div>
                </FormGroup>
            </fieldset>
        );
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
                                <h4>Ref ID: </h4>
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

    renderEligibility = (eligibility) => {
        if(eligibility)
          return (
              <fieldset>
                  <legend className="offset-md-1">Eligibility</legend>
                    <br />
                  <FormGroup row>
                      <label className="col-md-2 col-form-label"></label>
                      <div className="col-md-10">
                          <div>
                              <p>Does the document meet the eligibility creteria for one of the HSE document types listed below (review eligibility criteria and choose one)?</p>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option1"/>
                                  <span className="fa fa-circle"></span>{" "}Evidence briefs for policy</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}Overviews of systematic reviews</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}Systematic reviews addressing other questions</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}Systematic reviews in progress</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}Systematic reviews being planned</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}Economic evaluations and costing studies</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}Health reform descriptions</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}Health system descriptions</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}Intergovernmental organizations' health systems documents</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}Canada's health systems documents</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}Ontario's health system cocuments</label>
                          </div>
                          <div className="c-radio">
                              <label>
                                  <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                  <span className="fa fa-circle"></span>{" "}NO. After reviewing the couement types and eligibility criteria, this record is not eligible for inclutions in HSE.</label>
                          </div>
                         
                      </div>
                  </FormGroup>
              </fieldset>
          );
    }

      renderDocumentType = () => {
          return (
            <fieldset>
                <legend className="offset-md-1">Document Type</legend>
                    <br />
                <FormGroup row>
                    <label className="col-md-2 col-form-label"></label>
                    <div className="col-md-10">
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
                        <div className="c-radio">
                            <label>
                                <Input type="radio" name="a" defaultValue="option1"/>
                                <span className="fa fa-circle"></span>Option one</label>
                        </div>
                        <div className="c-radio">
                            <label>
                                <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                <span className="fa fa-circle"></span>Option two defaultChecke</label>
                        </div>
                        <div className="c-radio">
                            <label>
                                <Input type="radio" defaultValue="option2" defaultChecked="" disabled=""/>
                                <span className="fa fa-circle"></span>Option three defaultChecke and disabled</label>
                        </div>
                        <div className="c-radio">
                            <label>
                                <Input type="radio" name="a" disabled=""/>
                                <span className="fa fa-circle"></span>Option four disabled</label>
                        </div>
                    </div>
                </FormGroup>
            </fieldset>
          );
      }
    
      renderTreeNodes = data => data.map((item) => {
        if (item.children) {
          return (
            <TreeNode title={item.title} key={item.key} dataRef={item}>
              {this.renderTreeNodes(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode {...item} />;
      })
    
    renderTreeSection = (sectionTitle, sectionTreeData, sectionStatus, showLine) => {
        if(sectionStatus) {
            return (
                <fieldset>
                    <legend className="offset-md-1">{ sectionTitle }</legend>
                    <br />
    
                    <FormGroup row>
                        <label className="col-md-1 offset-md-1 col-form-label"></label>
                        <div className="col-md-10">
                            <Tree
                                showLine={showLine}
                                checkable
                                //defaultExpandAll={ true }
                                onExpand={this.onExpand}
                                autoExpandParent={true}
                                onCheck={this.onCheck}
                                // checkedKeys={true}
                                onSelect={this.onSelect}
                                // selectedKeys={this.state.selectedKeys}
                            >
                                {this.renderTreeNodes(sectionTreeData)}
                            </Tree>
                        </div>
                    </FormGroup>
                    <br />
                    <br />
                </fieldset>
            );
        } else {
            return (<div></div>);
        }
        

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

    render() {// console.log(this.props.currentArticle);
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
                    <div>Assessing Eligibility and Assigning Filters Articles
                        <small>Article Input Page</small>
                    </div>
                </div>
                {/* START card */}
                <Card className="card-default">
                    <CardHeader><div style={{ marginTop: '40px', marginBottom: '10px' }} >
                            <div><h3>Filterer Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } {  } Title:  </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                        <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>

                            { this.renderGeneralArticleInformation(this.state.showGeneralArticleInformation) }

                            { this.renderRelevance(this.state.showRelevance) }

                            { this.renderEligibility(this.state.showEligibility) }

                            { this.renderDocumentType(this.state.documentType) }
                                                   
                            { this.renderTreeSection("Health System Topics", healthSystemTopicsTreeData, this.state.showHealthSystemsTopics, false) }

                            { this.renderTreeSection("Canadian Areas", canadianAreasTreeData, this.state.showCanadianAreas, false) }

                            { this.renderTreeSection("Domains", domainsTreeData, this.state.showDomains, true) }

                            { this.renderTreeSection("LMIC Focus", lmicFocusTreeData, this.state.showLMICFocus, false) }

                            { this.renderTreeSection("Province Focus", provinceFocusTreeData, this.state.showProvinceFocus, false) }
    
                            
                        </form>
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

// export default HSEAssignedEligibilityFilterArticleInput;

function mapStateToProps({ hseAssignedEligibilityFiltersArticleQueue, auth }) {
    return {
        currentUser: auth.currentUser,
        errorMessage: hseAssignedEligibilityFiltersArticleQueue.hsePendingEligibilityFiltersArticleErrorMessage,
        currentArticle: hseAssignedEligibilityFiltersArticleQueue.hseAssignedEligibilityFiltersArticleFetch
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'elibigibilityFilterInput'
    })) (HSEAssignedEligibilityFilterArticleInput);
