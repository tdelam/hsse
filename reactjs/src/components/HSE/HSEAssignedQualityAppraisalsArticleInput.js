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

import QUESTIONS from '../Common/QualityAppraisalsQuestions';

const { TreeNode } = Tree;

const STATES = [
    { value: 'new-article', label: 'New Article', className: 'State-ACT' },
    { value: 'data-entry-complete', label: 'Data Entry Complete', className: 'State-NSW' },
    { value: 'live', label: 'Live', className: 'State-Vic' },
    { value: 'deleted', label: 'Deleted', className: 'State-Qld' }
]

class HSEAssignedQualityAppraisalsArticleInput extends Component {

    state = {

        dropdownOpen: false,
        splitButtonOpen: false,


        displayColorPicker: false,
        displayColorPickerInput: false,
        colorSelected: '#00AABB',

        selectedOption: '',

        
        qualityAppraisalsModel: null,

        relevanceValue: ''
    };

    componentDidMount() {

        const { history } = this.props;
        const { articleId } = this.props.match.params;

        this.props.getCurrentUser();
        this.props.fetchHSEAssignedQualityAppraisalsArticle(articleId, history);

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

    isJuniorAppraiser() {
        
        if(this.props.currentArticle && this.props.currentUser) {
            console.log(`inside isJuniorFilter`);
            console.log(`currentUser: ${this.props.currentUser._id}, _qualityAppraisalsJunior: ${this.props.currentArticle._qualityAppraisalsJunior}`);
            return this.props.currentUser === this.props.currentArticle._qualityAppraisalsJunior;
        }
            
    }

    isSeniorAppraiser() {
        if(this.props.currentArticle && this.props.currentUser) {
            console.log(`inside isSeniorAppraiser`);
            console.log(`currentUser: ${this.props.currentUser}, _qualityAppraisalsSenior: ${this.props.currentArticle._qualityAppraisalsSenior}`);
            return this.props.currentUser === this.props.currentArticle._qualityAppraisalsSenior;
        }
            
    }

    getInputValues() {

        if(this.isJuniorAppraiser()) {
            console.log(`isJuniorAppraiser`);
            this.setState({ qualityAppraisalsModel: this.props.currentArticle.qualityAppraisalsJuniorInput });

        } else if(this.isSeniorAppraiser()) {

            console.log(`isSeniorAppraiser`);
            this.setState({ qualityAppraisalsModel: this.props.currentArticle.qualityAppraisalsSeniorInput });

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
                                <Input type="radio" name="a" value="Yes" onChange={this.handleRelevanceChange} />
                                <span className="fa fa-circle"></span>{" "}Yes</label>
                        </div>
                        <div className="c-radio">
                            <label>
                                <Input type="radio" name="a" value="No" onChange={this.handleRelevanceChange}/>
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

    render() {
        console.log(`currentArticle: ${this.props.currentArticle}`);
        console.log(this.props.currentUser);

        this.getInputValues();

        // used for react select
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;

        // this.setState({ qualityAppraisalModel: this.getInputValues() });

        console.log(this.state.qualityAppraisalsModel);

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
                            <div><h3>Appraiser Inputs</h3></div>
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
                                <h4>1. Was an 'a priori' design provided? The research question and inclusion criteria should be established before the conduct of the review.</h4>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="one"/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="one"/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="one"/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="one"/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <h4>2. Was there duplicate study selection and data extraction? There should be at least two independent data extractors and a consensus procedure for disagreements should be in place.</h4>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="two"/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="two"/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="two"/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="two"/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <h4>3. Was a comprehensive literature search performed? At least two electronic sources should be searched. The report must include years and databases used (e.g., Central, EMBASE, and MEDLINE). Key words and/or MESH terms must be stated and where feasible the search strategy should be provided. All searches should be supplemented by consulting current contents, reviews, textbooks, specialized registers, or experts in the particular field of study, and by reviewing the references in the studies found.</h4>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="three"/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="three"/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="three"/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="three"/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <h4>4. Was the status of publication (i.e. grey literature) not used as an inclusion criterion? The authors should state that they searched for reports regardless of their publication type. The authors should state whether or not they excluded any reports (from the systematic review), based on their publication status, language etc.</h4>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="four"/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="four"/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="four"/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="four"/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <h4>5. Was a list of studies (included and excluded) provided? A list of included and excluded studies should be provided.</h4>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="five"/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="five"/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="five"/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="five"/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <h4>6. Were the characteristics of the included studies provided? In an aggregated form such as a table, data from the original studies should be provided on the participants, interventions and outcomes. The ranges of characteristics in all the studies analyzed e.g., age, race, sex, relevant socioeconomic data, disease status, duration, severity, or other diseases should be reported.</h4>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="six"/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="six"/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="six"/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="six"/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <h4>7.Was the scientific quality of the included studies assessed and documented? 'A priori' methods of assessment should be provided (e.g., for effectiveness studies if the author(s) chose to include only randomized, double-blind, placebo controlled studies, or allocation concealment as inclusion criteria); for other types of studies alternative items will be relevant.</h4>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="seven"/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="seven"/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="seven"/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="seven"/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <h4>8. Was the scientific quality of the included studies used appropriately in formulating conclusions? The results of the methodological rigor and scientific quality should be considered in the analysis and the conclusions of the review, and explicitly stated in formulating recommendations.</h4>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="eight"/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="eight"/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="eight"/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="eight"/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <h4>9. Was a list of studies (included and excluded) provided? A list of included and excluded studies should be provided.</h4>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="nine"/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="nine"/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="nine"/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="nine"/> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <h4>10. Were the characteristics of the included studies provided? In an aggregated form such as a table, data from the original studies should be provided on the participants, interventions and outcomes. The ranges of characteristics in all the studies analyzed e.g., age, race, sex, relevant socioeconomic data, disease status, duration, severity, or other diseases should be reported.</h4>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="ten"/> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="ten"/> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="ten"/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="ten"/> Not applicable
                                    </Label>
                                </FormGroup>

                                <br />
                                <br />
                                <br />
                                <Link to="">Save as Complicated review</Link>

                            </div>
                        </FormGroup>
                        <fieldset>
                                <legend>Legend</legend>
                                <FormGroup row>
                                    <label className="col-md-2 col-form-label">Label under the legend</label>
                                    <div className="col-md-10">
                                        <div className="c-radio">
                                            <label>
                                                <Input type="radio" name="a" defaultValue="option1"/>
                                                <span className="fa fa-circle"></span>Option one</label>
                                        </div>
                                        <div className="c-radio">
                                            <label>
                                            <legend>This is a paragraph</legend>
                                                <span className="fa fa-circle"></span>Option one</label>
                                        </div>
                                        <div className="c-radio">
                                            <label>
                                                <Input type="radio" name="a" defaultValue="option2" defaultChecked=""/>
                                                <span className="fa fa-circle"></span>Option two defaultChecke</label>
                                        </div>
                                        <div className="c-radio">
                                            <label>
                                                <Input type="radio" name="a" disabled=""/>
                                                <span className="fa fa-circle"></span>Option four disabled</label>
                                        </div>
                                    </div>
                                </FormGroup>
                            </fieldset>
                        </form>
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

// export default HSEAssignedQualityAppraisalsArticleInput;

function mapStateToProps({ hseAssignedQualityAppraisalsArticleQueue, auth }) {
    return {
        currentUser: auth.currentUser,
        errorMessage: hseAssignedQualityAppraisalsArticleQueue.hsePendingQualityAppraisalsArticleErrorMessage,
        currentArticle: hseAssignedQualityAppraisalsArticleQueue.hseAssignedQualityAppraisalsArticleFetch
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'hseQualityAppraisalsInput'
    })) (HSEAssignedQualityAppraisalsArticleInput);
