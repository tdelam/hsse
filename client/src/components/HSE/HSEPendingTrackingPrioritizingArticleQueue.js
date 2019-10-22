import React, { Component } from 'react';
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

import * as actions from '../../actions';

import Datatable from '../Tables/Datatable';
import PendingTrackingPrioritizingArticleQueueRow from '../Common/PendingTrackingPrioritizingArticleQueueRow';

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

class HSEPendingTrackingPrioritizingArticleQueue extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            modal: false,
            swalOptionJunior: {
                title: "Assign Article",
                text: "Are you sure you want to assign this article to your assigned quality appraisal list!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, assign it!",
                closeOnConfirm: true
            },
            swalOptionSenior: {
                title: "Assign Article",
                text: "Are you sure you want to assign this article to your assigned quality appraisal list!",
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
        this.props.listHSEPendingQualityAppraisalsArticlesQueue().then(res => {
            this.setState({ pendingArticles: res });
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
        swal("Assigned!", "The article has been assigned to your pending Tracking Prioritizing list.", "success");
    }

    swalCallbackAssignJunior(isConfirm, articleId) {
        if(isConfirm)
            this.props.assignHSEPendingTrackingPrioritizingArticlesJuniorAppraiser(articleId, this.props.history);
    }

    swalCallbackAssignSenior(isConfirm, articleId) {
        if(isConfirm)
            this.props.assignHSEPendingTrackingPrioritizingArticlesSeniorAppraiser(articleId, this.props.history);
    }

    renderArticles() {
        console.log(this.state.pendingArticles);
        if(this.state.pendingArticles.length > 0) {
            let testRows = this.state.pendingArticles.map(article => {console.log(article);
                return (<PendingTrackingPrioritizingArticleQueueRow key = {article._id} article = {article} history = {this.props.history} />);
            });
            return (
                <div>
                <Datatable options={dtOptions}>
                    <table className="table table-striped my-4 w-100">
                        <thead>
                            <tr>
                                <th data-priority="1">Priority</th>
                                <th>Source</th>
                                <th>Harvest Date</th>
                                <th>Junior Appraiser</th>
                                <th>Senior Appraiser</th>
                                <th>Article Id</th>
                                <th>Title</th>
                                <th>Author(s)</th>
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
            //return (<div />);
            return (
                <div>
                <Datatable options={dtOptions}>
                    <table className="table table-striped my-4 w-100">
                        <thead>
                            <tr>
                                <th data-priority="1">Priority</th>
                                <th>Source</th>
                                <th>Harvest Date</th>
                                <th>Junior Appraiser</th>
                                <th>Senior Appraiser</th>
                                <th>Article Id</th>
                                <th>Title</th>
                                <th>Author(s)</th>
                                <th>Language</th>
                                {/*<th style={{width:"10px"}} className="text-right" data-priority="2">Assign</th>*/}
                                {/* <th style={{width:"130px"}} className="text-right" data-priority="2">Assign</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </Datatable>
            </div>
            );
        }
    };

    render() {
        
        return (
            <ContentWrapper>
                <div className="content-heading">
                        <div>Tracking Prioritizing Articles
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

function mapStateToProps({ hsePendingTrackingPrioritizingArticleQueue }) {
    return { 
        errorMessage: hsePendingTrackingPrioritizingArticleQueue.hsePendingTrackingPrioritizingArticleErrorMessage,
        pendingArticles: hsePendingTrackingPrioritizingArticleQueue.hsePendingTrackingPrioritizingArticles 
    }
}

export default connect(mapStateToProps, actions)(HSEPendingTrackingPrioritizingArticleQueue);
