// HSEArticleFormQuickReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const HSEArticleFormQuickReview = ({ onCancel, formValues, submitHSEArticle, history }) => {
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
                <div>{ formValues.authors }</div>
            </div>

            <div>
                <label>Published Date</label>
                <div>{ formValues.pubblishedDate }</div>
            </div>

            <div>
                <label>Journal</label>
                <div>{ formValues.journalEdition }</div>
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
                onClick={ () => submitHSEArticle(formValues, history) }
                className="btn btn-success"
            >
                Add Article
            </button>
        </div>
    );
};

function mapStateToProps(state) {console.log(state);
    return { formValues: state.form.HSEArticleFormQuick.values }
}

export default connect(mapStateToProps, actions)(withRouter(HSEArticleFormQuickReview));