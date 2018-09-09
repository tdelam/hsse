import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Dashboard extends Component {

    render() {

        return (
            <div className="form-size">
                <br />
                <h2>Dashboard </h2>
            </div>
        );
    }
}
  
export default requireAuth(Dashboard);