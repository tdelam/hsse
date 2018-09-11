import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import requireAuth from '../requireAuth';

import HSEArticleFormQuick from './HSEArticleFormQuick';
import HSEArticleFormQuickReview from './HSEArticleFormQuickReview';

class HSEArticleQuickNew extends Component {

    state = {
        showFormReview: false
    };

    renderContent() {
        
        if(this.state.showFormReview) {
            return (
                <HSEArticleFormQuickReview 
                    onCancel={ () => this.setState({ showFormReview: false })}
                />
            );
        }

        return (
            <HSEArticleFormQuick 
                onHSEArticleSubmit={ () => this.setState({ showFormReview: true }) } 
            />
        );

    }

    render() {
        return(
            <div>
                { this.renderContent() }
            </div>
        );
    }
}

export default reduxForm({
    form: 'HSEArticleFormQuick'
})(requireAuth(HSEArticleQuickNew));
