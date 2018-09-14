// HSEArticleFormQuickReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const HSEArticleFormQuickReview = ({ onCancel, formValues, onHSEArticleSubmit, history }) => {
    return (
        <div>
            <br />
            <h2>Please confirm your entries</h2>
            <br />

            <div>
                <label>Title</label>
                <h5>{ formValues.title }</h5>
            </div>
            <br />

            <div>
                <label>Authors</label>
                <h5>{ formValues.authors }</h5>
            </div>
            <br />

            <div>
                <label>Published Date</label>
                <h5>{ formValues.publishedDate }</h5>
            </div>
            <br />

            <div>
                <label>Journal</label>
                <h5>{ formValues.journalEdition }</h5>
            </div>
            <br />

            <button
                className="btn btn-warning"
                onClick={ onCancel }
            >
            Back
            </button>
            <span> </span>
            <button 
                onClick={ () => onHSEArticleSubmit(formValues, history) }
                className="btn btn-success"
            >
                Add Article
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.HSEArticleFormQuick.values }
}

export default connect(mapStateToProps, actions)(withRouter(HSEArticleFormQuickReview));