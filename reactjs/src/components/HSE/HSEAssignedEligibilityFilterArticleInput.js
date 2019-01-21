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

const { TreeNode } = Tree;

const treeData = [{

    title: 'Government arrangement',
    key: 'governmentArrangement',
    children: [{
        title: 'Policy authority',
        key: 'policyAuthority',
        children: [
            { title: 'Centralization/decentralization of policy authority', key: 'centralizationDecentralizationOfPolicyAuthority' },
            { title: "Accountability of the state sector's role in financing & delivery", key: 'accountabilityOfTheStateSectorsRoleInFinancingDelivery' },
            { title: "Stewardship of the non-state sector's role in financing & delivery", key: 'stewardshipOfTheNonStateSectorsRoleInFinancingDelivery' },
            { title: 'Decision-making authority about who is covered and what can or must be provided to them', key: 'decisionMakingAuthorityAboutWhoIsCoveredAndWhatCanOrMustBeProvidedToThem' },
            { title: 'Corruption protections', key: 'corruptionProtections' }
        ]
    },
    {
        title: 'Organizational authority',
        key: 'organizationalAuthority',
        children: [
            { title: 'Ownership', key: 'ownership' },
            { title: 'Management approaches', key: 'managementApproaches' },
            { title: 'Accreditation', key: 'accreditation' },
            { title: 'Networks/multi-institutional arrangements', key: 'networksMultiInstitutionalArrangements' }
        ]
    },
    {
        title: 'Commercial authority',
        key: 'commercialAuthority',
        children: [
            { title: 'Licensure & registration requirements', key: 'licensureRegistrationRequirements' },
            { title: 'Patents & profits', key: 'patentsProfits' },
            { title: 'Pricing & purchasing', key: 'pricingPurchasing' },
            { title: 'Marketing', key: 'marketing' },
            { title: 'Sales & dispensing', key: 'salesDispensing' },
            { title: 'Commercial liability', key: 'commercialLiability'}
        ]
    },
    {
        title: 'Professional authority',
        key: 'professionalAuthority',
        children: [
            { title: 'Training & licensure requirements', key: 'trainingLicensureRequirements' },
            { title: 'Scope of practice', key: 'scopeOfPractice' },
            { title: 'Setting of practice', key: 'settingOfPractice' },
            { title: 'Continuing competence', key: 'continuingCompetence' },
            { title: 'Quality & safety', key: 'salesDispensing' },
            { title: 'Professional liability', key: 'professionalLiability'},
            { title: 'Strike/job action', key: 'strikeJobAction' }
        ]
    },
    {
        title: 'Consumer & stakeholder involvement',
        key: 'consumerStakeholderInvolvement',
        children: [
            { title: 'Consumer participation in policy & organizational decisions', key: 'consumerParticipationInPolicyOrganizationalDecisions' },
            { title: 'Consumer participation in system monitoring', key: 'consumerParticipationInSystemMonitoring' },
            { title: 'Consumer participation in service delivery', key: 'consumerParticipationInServiceDelivery' },
            { title: 'Consumer complaints management', key: 'consumerComplaintsManagement' },
            { title: 'Stakeholder participation in policy & organizational decisions (or monitoring)', key: 'stakeholderParticipationInPolicyOrganizationalDecisionsOrMonitoring' }
        ]
    }],
    }, {
    title: 'Financial arrangements',
    key: 'financialArrangements',
    children: [{
        title: 'Financing systems',
        key: 'financingSystems',
        children: [
            { title: 'Taxation', key: 'taxation' },
            { title: 'Social health insurance', key: 'socialHealthInsurance' },
            { title: 'Community-based health insurance', key: 'communityBasedHealthInsurance' },
            { title: 'Community loan funds', key: 'communityLoanFunds' },
            { title: 'Private insurance', key: 'privateInsurance' },
            { title: 'Health savings accounts (Individually financed)', key: 'healthSavingsAccountsIndividuallyFinanced' },
            { title: 'User fees', key: 'userFees' },
            { title: 'Donor contributions', key: 'donorContributions' },
            { title: 'Fundraising', key: 'fundraising' }
        ]
    },
    {
        title: 'Funding organizations',
        key: 'fundingOrganizations',
        children: [
            { title: 'Fee-for-service (Funding)', key: 'feesForServiceFunding' },
            { title: 'Capitation (Funding)', key: 'capitationFunding' },
            { title: 'Global budget', key: 'globalBudget' },
            { title: 'Prospective payment (Funding)', key: 'prospectivePaymentFunding' },
            { title: 'Indicative budgets (Funding)', key: 'indicativeBudgets' },
            { title: 'Targeted payments/penalties (Funding)', key: 'targetedPaymentsPenaltiesFunding' }
        ]
    },
    {
        title: 'Remunerating providers',
        key: 'remuneratingProviders',
        children: [
            { title: 'Fee-for-service (Remuneration)', key: 'feeForServiceRemuneration' },
            { title: 'Capitation (Remuneration)', key: 'capitationRenumeration' },
            { title: 'Salary', key: 'salary' },
            { title: 'Prospective payment (Remuneration)', key: 'prospectivePaymentRenumeration' },
            { title: 'Fundholding', key: 'fundholding' },
            { title: 'Indicative budgets (Remuneration)', key: 'indicativeBudgetsRenumeration'},
            { title: 'Targeted payments/penalties (Remuneration)', key: 'targetedPaymentPenaltiesRenumeration' }
        ]
    },
    {
        title: 'Purchasing products & services',
        key: 'purchasingProductsServices',
        children: [
            { title: 'Scope & nature of insurance plans', key: 'scopeNatureOfInsurancePlans' },
            { title: 'Lists of covered/reimbursed organizations, providers, services & products', key: 'listsOfCoveredReimbursedOrganizationsProvidersServicesProducts' },
            { title: 'Restrictions in coverage/reimbursement rates for organizations, providers, services & products', key: 'restrictionsInCoverageReimbursementRatesForOrganizationsProvidersServicesProducts' },
            { title: 'Caps on coverage/reimbursement for organizations, providers, services & products', key: 'capsOnCoverageReimbursementForOrganizationsProvidersServicesProducts' },
            { title: 'Prior approval requirements for organizations, providers, services & products', key: 'priorApprovalRequirementsForOrganizationsProvidersServicesProducts' },
            { title: 'Lists of substitutable services & products', key: 'listsOfSubstitutableServicesAndProducts' }
        ]
    },
    {
        title: 'Incentivizing consumers',
        key: 'incentivizingConsumers',
        children: [
            { title: 'Premium (level & features)', key: 'premiumLevelAndFeatures' },
            { title: 'Cost-sharing', key: 'costSharing' },
            { title: 'Health savings accounts (Third party contributions)', key: 'healthSavingsAccountsThirdPartyContributions' },
            { title: 'Targeted payments/penalties (Incentivizing consumers)', key: 'targetedPaymentsPenaltiesIncentivizingConsumers' },
        ]
    }],
    }, {
    title: 'Delivery arrangements',
    key: 'deliveryArrangements',
    children: [{
        title: "How care is designed to meet consumers' needs",
        key: 'howCareIsDesignedToMeetConsumersNeeds',
        children: [
            { title: 'Availability of care', key: 'availabilityOfCare' },
            { title: 'Timely access to care', key: 'timelyAccessToCare' },
            { title: 'Culturally appropriate care', key: 'culturallyAppropriateCare' },
            { title: 'Case management', key: 'caseManagement' },
            { title: 'Package of care/care pathways/disease management', key: 'packageOfCareCarePathwaysDiseaseManagement' },
            { title: 'Group care', key: 'groupCare' }
        ]
    },
    {
        title: 'By whom care is provided',
        key: 'byWhomCareIsProvided',
        children: [
            { title: 'System - Need, demand & supply', key: 'systemNeedDemandSupply' },
            { title: 'System - Recruitment, retention & transitions', key: 'systemRecruitmentRetentionTransitions' },
            { title: 'System - Performance management', key: 'systemPerformanceManagement' },
            { title: 'Workplace conditions - Provider satisfaction', key: 'workplaceConditionsProviderSatisfaction' },
            { title: 'Workplace conditions - Health & safety', key: 'workplaceConditionsHealthSafety' }, 
            { title: 'Skill mix - Role performance', key: 'skillMixRolePerformance' },
            { title: 'Skill mix - Role expansion or extension', key: 'skillMixRoleExpansionOrExtension' },
            { title: 'Skill mix - Task shifting / substitution', key: 'skillMixTaskShiftingSubstitution' },
            { title: 'Skill mix - Multidisciplinary teams', key: 'skillMixMultidisciplinaryTeams' },
            { title: 'Skill mix - Volunteers or informal/family caregivers', key: 'skillMixVolunteersOrInformalFamilyCaregivers' },
            { title: 'Skill mix - Communication & case discussion between distant health professionals', key: 'skillMixCommunicationCaseDiscussionBetweenDistantHealthProfessionals' },
            { title: 'Staff - Training', key: 'staffTraining' },
            { title: 'Staff - Support', key: 'staffSupport' },
            { title: 'Staff - Workload/workflow/intensity', key: 'staffWorkloadWorkflowIntensity' },
            { title: 'Staff - Continuity of care', key: 'staffContinuityOfCare' },
            { title: 'Staff/self - Shared decision-making', key: 'staffSelfSharedDecisionMaking' },
            { title: 'Self-management', key: 'selfManagement' },
        ]
    },
    {
        title: 'Where care is provided',
        key: 'whereCareIsProvided',
        children: [
            { title: 'Site of service delivery', key: 'siteOfServiceDelivery' },
			{ title: 'Physical structure, facilities & equipment', key: 'physicalstructureFacilitiesEquipment' },
			{ title: 'Organizational scale', key: 'organizationalScale' },
			{ title: 'Integration of services', key: 'integrationOfServices' },
			{ title: 'Continuity of care', key: 'continuityOfCare' },
			{ title: 'Outreach', key: 'outreach' },
        ]
    },
    {
        title: 'With what supports is care provided',
        key: 'withwhatSupportsIsCareProvided',
        children: [
            { title: 'Health record systems', key: 'healthRecordSystems' },
            { title: 'Electronic health record', key: 'electronicHealthRecord' },
            { title: 'Other ICT that support individuals who provide care', key: 'otherICTThatSupportIndividualsWhoProvideCare' },
            { title: 'ICT that support individuals who receive care', key: 'iCTThatSupportIndividualsWhoReceiveCare' },
            { title: 'Quality monitoring and improvement systems', key: 'qualityMonitoringAndImprovementSystems'},
            { title: 'Safety monitoring and improvement systems', key: 'safetyMonitoringAndImprovementSystems' }
        ]
    }],
    }, {
        title: 'Implementation strategies',
        key: 'implementationStrategies',
        children: [{
            title: 'Consumer-targeted strategy',
            key: 'consumerTargetedStrategy',
            children: [
                { title: 'Information or education provision', key: 'informationOrEducationProvision' },
                { title: 'Behaviour change support', key: 'behaviourChangeSupport' },
                { title: 'Skills and competencies development', key: 'skillsAndCompetenciesDevelopment' },
                { title: '(Personal) Support', key: 'personalSupport' },
                { title: 'Communication and decision-making facilitation', key: 'communicationAndDecisionMakingFacilitation' },
                { title: 'System participation', key: 'systemParticipation' }
            ]
        },
        {
            title: 'Provider-targeted strategy',
            key: 'providerTargetedStrategy',
            children: [
                { title: 'Educational material', key: 'educationalMaterial' },
                { title: 'Educational meeting', key: 'educationalMeeting' },
                { title: 'Educational outreach visit', key: 'educationalOutreachVisit' },
                { title: 'Local opinion leader', key: 'localOpinionLeader' },
                { title: 'Local consensus process', key: 'localConsensusProcess' },
                { title: 'Peer review', key: 'peerReview' },
                { title: 'Audit and feedback', key: 'auditAndFeedback' },
                { title: 'Reminders and prompts', key: 'remindersAndPrompts' },
                { title: 'Tailored intervention', key: 'tailoredIntervention' },
                { title: 'Patient-mediated intervention', key: 'patientMediatedIntervention' },
                { title: 'Multi-faceted intervention', key: 'multiFacetedIntervention' }
            ]
        }, 
    {
        title: 'Organization-targeted strategy',
        key: 'organizationTargetedStrategy',

    }],
    }, 

];


    // used for react select
