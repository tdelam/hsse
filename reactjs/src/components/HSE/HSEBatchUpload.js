import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col } from 'reactstrap';
import Dropzone from 'react-dropzone';

class HSEBatchUpload extends Component {

    state = {
        files: []
    }

    onDrop = files => this.setState({ files })

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
                </Container>
            </ContentWrapper>
            );
    }

}

export default HSEBatchUpload;
