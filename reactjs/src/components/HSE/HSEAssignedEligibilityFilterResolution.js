import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    FormGroup,
    FormFeedback,
    FormText,
    Label,
    //InputGroup,
    //InputGroupAddon,
    //InputGroupButtonDropdown,
    //InputGroupText,
    Input,
    //Button,
    //DropdownToggle,
    //DropdownMenu,
    //DropdownItem 
} from 'reactstrap';


import * as actions from '../../actions';

class HSEAssignedEligibilityFilterResolution extends Component {

    state = {
        dropdownOpen: false,
        splitButtonOpen: false
    }

    componentDidMount() {
        
        const { history } = this.props;
        const { articleId } = this.props.match.params;

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

        e.preventDefault();
        console.log('Form submitted..');
    
    }

    render() {
        console.log(this.props.currentArticle);

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Eligibility & Filter Article Resolution
                        <small>Article resolution page</small>
                    </div>
                </div>
                { /* START row */ }
                <Row>
                    <Col lg={ 6 }>
                        <Card className="card-default">
                        <CardHeader>Form elements</CardHeader>
                        <CardBody>
                            <form className="form-horizontal" method="get" onSubmit={this.onSubmit}>
                                
                                <fieldset>
                                    <legend>Input variants</legend>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Custom Checkboxes &amp; radios</label>
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
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Inline checkboxes</label>
                                        <div className="col-md-10">
                                            <label className="c-checkbox">
                                                <Input id="inlineCheckbox10" type="checkbox" defaultValue="option1"/>
                                                <span className="fa fa-check"></span>a</label>
                                            <label className="c-checkbox">
                                                <Input id="inlineCheckbox20" type="checkbox" defaultValue="option2"/>
                                                <span className="fa fa-check"></span>b</label>
                                            <label className="c-checkbox">
                                                <Input id="inlineCheckbox30" type="checkbox" defaultValue="option3"/>
                                                <span className="fa fa-check"></span>c</label>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Rounded</label>
                                        <div className="col-md-10">
                                            <label className="checkbox c-checkbox c-checkbox-rounded">
                                                <Input id="roundedcheckbox10" type="checkbox" defaultChecked/>
                                                <span className="fa fa-check"></span>Lorem</label>
                                            <label className="checkbox c-checkbox c-checkbox-rounded">
                                                <Input id="roundedcheckbox20" type="checkbox"/>
                                                <span className="fa fa-check"></span>Ipsum</label>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Inline radios</label>
                                        <div className="col-md-10">
                                            <label className="c-radio">
                                                <Input id="inlineradio1" type="radio" name="i-radio" defaultValue="option1" defaultChecked/>
                                                <span className="fa fa-circle"></span>a</label>
                                            <label className="c-radio">
                                                <Input id="inlineradio2" type="radio" name="i-radio" defaultValue="option2"/>
                                                <span className="fa fa-circle"></span>b</label>
                                            <label className="c-radio">
                                                <Input id="inlineradio3" type="radio" name="i-radio" defaultValue="option3"/>
                                                <span className="fa fa-circle"></span>c</label>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Custom icons</label>
                                        <div className="col-md-10">
                                            <label className="c-radio">
                                                <Input id="inlineradio10" type="radio" name="i-radio" defaultValue="option1" defaultChecked/>
                                                <span className="fa fa-check"></span>a</label>
                                            <label className="c-radio">
                                                <Input id="inlineradio20" type="radio" name="i-radio" defaultValue="option2" defaultChecked/>
                                                <span className="fa fa-user"></span>b</label>
                                            <label className="c-radio">
                                                <Input id="inlineradio30" type="radio" name="i-radio" defaultValue="option3" defaultChecked/>
                                                <span className="fa fa-tint"></span>c</label>
                                            <br/>
                                            <label className="c-checkbox">
                                                <Input id="inlinecheckbox10" type="checkbox" defaultValue="option1" defaultChecked/>
                                                <span className="fa fa-star"></span>a</label>
                                            <label className="c-checkbox">
                                                <Input id="inlinecheckbox20" type="checkbox" defaultValue="option2" defaultChecked/>
                                                <span className="fa fa-heart"></span>b</label>
                                            <label className="c-checkbox">
                                                <Input id="inlinecheckbox30" type="checkbox" defaultValue="option3" defaultChecked/>
                                                <span className="fa fa-bell"></span>c</label>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Input validation</label>
                                        <div className="col-md-10">
                                            <FormGroup>
                                            <Label for="exampleEmail">Input without validation</Label>
                                            <Input />
                                            <FormFeedback>You will not be able to see this</FormFeedback>
                                            <FormText>Example help text that remains unchanged.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                            <Label for="exampleEmail">Valid input</Label>
                                            <Input valid />
                                            <FormFeedback valid>Sweet! that name is available</FormFeedback>
                                            <FormText>Example help text that remains unchanged.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                            <Label for="examplePassword">Invalid input</Label>
                                            <Input invalid />
                                            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                            <FormText>Example help text that remains unchanged.</FormText>
                                            </FormGroup>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Column sizing</label>
                                        <div className="col-md-10">
                                            <Row>
                                                <Col lg="2">
                                                    <Input type="text" placeholder=".col-lg-2"/>
                                                </Col>
                                                <Col lg="3">
                                                    <Input type="text" placeholder=".col-lg-3"/>
                                                </Col>
                                                <Col lg="4">
                                                    <Input type="text" placeholder=".col-lg-4"/>
                                                </Col>
                                            </Row>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <CardFooter className="text-center">
                                    <button type="submit" className="btn btn-info">Resolve</button>
                                </CardFooter>
                            </form>
                        </CardBody>
                    </Card>
                    </Col>

                    {/* START card */}
                    
                    {/* END card */}

                
                    {/* END row */}
                    {/* START card */}
                    <Col lg={ 6 }>
                    <Card className="card-default">
                        <CardHeader>Form elements</CardHeader>
                        <CardBody>
                            <form className="form-horizontal" method="get" onSubmit={this.onSubmit}>
                                
                                <fieldset>
                                    <legend>Input variants</legend>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Custom Checkboxes &amp; radios</label>
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
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Inline checkboxes</label>
                                        <div className="col-md-10">
                                            <label className="c-checkbox">
                                                <Input id="inlineCheckbox10" type="checkbox" defaultValue="option1"/>
                                                <span className="fa fa-check"></span>a</label>
                                            <label className="c-checkbox">
                                                <Input id="inlineCheckbox20" type="checkbox" defaultValue="option2"/>
                                                <span className="fa fa-check"></span>b</label>
                                            <label className="c-checkbox">
                                                <Input id="inlineCheckbox30" type="checkbox" defaultValue="option3"/>
                                                <span className="fa fa-check"></span>c</label>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Rounded</label>
                                        <div className="col-md-10">
                                            <label className="checkbox c-checkbox c-checkbox-rounded">
                                                <Input id="roundedcheckbox10" type="checkbox" defaultChecked/>
                                                <span className="fa fa-check"></span>Lorem</label>
                                            <label className="checkbox c-checkbox c-checkbox-rounded">
                                                <Input id="roundedcheckbox20" type="checkbox"/>
                                                <span className="fa fa-check"></span>Ipsum</label>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Inline radios</label>
                                        <div className="col-md-10">
                                            <label className="c-radio">
                                                <Input id="inlineradio1" type="radio" name="i-radio" defaultValue="option1" defaultChecked/>
                                                <span className="fa fa-circle"></span>a</label>
                                            <label className="c-radio">
                                                <Input id="inlineradio2" type="radio" name="i-radio" defaultValue="option2"/>
                                                <span className="fa fa-circle"></span>b</label>
                                            <label className="c-radio">
                                                <Input id="inlineradio3" type="radio" name="i-radio" defaultValue="option3"/>
                                                <span className="fa fa-circle"></span>c</label>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Custom icons</label>
                                        <div className="col-md-10">
                                            <label className="c-radio">
                                                <Input id="inlineradio10" type="radio" name="i-radio" defaultValue="option1" defaultChecked/>
                                                <span className="fa fa-check"></span>a</label>
                                            <label className="c-radio">
                                                <Input id="inlineradio20" type="radio" name="i-radio" defaultValue="option2" defaultChecked/>
                                                <span className="fa fa-user"></span>b</label>
                                            <label className="c-radio">
                                                <Input id="inlineradio30" type="radio" name="i-radio" defaultValue="option3" defaultChecked/>
                                                <span className="fa fa-tint"></span>c</label>
                                            <br/>
                                            <label className="c-checkbox">
                                                <Input id="inlinecheckbox10" type="checkbox" defaultValue="option1" defaultChecked/>
                                                <span className="fa fa-star"></span>a</label>
                                            <label className="c-checkbox">
                                                <Input id="inlinecheckbox20" type="checkbox" defaultValue="option2" defaultChecked/>
                                                <span className="fa fa-heart"></span>b</label>
                                            <label className="c-checkbox">
                                                <Input id="inlinecheckbox30" type="checkbox" defaultValue="option3" defaultChecked/>
                                                <span className="fa fa-bell"></span>c</label>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Input validation</label>
                                        <div className="col-md-10">
                                            <FormGroup>
                                            <Label for="exampleEmail">Input without validation</Label>
                                            <Input />
                                            <FormFeedback>You will not be able to see this</FormFeedback>
                                            <FormText>Example help text that remains unchanged.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                            <Label for="exampleEmail">Valid input</Label>
                                            <Input valid />
                                            <FormFeedback valid>Sweet! that name is available</FormFeedback>
                                            <FormText>Example help text that remains unchanged.</FormText>
                                            </FormGroup>
                                            <FormGroup>
                                            <Label for="examplePassword">Invalid input</Label>
                                            <Input invalid />
                                            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                            <FormText>Example help text that remains unchanged.</FormText>
                                            </FormGroup>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <fieldset>
                                    <FormGroup row>
                                        <label className="col-md-2 col-form-label">Column sizing</label>
                                        <div className="col-md-10">
                                            <Row>
                                                <Col lg="2">
                                                    <Input type="text" placeholder=".col-lg-2"/>
                                                </Col>
                                                <Col lg="3">
                                                    <Input type="text" placeholder=".col-lg-3"/>
                                                </Col>
                                                <Col lg="4">
                                                    <Input type="text" placeholder=".col-lg-4"/>
                                                </Col>
                                            </Row>
                                        </div>
                                    </FormGroup>
                                </fieldset>
                                <CardFooter className="text-center">
                                    <button type="submit" className="btn btn-info">Resolve</button>
                                </CardFooter>
                            </form>
                        </CardBody>
                    </Card>
                {/* END card */}
                </Col>
                </Row>
            </ContentWrapper>
            );
    }

}

// export default HSEAssignedEligibilityFilterResolution;

function mapStateToProps({ hseAssignedEligibilityFiltersArticleQueue }) {
    return {
        errorMessage: hseAssignedEligibilityFiltersArticleQueue.hsePendingEligibilityFiltersArticleErrorMessage,
        currentArticle: hseAssignedEligibilityFiltersArticleQueue.hseAssignedEligibilityFiltersArticleFetch
    }
}

export default connect(mapStateToProps, actions)(HSEAssignedEligibilityFilterResolution);