const STATES = [
    { value: 'australian-capital-territory', label: 'Australian Capital Territory', className: 'State-ACT' },
    { value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
    { value: 'victoria', label: 'Victoria', className: 'State-Vic' },
    { value: 'queensland', label: 'Queensland', className: 'State-Qld' }
]

class HSEAssignedEligibilityFilterArticleInput extends Component {

    state = {

        // AntD Tree
        defaultExpandAll: true,


        dropdownOpen: false,
        splitButtonOpen: false,


        displayColorPicker: false,
        displayColorPickerInput: false,
        colorSelected: '#00AABB',

        selectedOption: '',

        eligibilityFilterModel: {},

        healthSystemTopicsExpandedKeys: [
            'governmentArrangement',
            'policyAuthority',
            'organizationalAuthority',
            'commercialAuthority',
            'professionalAuthority',
            'consumerStakeholderInvolvement',
            'financialArrangements',
            'financingSystems',
            'fundingOrganizations',
            'remuneratingProviders',
            'purchasingProductsServices',
            'incentivizingConsumers',
            'deliveryArrangements',
            'howCareIsDesignedToMeetConsumersNeeds',
            'byWhomCareIsProvided',
            'whereCareIsProvided',
            'withwhatSupportsIsCareProvided',
            'implementationStrategies',
            'consumerTargetedStrategy',
            'providerTargetedStrategy',
        
        ],

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
                    <CardHeader><div style={{ marginTop: '40px', marginBottom: '10px', marginLeft: '10px' }} >
                            <div><h3>Filter Inputs</h3></div>
                            <div>Article Id: { this.props.match.params.articleId } {  } </div>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <form className="form-horizontal" method="get" action="/" onSubmit={this.onSubmit}>
                       
                            
                            <fieldset>
                                
                            </fieldset>
                                                        
                            <fieldset>
                                <legend>Health Systems Topics</legend>
                                <br />

                                <FormGroup row>
                                    <label className="col-md-1 col-form-label"></label>
                                    <div className="col-md-11">
                                        <Tree
                                            showLine
                                            checkable
                                            //defaultExpandAll={ true }
                                            onExpand={this.onExpand}
                                            expandedKeys={ this.state.healthSystemTopicsExpandedKeys }
                                            autoExpandParent={true}
                                            onCheck={this.onCheck}
                                            // checkedKeys={true}
                                            onSelect={this.onSelect}
                                            // selectedKeys={this.state.selectedKeys}
                                        >
                                            {this.renderTreeNodes(treeData)}
                                        </Tree>
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Health Systems Topics</legend>
                                <br />

                                <FormGroup row>
                                    <label className="col-md-1 col-form-label"></label>
                                    <div className="col-md-11">
                                        <Tree
                                            showLine
                                            checkable
                                            //defaultExpandAll={ true }
                                            onExpand={this.onExpand}
                                            autoExpandParent={true}
                                            onCheck={this.onCheck}
                                            // checkedKeys={true}
                                            onSelect={this.onSelect}
                                            // selectedKeys={this.state.selectedKeys}
                                        >
                                            {this.renderTreeNodes(treeData)}
                                        </Tree>
                                    </div>
                                </FormGroup>
                                <br />
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Canadian Priority Areas</legend>
                                <br />
                                <FormGroup row>
                                    <label className="col-md-1 col-form-label"></label>
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
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Domains</legend>
                                <br />
                                <FormGroup row>
                                <div className="col-md-5 offset-md-1">
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
                                <div className="col-md-10 offset-md-1">
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
                                <div className="col-md-10 offset-md-1">
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
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Theme</legend>
                                <FormGroup row>
                                <div className="col-md-10 offset-md-1">
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
                                <br />
                            </fieldset>
                            <fieldset>
                                <legend>Province Focus</legend>
                                <FormGroup row>
                                <div className="col-md-5 offset-md-1">
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
                                    <div className="col-md-5">
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
                                <div className="col-md-5 offset-md-1">
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
                                    <div className="col-md-5">
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
                                    <label className="col-md-2 col-form-label">Focus of document</label>
                                    <div className="col-md-6">
                                        <Input type="textarea" placeholder="Focus of document..." disabled=""/>
                                    </div>
                                </FormGroup>
                                <br />
                                <FormGroup row>
                                    <label className="col-md-2 col-form-label">Key findings</label>
                                    <div className="col-md-6">
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
                                <label className="col-md-4 col-form-label">
                                <Col md={ 6 } style={{ paddingLeft: 0 }}>
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
                                    <Col md={ 5 }>
                                            <label className="col-md-12 col-form-label">
                                                <p>
                                                If an article is deleted, please enter the reason for removal (in case its removal is questioned later):
                                                </p>
                                            </label>
                                            <div className="col-md-12">
                                                <Input type="textarea" placeholder="Key findings..." disabled=""/>
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
