import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

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
                <br />
                <form onSubmit={this.props.handleSubmit( this.props.onHSEArticleSubmit )} >
                <h2>Add HSE Article</h2>
                <br />
                <br />
                <fieldset className="form-group">
                    <label>Title</label>
                    <Field
                        name="title"
                        type="text"
                        component="textarea"
                        className="form-control"
                    />
                </fieldset>
                <br />

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
                <br />

                <fieldset className="form-group">
                    <label>Published Date</label>
                    <Field
                        name="publishedDate"
                        type="date"
                        component="input"
                        className="form-control"
                    />
                </fieldset>
                <br />

                <fieldset className="form-group">
                    <label>Journal</label>
                    <Field
                        name="journalEdition"
                        type="text"
                        component="input"
                        className="form-control"
                    />
                </fieldset>
                
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