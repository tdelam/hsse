import React, { Component } from 'react';
import { reduxForm } from 'redux-form';



class HSEArticleNew extends Component {
    state = { showFormReview: false };

    render() {
        return (
            <div></div>
        );
    }
}

export default reduxForm({
    form: 'HSEForm'
})(HSEArticleNew);
