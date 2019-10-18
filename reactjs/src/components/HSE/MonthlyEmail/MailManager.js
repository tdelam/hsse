import React, { Component } from 'react';
import ContentWrapper from '../../Layout/ContentWrapper';
import { 
  Nav, 
  NavItem, 
  NavLink, 
  TabContent, 
  TabPane,
  Button 
} from 'reactstrap';
import Swal from '../../Elements/Swal';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class MailManager extends Component {

    state = {
      activeTab: 'testEmail'
    }

    toggleTab = tab => {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }

  render() {
    return (
      <ContentWrapper>
        <div className="content-heading">Mail Manager</div>
        <div className="card card-transparent">
          <Nav tabs justified>
            <NavItem>
              <NavLink href="#" className={ this.state.activeTab === 'testEmail' ? 'active':'' } onClick={() => { this.toggleTab('testEmail'); }}>
                <em className="far fa-clock fa-fw"></em> Send Test Emails
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={ this.state.activeTab === 'liveEmail' ? 'active':'' } onClick={() => { this.toggleTab('liveEmail'); }}>
                <em className="far fa-money-bill-alt fa-fw"></em> Send LIVE Emails
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={ this.state.activeTab === 'resendEmail' ? 'active':'' } onClick={() => { this.toggleTab('resendEmail'); }}>
                <em className="far fa-money-bill-alt fa-fw"></em> Resend LIVE Emails
              </NavLink>
            </NavItem>                        
          </Nav>

          <TabContent activeTab={this.state.activeTab} className="bg-white p-0">
            <TabPane tabId="testEmail">
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
                <button className="btn btn-secondary btn-sm" type="button">View All Activity</button>
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
                                        <tr>
                                            <td>3325</td>
                                            <td>10/21/2013</td>
                                            <td>3:20 PM</td>
                                            <td>$234.34</td>
                                        </tr>
                                        <tr>
                                            <td>3324</td>
                                            <td>10/21/2013</td>
                                            <td>3:03 PM</td>
                                            <td>$724.17</td>
                                        </tr>
                                        <tr>
                                            <td>3323</td>
                                            <td>10/21/2013</td>
                                            <td>3:00 PM</td>
                                            <td>$23.71</td>
                                        </tr>
                                        <tr>
                                            <td>3322</td>
                                            <td>10/21/2013</td>
                                            <td>2:49 PM</td>
                                            <td>$8345.23</td>
                                        </tr>
                                        <tr>
                                            <td>3321</td>
                                            <td>10/21/2013</td>
                                            <td>2:23 PM</td>
                                            <td>$245.12</td>
                                        </tr>
                                        <tr>
                                            <td>3320</td>
                                            <td>10/21/2013</td>
                                            <td>2:15 PM</td>
                                            <td>$5663.54</td>
                                        </tr>
                                        <tr>
                                            <td>3319</td>
                                            <td>10/21/2013</td>
                                            <td>2:13 PM</td>
                                            <td>$943.45</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* END table responsive */}
                            <div className="card-footer text-right">
                                <a className="btn btn-secondary btn-sm" href="">View All Transactions</a>
                            </div>
                        </TabPane>
                        <TabPane tabId="resendEmail">
                            {/* START table responsive */}
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
                                        <tr>
                                            <td>3325</td>
                                            <td>10/21/2013</td>
                                            <td>3:20 PM</td>
                                            <td>$234.34</td>
                                        </tr>
                                        <tr>
                                            <td>3324</td>
                                            <td>10/21/2013</td>
                                            <td>3:03 PM</td>
                                            <td>$724.17</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* END table responsive */}
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

export default connect(mapStateToProps, actions)(MailManager);

