import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import ContentWrapper from '../Layout/ContentWrapper';

import {

    Label,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Input,} from 'reactstrap';

// React Select
//import Select from 'react-select';
import 'react-select/dist/react-select.css';

import 'antd/dist/antd.css';

import * as actions from '../../actions';

//import QUESTIONS from '../Common/QualityAppraisalsQuestions';

class HSEAssignedQualityAppraisalsArticleInput extends Component {

    constructor(props, context) {
        super(props, context);

        //this.state = { ...props.currentArticle.hseState.inputValues };
      
        this.state = {

            notInEnglish: false,
            notFreeFullText: false,
    
            questionOne: '', 
            questionTwo: '',
            questionThree: '',
            questionFour: '',
            questionFive: '',
            questionSix: '',
            questionSeven: '',
            questionEight: '',
            questionNine: '',
            questionTen: '',
    
        };
        
    }

    componentDidMount() {

        const { history } = this.props;
        const { articleId } = this.props.match.params;
        

        this.props.fetchHSEAssignedQualityAppraisalsArticle(articleId, history).then(res => {
            
            if(res.qualityAppraisalsJuniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === res._qualityAppraisalsJunior) ) {
                this.setState(res.qualityAppraisalsJuniorInput.hseState.inputValues)
                
            } else if (res.qualityAppraisalsSeniorInput.hseState !== null && this.props.currentUser && (this.props.currentUser.user._id === res._qualityAppraisalsSenior) ) {
                this.setState(res.qualityAppraisalsSeniorInput.hseState.inputValues)
            }
            
        });    
    
    }

    onSubmit = e => {
        console.log('Form submitted..');
        e.preventDefault();
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

    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
        // this.props.form.setFieldsValue({radio:e.target.value})
        console.log(`${e.target.name}:${e.target.value}`)
        // save state
    }

    save = () => {
        this.props.assignHSEAssignedQualityAppraisalsArticleEdit(this.props.match.params.articleId, this.state, this.props.history);
    }                                                                    

    cancel = () => {
        this.props.history.push('/hse/assignedqualityappraisalsarticlequeue')
    }

    finish = () => {
        this.props.assignHSEAssignedQualityAppraisalsArticleEditComplete(this.props.match.params.articeId, this.state, this.props.history);
    }

    render() {

        if(!this.props.currentArticle) {
            return <div>Loading...</div>
        }

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
                            <div><strong>Article Id:</strong> { this.props.match.params.articleId } </div>
                            <div><strong>Title:</strong> { (this.props.currentArticle) && this.props.currentArticle.title } </div>
                        </div>
                    </CardHeader>
                    <hr className="my-4"/>
                    <CardBody>
                    <fieldset>
                        <form onSubmit={this.onSubmit}>
                            <div className="col-md-10">
                                <legend>Complicated Reviews</legend>
                                <fieldset></fieldset>
                                <FormGroup >
                                    
                                        <br />
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
                                    
                                </FormGroup>
                            </div>
                        </form>
                    </fieldset>
                    <fieldset>
                        <form onSubmit={this.onSubmit}>
                        
                            <div className="col-md-10">
                                <legend>Questions</legend>
                                <fieldset></fieldset>
                                <p>1. Was an 'a priori' design provided? The research question and inclusion criteria should be established before the conduct of the review.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="yes" checked={this.state.questionOne === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="no" checked={this.state.questionOne === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="can't answer" checked={this.state.questionOne === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionOne" value="not applicable" checked={this.state.questionOne === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>2. Was there duplicate study selection and data extraction? There should be at least two independent data extractors and a consensus procedure for disagreements should be in place.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="yes" checked={this.state.questionTwo === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="no" checked={this.state.questionTwo === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="can't answer" checked={this.state.questionTwo === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTwo" value="not applicable" checked={this.state.questionTwo === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>3. Was a comprehensive literature search performed? At least two electronic sources should be searched. The report must include years and databases used (e.g., Central, EMBASE, and MEDLINE). Key words and/or MESH terms must be stated and where feasible the search strategy should be provided. All searches should be supplemented by consulting current contents, reviews, textbooks, specialized registers, or experts in the particular field of study, and by reviewing the references in the studies found.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="yes" checked={this.state.questionThree === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="no" checked={this.state.questionThree === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="can't answer" checked={this.state.questionThree === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionThree" value="not applicable" checked={this.state.questionThree === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>4. Was the status of publication (i.e. grey literature) not used as an inclusion criterion? The authors should state that they searched for reports regardless of their publication type. The authors should state whether or not they excluded any reports (from the systematic review), based on their publication status, language etc.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="yes" checked={this.state.questionFour === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="no" checked={this.state.questionFour === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="can't answer" checked={this.state.questionFour === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFour" value="not applicable" checked={this.state.questionFour === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>5. Was a list of studies (included and excluded) provided? A list of included and excluded studies should be provided.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="yes" checked={this.state.questionFive === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="no" checked={this.state.questionFive === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="can't answer" checked={this.state.questionFive === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionFive" value="not applicable" checked={this.state.questionFive === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>6. Were the characteristics of the included studies provided? In an aggregated form such as a table, data from the original studies should be provided on the participants, interventions and outcomes. The ranges of characteristics in all the studies analyzed e.g., age, race, sex, relevant socioeconomic data, disease status, duration, severity, or other diseases should be reported.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="yes" checked={this.state.questionSix === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="no" checked={this.state.questionSix === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="can't answer" checked={this.state.questionSix === "can't answer"} onChange={this.onChange}/> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSix" value="not applicable" checked={this.state.questionSix === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>7.Was the scientific quality of the included studies assessed and documented? 'A priori' methods of assessment should be provided (e.g., for effectiveness studies if the author(s) chose to include only randomized, double-blind, placebo controlled studies, or allocation concealment as inclusion criteria); for other types of studies alternative items will be relevant.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="yes" checked={this.state.questionSeven === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="no" checked={this.state.questionSeven === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="can't answer" checked={this.state.questionSeven === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionSeven" value="not applicable" checked={this.state.questionSeven === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>8. Was the scientific quality of the included studies used appropriately in formulating conclusions? The results of the methodological rigor and scientific quality should be considered in the analysis and the conclusions of the review, and explicitly stated in formulating recommendations.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="yes" checked={this.state.questionEight === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="no" checked={this.state.questionEight === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="can't answer" checked={this.state.questionEight === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionEight" value="not applicable" checked={this.state.questionEight === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>9. Was a list of studies (included and excluded) provided? A list of included and excluded studies should be provided.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="yes" checked={this.state.questionNine === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="no" checked={this.state.questionNine === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="can't answer" checked={this.state.questionNine === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionNine" value="not applicable" checked={this.state.questionNine === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>
                                <br />
                                <p>10. Were the characteristics of the included studies provided? In an aggregated form such as a table, data from the original studies should be provided on the participants, interventions and outcomes. The ranges of characteristics in all the studies analyzed e.g., age, race, sex, relevant socioeconomic data, disease status, duration, severity, or other diseases should be reported.</p>
                                <FormGroup check >
                                                                        
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="yes" checked={this.state.questionTen === 'yes'} onChange={this.onChange} /> Yes
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="no" checked={this.state.questionTen === 'no'} onChange={this.onChange} /> No
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="can't answer" checked={this.state.questionTen === "can't answer"} onChange={this.onChange} /> Can't answer
                                    </Label>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="questionTen" value="not applicable" checked={this.state.questionTen === 'not applicable'} onChange={this.onChange} /> Not applicable
                                    </Label>
                                </FormGroup>

                                <br />
                                <br />
                                <Link to="">Save as Complicated review</Link>

                            </div>
                        
                        </form>
                    </fieldset>
                    </CardBody>
                    <CardFooter>
                        <div className="d-flex align-items-center">
                            <div className="ml-auto">
                                <button type="submit" className="btn btn-warning" onClick={this.cancel}>Cancel</button>{' '}
                                <button type="submit" className="btn btn-info" onClick={this.save}>Save</button>
                            </div>
                            <div className="ml-auto">
                                <button type="submit" className="btn btn-success" onClick={this.finish}>Finish</button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                {/* END card */}
            </ContentWrapper>
            );
    }

}

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
