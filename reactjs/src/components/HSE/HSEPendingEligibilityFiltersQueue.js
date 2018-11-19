import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';


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

class HSEPendingEligibilityFiltersQueue extends Component {

    componentDidMount() {
        this.props.listHSEPendingEligibilityFiltersQueueArticles();
    }

    renderArticles() {
        
        if(this.props.pendingArticles != null ) {
            const rows = Object.entries(this.props.pendingArticles).map(article => {
                return (
                    <tr key={article[1]._id}>
                        <td>
                            <a href="">{ article[1].priority }</a>
                        </td>
                        <td>
                            <a href="">{ article[1].author }</a>
                        </td>
                        <td>
                            <a className="mr-2" href="">{ article[1].DOI }</a>
                        </td>
                        <td>
                            <a className="mr-1 badge badge-primary" href="">angularjs</a>
                        </td>
                        <td>{ article[1]._id }</td>
                        <td>{ article[1].title }</td>
                        <td>{ article[1].author }</td>
                        <td>
                            <a className="mr-1 badge badge-success" href="">{ article[1].language }</a>
                        </td>
                    </tr>
                )
            });
        
            return (
                <Datatable options={dtOptions}>
                                <table className="table table-striped my-4 w-100">
                                    <thead>
                                        <tr>
                                            <th data-priority="1">Priority</th>
                                            <th>Source</th>
                                            <th>Date</th>
                                            <th>Other Filterer</th>
                                            <th>Article Id</th>
                                            <th>Title</th>
                                            <th>Author</th>
                                            <th data-priority="2">Language</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { rows }
                                    </tbody>
                                </table>
                            </Datatable>
            );
        }    
    };

    render() {
        console.log(this.props.pendingArticles);
        return (
            <ContentWrapper>
                <div className="content-heading">
                        <div>Assessing Eligibility and Assigning Filters
                            <small>Health Systems Evidence - Main Queue</small>
                        </div>
                        </div>
                <Card className="card-default">
                    <CardHeader>List of pending Articles</CardHeader>
                    <CardBody>
                        { this.renderArticles() }
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }
}

function mapStateToProps({ hsePendingEligibilityFiltersQueue }) {
    return { 
        errorMessage: hsePendingEligibilityFiltersQueue.hsePendingEligibilityFiltersErrorMessage,
        pendingArticles: hsePendingEligibilityFiltersQueue.hsePendingEligibilityFiltersArticles 
    }
}

export default connect(mapStateToProps, actions)(HSEPendingEligibilityFiltersQueue);


