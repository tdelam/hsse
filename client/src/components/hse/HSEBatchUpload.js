import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import requireAuth from '../requireAuth';

 class HSEBatchUpload extends Component {

    render() {
        return(
            <div>
                <br />
                <br />
                <form>
                    <h2>Upload HSE Article Batch</h2>
                    <br />
                    <br />
                    <div class="form-group">
                        <label for="exampleInputFile">File input</label>
                        <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                        <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                    </div>
                </form>
            </div>
        );
    }
 }

 export default reduxForm({
    form: 'HSEArticleFormBatchUpload',
    destroyOnUnmount: false
 })(requireAuth(HSEBatchUpload));