/**
 * @name PendingEligibilityFiltersArticleQueueRow.js
 * @author Kwadwo Sakyi
 * @description Component for the row in Pending Eligibility Filters Queue
 */

import React, { Component } from 'react';
import moment from "moment";
import Swal from '../Elements/Swal';

import { connect } from 'react-redux';

import { Button } from 'reactstrap';

import * as actions from '../../actions';

class PendingEligibilityFiltersArticleQueueRow extends Component {

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
            selectedIds: []
        };

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

    swalCallbackAssignJunior(isConfirm, articleId, history) {
        if(isConfirm)
            this.props.assignHSEPendingEligibilityFiltersArticlesJuniorFilter(articleId, history);
        window.location.reload()
    }

    swalCallbackAssignSenior(isConfirm, articleId, history) {
        if(isConfirm)
            this.props.assignHSEPendingEligibilityFiltersArticlesSeniorFilter(articleId, history);
        window.location.reload()
    }

    swalCallbackAssignAllJunior(isConfirm, history) {
        if(isConfirm)
            this.props.assignAllHSEPendingEligibilityFiltersArticlesJuniorFilter(this.state.selectedIds, history);
            window.location.reload()
    }

    swalCallbackAssignAllSenior(isConfirm, history) {
        if(isConfirm)
            this.props.assignAllHSEPendingEligibilityFiltersArticlesSeniorFilter(this.state.selectedIds, history);
        window.location.reload()
    }

    render() { console.log(this.props.currentUser.user.roles.includes('juniorfilter'));
        const { article, history } = this.props;
        return (
            <tr key={article._id}>
                <td></td>{ /*this.renderPriority(article.priority)*/  }
                <td>LOW</td>
                <td key={Math.random()}>
                    { article.articleSource }
                </td>
                <td key={Math.random()}>
                    { moment(article.harvestDate).format("DD-MM-YYYY") }
                </td>
                <td key={Math.random()}>
                    {/*article._eligibilityFiltersJuniorEmail || <Button size="xs" color="primary" className="btn-oval" disabled={ !(this.props.currentUser.user.roles.includes('juniorfilterer')  || this.props.currentUser.user.roles.includes('seniorfilterer')) }><Swal disabled={!this.props.currentUser.user.roles.includes('juniorfilter')} options={this.state.swalOptionJunior} callback={ (isConfirm) => this.swalCallbackAssignJunior(isConfirm, article._id, history)} >Assign</Swal></Button>*/}
                    {/*article._eligibilityFiltersJuniorEmail || <Swal className="btn btn-primary btn-oval" disabled={!this.props.currentUser.user.roles.includes('juniorfilter')} options={this.state.swalOptionJunior} callback={ (isConfirm) => this.swalCallbackAssignJunior(isConfirm, article._id, history)} >Assign</Swal>*/}
                    {article._eligibilityFiltersJuniorEmail || <Button size="xs" color="primary" className="btn-oval" disabled={!(this.props.currentUser.user.roles.includes('juniorfilterer') || this.props.currentUser.user.roles.includes('seniorfilterer'))}><Swal disabled={!(this.props.currentUser.user.roles.includes('juniorfilterer') || this.props.currentUser.user.roles.includes('seniorfilterer'))} options={this.state.swalOptionJunior} callback={ (isConfirm) => this.swalCallbackAssignJunior(isConfirm, article._id, history)} >Assign</Swal></Button>}
                </td>
                <td key={Math.random()}>
                    {article._eligibilityFiltersSeniorEmail || <Button size="xs" color="primary" className="btn-oval" disabled={!this.props.currentUser.user.roles.includes('seniorfilterer')}><Swal disabled={!this.props.currentUser.user.roles.includes('seniorfilterer')} options={this.state.swalOptionSenior} callback={ (isConfirm) => this.swalCallbackAssignSenior(isConfirm, article._id, history)} >Assign</Swal></Button>}
                </td>
                <td key={Math.random()}>{ article.articleIdShort }</td>
                <td key={Math.random()}>{ article.title }</td>
                <td key={Math.random()}>{ article.authors }</td>
                <td key={Math.random()}>{ article.language }</td>
            </tr>
        );
    }
}

function mapStateToProps({ auth }) {
    return { currentUser: auth.currentUser, errorState: auth.errorState }
}

export default connect(mapStateToProps, actions)(PendingEligibilityFiltersArticleQueueRow); 