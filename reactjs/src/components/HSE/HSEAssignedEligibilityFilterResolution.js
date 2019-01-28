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
    Input,

} from 'reactstrap';

// React Select
import Select from 'react-select';
import 'react-select/dist/react-select.css';


import * as actions from '../../actions';


// used for react select
const STATES = [
    { value: 'new-article', label: 'New Article', className: 'State-ACT' },
    { value: 'data-entry-complete', label: 'Data Entry Complete', className: 'State-NSW' },
    { value: 'live', label: 'Live', className: 'State-Vic' },
    { value: 'deleted', label: 'Deleted', className: 'State-Qld' }
]

/* 

New article = New, still having content added, not visible in searches

Data entry complete = All required content has been added, still not visible in searches

Live = Available for searching/alerting

Deleted = Removed from the system, not visible in searches


*/

class HSEAssignedEligibilityFilterResolution extends Component {

    state = {

        dropdownOpen: false,
        splitButtonOpen: false,


        displayColorPicker: false,
        displayColorPickerInput: false,
        colorSelected: '#00AABB',

        selectedOption: '',

    };

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

    handleChangeSelect = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }

    render() {
        
        // used for react select
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;

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
                        <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>
                       
                            <fieldset>
                            </fieldset>
                            <fieldset>
                                
                            </fieldset>
                                                        
                            <fieldset>
                                <legend>Health Systems Topics</legend>
                                <br />
                                <FormGroup row>
                                <div className="col-md-7">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Governance arrangements</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Policy authority</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Centralization/decentralization of policy authority</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Accountability of the state sector's role in financing & delivery</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Stewardship of the non-state sector's role in financing & delivery</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Decision-making authority about who is covered and what can or must be provided to them</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Corruption protections</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Commercial authority</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Licensure & registration requirements</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Patents & profits</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Pricing & purchasing</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Marketing</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Sales & dispensing</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Commercial liability</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Consumer & stakeholder involvement</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Consumer participation in policy & organizational decisions</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Consumer participation in system monitoring</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Consumer participation in service delivery</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Consumer complaints management</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Stakeholder participation in policy & organizational decisions (or monitoring)</label>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Organizational authority</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Ownership</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Management approaches</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Accreditation</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Networks/multi-institutional arrangements</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Professional authority</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Training & licensure requirements</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Scope of practice</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Setting of practice</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Continuing competence</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Quality & safety</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Professional liability</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Strike/job action</label>
                                        </div>
                                    </div>
                                    
                                </FormGroup>
                                <br />
                                <br />
                                <br />
                                <FormGroup row>
                                <div className="col-md-6">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Financial arrangements</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Financing systems</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Taxation</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Social health insurance</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Community-based health insurance</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Community loan funds</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Private insurance</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Health savings accounts (Individually financed)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}User fees</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Donor contributions</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Fundraising</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Funding organizations</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Fee-for-service (Funding)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Capitation (Funding)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Global budget</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Prospective payment (Funding)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Indicative budgets (Funding)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Targeted payments/penalties (Funding)</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Incentivizing consumers</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Premium (level & features)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Cost-sharing</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Health savings accounts (Third party contributions)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Targeted payments/penalties (Incentivizing consumers)</label>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Remunerating providers</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Fee-for-service (Remuneration)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Capitation (Remuneration)</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Salary</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Prospective payment (Remuneration)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Fundholding</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Indicative budgets (Remuneration)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Targeted payments/penalties (Remuneration)</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Purchasing products & services</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Scope & nature of insurance plans</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Lists of covered/reimbursed organizations, providers, services & products</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Restrictions in coverage/reimbursement rates for organizations, providers, services & products</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Caps on coverage/reimbursement for organizations, providers, services & products</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Prior approval requirements for organizations, providers, services & products</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Lists of substitutable services & products</label>
                                        </div>
                                    </div>
                                    
                                </FormGroup>
                                <br />
                                <br />
                                <br />
                                <FormGroup row>
                                <div className="col-md-6">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Delivery arrangements</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}How care is designed to meet consumers' needs</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Availability of care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Timely access to care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Culturally appropriate care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Community loan funds</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Case management</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Package of care/care pathways/disease management</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Group care</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}By whom care is provided</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}System - Need, demand & supply</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}System - Recruitment, retention & transitions</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}System - Performance management</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Workplace conditions - Provider satisfaction</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Workplace conditions - Health & safety</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Role performance</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Role expansion or extension</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Task shifting / substitution</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Multidisciplinary teams</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Volunteers or informal/family caregivers</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Communication & case discussion between distant health professionals</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Staff - Training</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Staff - Support</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Staff - Workload/workflow/intensity</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Staff - Continuity of care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Staff/self - Shared decision-making</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Self-management</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Where care is provided</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Site of service delivery</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Physical structure, facilities & equipment</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Organizational scale</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Integration of services</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Continuity of care</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Outreach</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}With what supports is care provided</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Health record systems</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Electronic health record</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Other ICT that support individuals who provide care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}ICT that support individuals who receive care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Quality monitoring and improvement systems</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Safety monitoring and improvement systems</label>
                                        </div>
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                                <br />
                                <FormGroup row>
                                <div className="col-md-6">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Delivery Implementation strategies</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Information or education provision</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Behaviour change support</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skills and competencies development</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}(Personal) Support</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Communication and decision-making facilitation</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}System participation</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Organization-targeted strategy</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Provider-targeted strategy</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Educational material</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Educational meeting</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Educational outreach visit</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Local opinion leader</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Local consensus process</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Peer review</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Audit and feedback</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Reminders and prompts</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Tailored intervention</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Patient-mediated intervention</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Multi-faceted intervention</label>
                                        </div>
                                        
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Canadian Priority Areas</legend>
                                <br />
                                <FormGroup row>
                                    <div className="col-md-11">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>Home and community care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Mental health addiction services</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Indigenous health (Federal)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Aging (emergent)</label>
                                        </div>
                                        
                                    </div>
                                </FormGroup>
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Domains</legend>
                                <br />
                                <FormGroup row>
                                <div className="col-md-6">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Conditions</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Infectious diseases</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}HIV/AIDS</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Tuberculosis</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Malaria</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Diarrhoeal disease</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Lower respiratory infections</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Non-communicable diseases</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Cancer</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Cardiovascular disease</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Diabetes</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Alzheimer and other dementias</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Chronic obstructive pulmonary disease</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Other</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Maternal and child health</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Accidents</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Mental health and addictions</label>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Technologies</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Drugs</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Devices</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Diagnostics</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Surgery</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Sectors</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Home and community care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Primary care</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Specialty (hospital) care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Rehabilitation care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Quality & safety</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Long-term care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Public health</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Providers</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Physician</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Generalist</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Specialist</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Nurse</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Pharmacist</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Allied health professional</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Lay/community health worker</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Informal/family caregivers</label>
                                        </div>
                                    </div>
                                    
                                </FormGroup>
                            </fieldset>
                            <fieldset>
                                <legend>Population</legend>
                                <FormGroup row>
                                <div className="col-md-12">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Children and youth (which will include anything that was previously coded as ‘neonates’, ‘pediatrics’ and ‘adolescents’ under the ‘Age’ category)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Indigenous peoples (which will include anything that was previously coded as ‘Aboriginal health’ under the ‘Priority areas’)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Older adults (which will include anything that was previously coded as ‘geriatrics’ under the ‘Age’ category AND/OR optimal aging)</label>
                                        </div>
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>LMIC Focus</legend>
                                <FormGroup row>
                                <div className="col-md-12">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Target of document</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}At least one LMIC author</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}At least one LMIC study included</label>
                                        </div>
                                    </div>
                                </FormGroup>
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Theme</legend>
                                <FormGroup row>
                                <div className="col-md-12">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Optimal aging</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Health promotion/primary prevention</label>
                                        </div>
                                    </div>
                                </FormGroup>
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Province Focus</legend>
                                <FormGroup row>
                                <div className="col-md-6">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Federal/National</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Alberta</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}British Columbia</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Manitoba</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}New Brunswick</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Newfoundland and Labrador</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Northwest Territories</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Nova Scotia</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Nunavut</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Ontario</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Prince Edward Island</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Quebec</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Saskatchewan</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Yukon</label>
                                        </div>
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Ontario priority areas</legend>
                                <FormGroup row>
                                <div className="col-md-6">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Community-based care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Health system performance and sustainability</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Healthy living, with a focus on tobacco control</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Mental health and addictions</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Nursing research</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Primary care reform</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Quality improvement and safety</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Seniors’ care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Vulnerable and special health needs populations</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Women’s health</label>
                                        </div>
                                    </div>
                                </FormGroup>
                            </fieldset>
                            <fieldset>
                                <legend>Information for evidence briefs</legend>
                                <br />
                                <br />
                                <FormGroup row>
                                    <label className="col-md-3 col-form-label">Focus of document</label>
                                    <div className="col-md-9">
                                        <Input type="textarea" placeholder="Focus of document..." disabled=""/>
                                    </div>
                                </FormGroup>
                                <br />
                                <FormGroup row>
                                    <label className="col-md-3 col-form-label">Key findings</label>
                                    <div className="col-md-9">
                                        <Input type="textarea" placeholder="Key findings..." disabled=""/>
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Assessment and Assignment Status</legend>
                                <br />
                                <div className="form-group row mb">
                                <label className="col-md-6 col-form-label">
                                <Col md={ 12 } style={{ paddingLeft: 0 }}>
                                        <Select
                                            name="select-name"
                                            value={value}
                                            onChange={this.handleChangeSelect}
                                            options={STATES}
                                        />
                                        <br />
                                    </Col>
                                <p>New article = New, still having content added, not visible in searches</p>

                                <p>Data entry complete = All required content has been added, still not visible in searches</p>

                                <p>Live = Available for searching/alerting</p>

                                <p>Deleted = Removed from the system, not visible in searches</p>

                                </label>
                                    <Col md={ 6 }>
                                            <label className="col-md-12 col-form-label">
                                                <p>
                                                If an article is deleted, please enter the reason for removal (in case its removal is questioned later):
                                                </p>
                                            </label>
                                            <div className="col-md-12">
                                                <Input type="textarea"  disabled=""/>
                                            </div>
                                    </Col>
                                </div>
                                <br />
                                <br />
                            </fieldset>
                        </form>
                    </CardBody>
                    <CardFooter>
                        <div className="d-flex align-items-center">
                            
                            <div className="ml-auto">
                                <button type="submit" className="btn btn-warning">Cancel</button>{' '}
                                <button type="submit" className="btn btn-info">Save</button>
                            </div>
                            
                        </div>
                    </CardFooter>
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
                        <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>
                       
                            <fieldset>
                            </fieldset>
                            <fieldset>
                                
                            </fieldset>
                                                        
                            <fieldset>
                                <legend>Health Systems Topics</legend>
                                <br />
                                <FormGroup row>
                                <div className="col-md-7">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Governance arrangements</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Policy authority</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Centralization/decentralization of policy authority</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Accountability of the state sector's role in financing & delivery</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Stewardship of the non-state sector's role in financing & delivery</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Decision-making authority about who is covered and what can or must be provided to them</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Corruption protections</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Commercial authority</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Licensure & registration requirements</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Patents & profits</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Pricing & purchasing</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Marketing</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Sales & dispensing</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Commercial liability</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Consumer & stakeholder involvement</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Consumer participation in policy & organizational decisions</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Consumer participation in system monitoring</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Consumer participation in service delivery</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Consumer complaints management</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Stakeholder participation in policy & organizational decisions (or monitoring)</label>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Organizational authority</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Ownership</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Management approaches</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Accreditation</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Networks/multi-institutional arrangements</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Professional authority</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Training & licensure requirements</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Scope of practice</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Setting of practice</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Continuing competence</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Quality & safety</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Professional liability</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Strike/job action</label>
                                        </div>
                                    </div>
                                    
                                </FormGroup>
                                <br />
                                <br />
                                <br />
                                <FormGroup row>
                                <div className="col-md-6">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Financial arrangements</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Financing systems</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Taxation</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Social health insurance</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Community-based health insurance</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Community loan funds</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Private insurance</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Health savings accounts (Individually financed)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}User fees</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Donor contributions</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Fundraising</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Funding organizations</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Fee-for-service (Funding)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Capitation (Funding)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Global budget</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Prospective payment (Funding)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Indicative budgets (Funding)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Targeted payments/penalties (Funding)</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Incentivizing consumers</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Premium (level & features)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Cost-sharing</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Health savings accounts (Third party contributions)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Targeted payments/penalties (Incentivizing consumers)</label>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Remunerating providers</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Fee-for-service (Remuneration)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Capitation (Remuneration)</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Salary</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Prospective payment (Remuneration)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Fundholding</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Indicative budgets (Remuneration)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Targeted payments/penalties (Remuneration)</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Purchasing products & services</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Scope & nature of insurance plans</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Lists of covered/reimbursed organizations, providers, services & products</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Restrictions in coverage/reimbursement rates for organizations, providers, services & products</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Caps on coverage/reimbursement for organizations, providers, services & products</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Prior approval requirements for organizations, providers, services & products</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Lists of substitutable services & products</label>
                                        </div>
                                    </div>
                                    
                                </FormGroup>
                                <br />
                                <br />
                                <br />
                                <FormGroup row>
                                <div className="col-md-6">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Delivery arrangements</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}How care is designed to meet consumers' needs</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Availability of care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Timely access to care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Culturally appropriate care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Community loan funds</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Case management</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Package of care/care pathways/disease management</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Group care</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}By whom care is provided</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}System - Need, demand & supply</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}System - Recruitment, retention & transitions</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}System - Performance management</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Workplace conditions - Provider satisfaction</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Workplace conditions - Health & safety</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Role performance</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Role expansion or extension</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Task shifting / substitution</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Multidisciplinary teams</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Volunteers or informal/family caregivers</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skill mix - Communication & case discussion between distant health professionals</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Staff - Training</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Staff - Support</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Staff - Workload/workflow/intensity</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Staff - Continuity of care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Staff/self - Shared decision-making</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Self-management</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Where care is provided</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Site of service delivery</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Physical structure, facilities & equipment</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Organizational scale</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Integration of services</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Continuity of care</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Outreach</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}With what supports is care provided</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Health record systems</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Electronic health record</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Other ICT that support individuals who provide care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}ICT that support individuals who receive care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Quality monitoring and improvement systems</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Safety monitoring and improvement systems</label>
                                        </div>
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                                <br />
                                <FormGroup row>
                                <div className="col-md-6">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Delivery Implementation strategies</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Information or education provision</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Behaviour change support</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Skills and competencies development</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}(Personal) Support</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Communication and decision-making facilitation</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}System participation</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Organization-targeted strategy</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Provider-targeted strategy</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Educational material</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Educational meeting</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Educational outreach visit</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Local opinion leader</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Local consensus process</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Peer review</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Audit and feedback</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Reminders and prompts</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Tailored intervention</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Patient-mediated intervention</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Multi-faceted intervention</label>
                                        </div>
                                        
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Canadian Priority Areas</legend>
                                <br />
                                <FormGroup row>
                                    <div className="col-md-11">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>Home and community care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Mental health addiction services</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Indigenous health (Federal)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>Aging (emergent)</label>
                                        </div>
                                        
                                    </div>
                                </FormGroup>
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Domains</legend>
                                <br />
                                <FormGroup row>
                                <div className="col-md-6">
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Conditions</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Infectious diseases</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}HIV/AIDS</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Tuberculosis</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Malaria</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Diarrhoeal disease</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Lower respiratory infections</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Non-communicable diseases</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Cancer</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Cardiovascular disease</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Diabetes</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Alzheimer and other dementias</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Chronic obstructive pulmonary disease</label>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Other</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Maternal and child health</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Accidents</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Mental health and addictions</label>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Technologies</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Drugs</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Devices</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Diagnostics</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Surgery</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Sectors</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Home and community care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Primary care</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Specialty (hospital) care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Rehabilitation care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Quality & safety</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Long-term care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Public health</label>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Providers</label>
                                        </div>
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Physician</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Generalist</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Specialist</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Nurse</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Pharmacist</label>
                                        </div><div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Allied health professional</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Lay/community health worker</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Informal/family caregivers</label>
                                        </div>
                                    </div>
                                    
                                </FormGroup>
                            </fieldset>
                            <fieldset>
                                <legend>Population</legend>
                                <FormGroup row>
                                <div className="col-md-12">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Children and youth (which will include anything that was previously coded as ‘neonates’, ‘pediatrics’ and ‘adolescents’ under the ‘Age’ category)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Indigenous peoples (which will include anything that was previously coded as ‘Aboriginal health’ under the ‘Priority areas’)</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Older adults (which will include anything that was previously coded as ‘geriatrics’ under the ‘Age’ category AND/OR optimal aging)</label>
                                        </div>
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>LMIC Focus</legend>
                                <FormGroup row>
                                <div className="col-md-12">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Target of document</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}At least one LMIC author</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}At least one LMIC study included</label>
                                        </div>
                                    </div>
                                </FormGroup>
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Theme</legend>
                                <FormGroup row>
                                <div className="col-md-12">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Optimal aging</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Health promotion/primary prevention</label>
                                        </div>
                                    </div>
                                </FormGroup>
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Province Focus</legend>
                                <FormGroup row>
                                <div className="col-md-6">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Federal/National</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Alberta</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}British Columbia</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Manitoba</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}New Brunswick</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Newfoundland and Labrador</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Northwest Territories</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Nova Scotia</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Nunavut</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Ontario</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Prince Edward Island</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Quebec</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Saskatchewan</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Yukon</label>
                                        </div>
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Ontario priority areas</legend>
                                <FormGroup row>
                                <div className="col-md-6">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Community-based care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Health system performance and sustainability</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Healthy living, with a focus on tobacco control</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Mental health and addictions</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Nursing research</label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6">
                                        <br />
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Primary care reform</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Quality improvement and safety</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Seniors’ care</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Vulnerable and special health needs populations</label>
                                        </div>
                                        <div className="checkbox c-checkbox">
                                            <label>
                                                <Input type="checkbox" defaultChecked="" disabled="" defaultValue=""/>
                                                <span className="fa fa-check"></span>{' '}Women’s health</label>
                                        </div>
                                    </div>
                                </FormGroup>
                            </fieldset>
                            <fieldset>
                                <legend>Information for evidence briefs</legend>
                                <br />
                                <br />
                                <FormGroup row>
                                    <label className="col-md-3 col-form-label">Focus of document</label>
                                    <div className="col-md-9">
                                        <Input type="textarea" placeholder="Focus of document..." disabled=""/>
                                    </div>
                                </FormGroup>
                                <br />
                                <FormGroup row>
                                    <label className="col-md-3 col-form-label">Key findings</label>
                                    <div className="col-md-9">
                                        <Input type="textarea" placeholder="Key findings..." disabled=""/>
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Assessment and Assignment Status</legend>
                                <br />
                                <div className="form-group row mb">
                                <label className="col-md-6 col-form-label">
                                <Col md={ 12 } style={{ paddingLeft: 0 }}>
                                        <Select
                                            name="select-name"
                                            value={value}
                                            onChange={this.handleChangeSelect}
                                            options={STATES}
                                        />
                                        <br />
                                    </Col>
                                <p>New article = New, still having content added, not visible in searches</p>

                                <p>Data entry complete = All required content has been added, still not visible in searches</p>

                                <p>Live = Available for searching/alerting</p>

                                <p>Deleted = Removed from the system, not visible in searches</p>

                                </label>
                                    <Col md={ 6 }>
                                            <label className="col-md-12 col-form-label">
                                                <p>
                                                If an article is deleted, please enter the reason for removal (in case its removal is questioned later):
                                                </p>
                                            </label>
                                            <div className="col-md-12">
                                                <Input type="textarea"  disabled=""/>
                                            </div>
                                    </Col>
                                </div>
                                <br />
                                <br />
                            </fieldset>
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

