import React, { Component } from 'react';
import ContentWrapper from '../../Layout/ContentWrapper';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { 
  Nav, 
  NavItem, 
  NavLink, 
  TabContent, 
  TabPane,
  Button,
  Modal, 
  ModalHeader, 
  ModalBody,
  Col, 
  Input,
  ModalFooter,
} from 'reactstrap';

import Swal from '../../Elements/Swal';
import * as actions from '../../../actions';

class MailManager extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'testEmail',
      modal: false,
      emailAddress: '',
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
  }

  emailField = ({input}) => {
    return <Input type="text"
              name="emailAdress"
              placeholder="Email address"
              {...input}
            />
  }

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleModal = () => {
    this.props.saveRecipient(this.state.emailAddress);
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (e) => {
    const {
      value,
      name
    } = e.target;

    this.setState({
      [name]: value
    }, () => console.log(this.state));
  }


  render() {
    const {
      activeTab,
      modal,
      emailAddress
    } = this.state;

    return (
      <ContentWrapper>
        <div className="content-heading">Mail Manager</div>
        <div className="card card-transparent">
          <Nav tabs justified>
            <NavItem>
              <NavLink href="#" className={ activeTab === 'testEmail' ? 'active':'' } onClick={() => { this.toggleTab('testEmail'); }}>
                <em className="far fa-clock fa-fw"></em> Send Test Emails
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={ activeTab === 'liveEmail' ? 'active':'' } onClick={() => { this.toggleTab('liveEmail'); }}>
                <em className="far fa-money-bill-alt fa-fw"></em> Send LIVE Emails
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={ activeTab === 'resendEmail' ? 'active':'' } onClick={() => { this.toggleTab('resendEmail'); }}>
                <em className="far fa-money-bill-alt fa-fw"></em> Resend LIVE Emails
              </NavLink>
            </NavItem>                        
          </Nav>

          <TabContent activeTab={activeTab} className="bg-white p-0">
            <TabPane tabId="testEmail">
              <Modal isOpen={modal} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Add Recipient</ModalHeader>
                <ModalBody>
                  <legend className="mb-4">Please enter their email address</legend>
                  <fieldset>
                    <div className="form-group row align-items-center">
                      <label className="col-md-2 col-form-label">Email</label>
                      <Col md={ 6 }>
                        <Field
                          type="text"
                          name="emailAddress"
                          component={this.emailField}
                          onChange={this.onChange}
                          autoComplete="none"
                          className="form-control"
                          value={emailAddress}
                        />
                      </Col>
                    </div>
                  </fieldset>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggleModal}>Save</Button>{' '}
                  <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
              </Modal>

              <div className="list-group mb0">
                <div className="list-group-item bt0">
                  <div className="float-right">
                    <Button size="xs" color="primary" className="btn-oval mr-2">
                      <Swal>Edit</Swal>
                    </Button>
                    <Button size="xs" color="danger" className="btn-oval">
                      <Swal>Delete</Swal>
                    </Button>
                  </div>
                  <em className="fa-fw fa fa-envelope mr-2"></em>ciurea@mcmaster.ca
                </div>
                <div className="list-group-item">
                  <div className="float-right">
                    <Button size="xs" color="primary" className="btn-oval mr-2">
                      <Swal>Edit</Swal>
                    </Button>
                    <Button size="xs" color="danger" className="btn-oval">
                      <Swal>Delete</Swal>
                    </Button>
                  </div>                                    
                  <em className="fa-fw fa fa-envelope mr-2"></em>fpgauvin@gmail.com
                </div>
                <div className="list-group-item">
                  <div className="float-right">
                    <Button size="xs" color="primary" className="btn-oval mr-2">
                      <Swal>Edit</Swal>
                    </Button>
                    <Button size="xs" color="danger" className="btn-oval">
                      <Swal>Delete</Swal>
                    </Button>
                  </div>
                  <em className="fa-fw fa fa-envelope mr-2"></em>moatka@mcmaster.ca
                </div>
                <div className="list-group-item">
                  <div className="float-right">
                    <Button size="xs" color="primary" className="btn-oval mr-2">
                      <Swal>Edit</Swal>
                    </Button>
                    <Button size="xs" color="danger" className="btn-oval">
                      <Swal>Delete</Swal>
                    </Button>
                  </div>
                  <em className="fa-fw fa fa-envelope mr-2"></em>lavisj@mcmaster.ca
                </div>
                <div className="list-group-item">
                  <div className="float-right">
                    <Button size="xs" color="primary" className="btn-oval mr-2">
                      <Swal>Edit</Swal>
                    </Button>
                    <Button size="xs" color="danger" className="btn-oval">
                      <Swal>Delete</Swal>
                    </Button>
                  </div>
                  <em className="fa-fw fa fa-envelope mr-2"></em>wilsom2@mcmaster.ca
                </div>
                <div className="list-group-item">
                  <div className="float-right">
                    <Button size="xs" color="primary" className="btn-oval mr-2">
                      <Swal>Edit</Swal>
                    </Button>
                    <Button size="xs" color="danger" className="btn-oval">
                      <Swal>Delete</Swal>
                    </Button>
                  </div>
                  <em className="fa-fw fa fa-envelope mr-2"></em>kaelanmoat@gmail.com
                </div>
                <div className="list-group-item">
                  <div className="float-right">
                    <Button size="xs" color="primary" className="btn-oval mr-2">
                      <Swal>Edit</Swal>
                    </Button>
                    <Button size="xs" color="danger" className="btn-oval">
                      <Swal>Delete</Swal>
                    </Button>
                  </div>
                  <em className="fa-fw fa fa-envelope mr-2"></em>mhfoptimalagingsearch@gmail.com
                </div>
                <div className="list-group-item">
                  <div className="float-right">
                    <Button size="xs" color="primary" className="btn-oval mr-2">
                      <Swal>Edit</Swal>
                    </Button>
                    <Button size="xs" color="danger" className="btn-oval">
                      <Swal>Delete</Swal>
                    </Button>
                  </div>
                  <em className="fa-fw fa fa-envelope mr-2"></em>mhfleadershipsearch@gmail.com
                </div>
                <div className="list-group-item">
                  <div className="float-right">
                    <Button size="xs" color="primary" className="btn-oval mr-2">
                      <Swal>Edit</Swal>
                    </Button>
                    <Button size="xs" color="danger" className="btn-oval">
                      <Swal>Delete</Swal>
                    </Button>
                  </div>
                  <em className="fa-fw fa fa-envelope mr-2"></em>mhfoptimizingcareresearch@gmail.com
                </div>
                <div className="list-group-item">
                  <div className="float-right">
                    <Button size="xs" color="primary" className="btn-oval mr-2">
                      <Swal>Edit</Swal>
                    </Button>
                    <Button size="xs" color="danger" className="btn-oval">
                      <Swal>Delete</Swal>
                    </Button>
                  </div>
                  <em className="fa-fw fa fa-envelope mr-2"></em>mhfviolencesearch@gmail.com
                </div>
              </div>
              
              <div className="card-footer text-right">
                <button className="btn btn-success btn-sm" type="button" onClick={this.toggleModal}>Add Test Email Recipient</button>
              </div>
            </TabPane>
            <TabPane tabId="liveEmail">
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Order #</th>
                      <th>Order Date</th>
                      <th>Order Time</th>
                      <th>Amount (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3326</td>
                      <td>10/21/2013</td>
                      <td>3:29 PM</td>
                      <td>$321.33</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-footer text-right">
                <a className="btn btn-secondary btn-sm" href="">View All Transactions</a>
              </div>
            </TabPane>
            <TabPane tabId="resendEmail">
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Order #</th>
                      <th>Order Date</th>
                      <th>Order Time</th>
                      <th>Amount (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3326</td>
                      <td>10/21/2013</td>
                      <td>3:29 PM</td>
                      <td>$321.33</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-footer text-right">
                <a className="btn btn-secondary btn-sm" href="">Yippee</a>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </ContentWrapper>
    );
  }
}

function mapStateToProps({ MailManager, auth }) {
  return {
    currentUser: auth.currentUser,
  }
}

export default compose(
  connect(mapStateToProps, actions),
    reduxForm({
      form: 'add-email-recipient'
  })
)(MailManager);

