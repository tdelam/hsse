import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col } from 'reactstrap';
import Dropzone from 'react-dropzone';

class HSEBatchUpload extends Component {

    state = {
        files: [],
        file: null
    }

    onFileChange(event) {
        this.setState({ file: event.target.files[0] })
    }

    onDrop = files => this.setState({ files: files[0] })

    createImageItem = (file, index) => (
        <Col md={3} key={index}>
            <img className="img-fluid mb-2" src={file.preview} alt="Item"/>
        </Col>
    )

    render() {
        let allFiles = this.state.files;
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Batch File Upload
                      <small>Health Systems Evidence</small>
                   </div>
                </div>
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
                        <input 
                        className="form-control filestyle" 
                        type="file" data-input="false" 
                        data-btnclass="btn btn-info" 
                        data-text="UPLOAD" 
                        data-icon="&lt;span class='fa fa-upload mr-2'&gt;&lt;/span&gt;"
                        onChange={this.onFileChange.bind(this)}
                        accept="text/plain"
                        />
                    </div>

                </Container>
            </ContentWrapper>
            );
    }

}

export default HSEBatchUpload;
