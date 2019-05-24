import React, { Component } from 'react';
import moment from "moment";
import ContentWrapper from '../Layout/ContentWrapper';
import { 
    Card, 
    CardBody, 
    CardHeader, 
    Modal, 
    ModalHeader, 
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

import Swal from '../Elements/Swal';


import * as actions from '../../actions';

import Datatable from '../Tables/Datatable';

const dtOptions = {
    'paging': true, // Table pagination
    'ordering': true, // Column ordering
    'info': true, // Bottom left status text
    responsive: true,
    // Text translation options
    // Note the required keywords between underscores (e.g _MENU_)
    oLanguage: {
        sSearch: '<em class="fa fa-search"></em>',
        sLengthMenu: '_MENU_ records per page',
        info: 'Showing page _PAGE_ of _PAGES_',
        zeroRecords: 'Nothing found - sorry',
        infoEmpty: 'No records available',
        infoFiltered: '(filtered from _MAX_ total records)',
        oPaginate: {
            sNext: '<em class="fa fa-caret-right"></em>',
            sPrevious: '<em class="fa fa-caret-left"></em>'
        }
    }
}

class HSEPendingEligibilityFiltersArticleQueue extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            modal: false,
            toasterPos: 'top-right',
            toasterType: 'info',
            selectedArticleForAssignment: '',
            swalOptionJunior: {
                title: "Assign Article",
                text: "Are you sure you want to assign this article to your assigned eligibility & filter list!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, assign it!",
                closeOnConfirm: true
            },
            swalOptionSenior: {
                title: "Assign Article",
                text: "Are you sure you want to assign this article to your assigned eligibility & filter list!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, assign it!",
                closeOnConfirm: true
            },
            pendingArticles: [],
        };

    }

    componentDidMount() {
        this.props.listHSEPendingEligibilityFiltersArticlesQueue().then(res => {
            this.setState({ pendingArticles: res});
            console.log(res);
        });
    }

    toggleModal = (articleId) => {
        console.log(articleId);
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleModal1 = function(articleId) {
        console.log(articleId);
        this.setState({
            modal: !this.state.modal
        });
    }

    selectArticleForAssignment = () =>  {
        this.setState({
            selectedArticleForAssignment: ''
        })
    }

    renderPriority(priority) {
        
        switch (priority) {
            case 'LOW':
                return <td className="text-center"><span className="badge badge-success">{ priority }</span></td>
            case 'MODERATE':
                return <td className="text-center"><span className="badge badge-warning">{ priority }</span></td>
            case 'HIGH':
                return <td className="text-center"><span className="badge badge-danger">{ priority }</span></td>
            default:
                return <td className="text-center"><span className="badge badge-success">LOW</span></td>
        }

    }

    swalCallback(isConfirm, swal) {
        swal("Assigned!", "The article has been assigned to your pending Eligibility & Filter list.", "success");
    }

    swalCallbackAssignJunior(isConfirm, articleId) {
        if(isConfirm)
            this.props.assignHSEPendingEligibilityFiltersArticlesJuniorFilter(articleId, this.props.history);
    }

    swalCallbackAssignSenior(isConfirm, articleId) {
        if(isConfirm)
            this.props.assignHSEPendingEligibilityFiltersArticlesSeniorFilter(articleId, this.props.history);
    }

    renderArticles() {
        if(this.state.pendingArticles.length > 0) { console.log(this.state.pendingArticles.length);
        let testRows = this.state.pendingArticles.map(article => {
            console.log(article);
            return (<TableRow key = {article._id} article = {article} />);
        });
        // <a className="mr-1 badge badge-success" href="">{ article[1].language }</a>
            return (
                <div>
                    <Datatable options={dtOptions}>
                        <table className="table table-striped my-4 w-100">
                            <thead>
                                <tr>
                                    <th data-priority="1">Priority</th>
                                    <th>Source</th>
                                    <th>Harvest Date</th>
                                    <th>Junior Filterer</th>
                                    <th>Senior Filterer</th>
                                    <th>Article Id</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Language</th>
                                    {/*<th style={{width:"10px"}} className="text-right" data-priority="2">Assign</th>*/}
                                    {/* <th style={{width:"130px"}} className="text-right" data-priority="2">Assign</th> */}
                                </tr>
                            </thead>
                            <tbody>                            
                                { testRows }
                            </tbody>
                        </table>
                    </Datatable>
                </div>
            );
            } else {
                return (<div />);
            }
            
    };

    render() {
        
        return (
            <ContentWrapper>
                <div className="content-heading">
                        <div>Assessing Eligibility and Assigning Filters Articles
                            <small>Health Systems Evidence - Main Queue</small>
                        </div>
                        </div>
                <Card className="card-default">
                    <CardHeader>List of pending Articles</CardHeader>
                    <CardBody>
                        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Article Assignment Confirmation</ModalHeader>
                            <ModalBody>
                                Are you you want to assign this article to yourself? 
                            </ModalBody>
                            <ModalFooter>
                            <Button color="primary" onClick={this.toggleModal}>Yes</Button>{' '}
                            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                            { this.renderArticles() }
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }
}

const TableRow = ({ article }) => {console.log(article);
    return (
        <tr key={Math.random()}>
            <td>LOW</td>{ /*this.renderPriority(article.priority)*/  }
            <td key={Math.random()}>
                { article.articleSource }
            </td>
            <td key={Math.random()}>
                { moment(article.harvestDate).format("DD-MM-YYYY") }
            </td>
            <td key={Math.random()}>
                {article._eligibilityFiltersJuniorEmail || <a >test</a>}
            </td>
            <td key={Math.random()}>
                {article._eligibilityFiltersSeniorEmail || <a >test</a>}
            </td>
            <td key={Math.random()}>{ article._id }</td>
            <td key={Math.random()}>{ article.title }</td>
            <td key={Math.random()}>{ article.authors }</td>
            <td key={Math.random()}>{ article.language }</td>
        </tr>
    );
}

function mapStateToProps({ hsePendingEligibilityFiltersArticleQueue }) {
    return { 
        errorMessage: hsePendingEligibilityFiltersArticleQueue.hsePendingEligibilityFiltersArticleErrorMessage,
        pendingArticles: hsePendingEligibilityFiltersArticleQueue.hsePendingEligibilityFiltersArticles 
    }
}

export default connect(mapStateToProps, actions)(HSEPendingEligibilityFiltersArticleQueue);

