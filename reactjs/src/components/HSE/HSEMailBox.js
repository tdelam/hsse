import ContentWrapper from '../Layout/ContentWrapper';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class HSEMailBox extends Component {

  render() {
    return (
      <ContentWrapper>
        <div className="content-heading">
          <div>Mailbox
            <small>Health Systems - Assigned Queue</small>
          </div>
        </div>
      </ContentWrapper>
    );
  }
}


function mapStateToProps({ HSEMailBox, auth }) {
  return {
    currentUser: auth.currentUser
  }
}

export default connect(mapStateToProps, actions)(HSEMailBox);