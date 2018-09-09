import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

// import requireAuth from '../requireAuth';
// import articleFormFieldsQuick from '../articleFormFieldsQuick';

class HSEArticleFormQuick extends Component {

/*
    renderFields() {
        return _.map(articleFormFieldsQuick, ({ label, name, component, type }) => {
            return (
                <Field
                    key={name}
                    component={component}
                    type={type}
                    label={label}
                    name={name}
                />
            );            
        })
    }
*/

   
    render() {

        return(
            <div>
                <br />
                <form onSubmit={this.props.handleSubmit( this.props.onArticleHSESubmit )} >
                <h2>Add HSE Article</h2>
                <br />
                <div className="form-group">
                    <label>Title</label>
                    <Field
                        name="title"
                        type="text"
                        component="textarea"
                        className="form-control"
                    />
                </div>

                {/*</fieldset>
                <fieldset className="form-group">*/}
                
                <div className="form-group">
                    <label>Authors</label>
                    <Field
                        name="authors"
                        type="text"
                        component="textarea"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Published Date</label>
                    <Field
                        name="publishedDate"
                        type="date"
                        component="textarea"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Journal</label>
                    <Field
                        name="journalEdition"
                        type="text"
                        component="input"
                        className="form-control"
                    />
                </div>
                
                {/*<div>{this.props.errorMessage}</div>*/}

                <br />
                <Link to="/dashboard" className="btn btn-danger">Cancel</Link>
                <span> </span>
                <button action="submit" className="btn btn-success">Next</button>
                
            </form>
            </div>
        );
    }
}
export default reduxForm({
    form: 'HSEArticleFormQuick',
    destroyOnUnmount: false
})(HSEArticleFormQuick);