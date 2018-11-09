import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
//import Dropzone from 'react-dropzone';

import Datetime from 'react-datetime';

import * as actions from '../../actions';

class HSEBatchUpload extends Component {

    state = {
        files: [],
        file: null
    }

    onFileChange(event) {
        this.setState({ file: event.target.files[0] })
        console.log(event.target.files);
    }

    onSubmit = (event) => {
        event.preventDefault();

        const { submitHSEBatchFile, history, formValues } = this.props;

        submitHSEBatchFile(formValues, history );
        
    }

    renderUploadField = ({ input: { value, ...input } }) => {
        return <input 
            name="batchfileupload"
            className="form-control"
            value={value === '' && value} 
            type="file" 
            data-input="false" 
            data-btnclass="btn btn-info" 
            data-text="UPLOAD" 
            data-icon="&lt;span class='fa fa-upload mr-2'&gt;&lt;/span&gt;"
            //onChange={this.onFileChange.bind(this)}
            accept="text/plain"
            {...input}
        />
    }

    adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

    FileInput = ({ input: { value: omitValue, onChange, onBlur, ...inputProps }, meta: omitMeta, ...props }) => {
        return (
            <input
                //onChange={adaptFileEventToValue(onChange)}
                //onBlur={adaptFileEventToValue(onBlur)}
                type="file"
                {...props.input}
                {...props}
            />
        );
    };



    onDrop = files => this.setState({ files: files[0] })

    createImageItem = (file, index) => (
        <Col md={3} key={index}>
            <img className="img-fluid mb-2" src={file.preview} alt="Item"/>
        </Col>
    )

    render() {
        //let allFiles = this.state.files;
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Batch File Upload
                      <small>Health Systems Evidence</small>
                   </div>
                </div>
{/*                
                <Container className="container-md">
                    <p className="text-center">HSE Batch Upload Dropzone<br/><small>Drag&apos;n&apos;Drop a hse batch file to upload.</small><br/><small className="spr">Testing content</small><small><a href="http://www.dropzonejs.com/" rel="noopener noreferrer" target="_blank"> test link</a></small></p>
                    <Dropzone className="card p-3" ref="dropzone" onDrop={this.onDrop} >
                        <div className="text-center box-placeholder m-0">Files can either be dropped here, or clicked to select to be uploaded.</div>
                        <div className="mt-3">
                            {this.state.files.length > 0 ?
                                <Row>{allFiles.map(this.createImageItem)}</Row>
                                :
                                <div><small>Testing</small></div>
                            }
                        </div>
                    </Dropzone>
 
                    <h5>Upload a batch file</h5>
                    
                    <div className="mb-3">
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <input 
                                className="form-control " 
                                type="file" data-input="false" 
                                data-btnclass="btn btn-info" 
                                data-text="UPLOAD" 
                                data-icon="&lt;span class='fa fa-upload mr-2'&gt;&lt;/span&gt;"
                                onChange={this.onFileChange.bind(this)}
                                accept="text/plain"
                            />
                        </form>
                    </div>

                </Container>
*/}
                <Row>
                    <div className="col-md-12">
                        <form onSubmit={this.onSubmit.bind(this)} name="formDemo">
                            { /* START card */ }
                            <Card className="card-default">
                                <CardHeader>
                                    <div className="card-title">HSE Article Upload</div>
                                </CardHeader>
                                <CardBody>
                                    <legend className="mb-4">Select a Batch File</legend>
        
                                    <fieldset>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-2 col-form-label">File</label>
                                            <Col md={ 6 }>
                                                <Field
                                                    name="batchfileupload" 
                                                    type="file"
                                                    component={this.FileInput}
                                                    className="form-control" 
                                                />
                                                <span className="invalid-feedback">Field must be an integer</span>
                                            </Col>
                                            <Col md={ 4 }>
                                            </Col>
                                        </div>
                                    </fieldset>

                                     <fieldset>
                                        <div className="form-group row mb">
                                            <label className="col-md-2 col-form-label mb">Harvest Date</label>
                                            <Col md={ 6 }>
                                                <Datetime inputProps={{className: 'form-control'}}/>
                                            </Col>
                                        </div>
                                    </fieldset>
                                                                               
                                </CardBody>
                                <CardFooter className="text-center">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </CardFooter>
                            </Card>
                            { /* END card */ }
                        </form>
                    </div>
                </Row>
            </ContentWrapper>
            );
    }

}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'hsebatchfileupload'
    })) (HSEBatchUpload);
