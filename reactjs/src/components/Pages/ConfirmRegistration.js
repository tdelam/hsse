import React, { Component } from 'react';

class ConfirmRegistration extends Component {

    render() {
        return (
            <div className="block-center mt-4 wd-xl">
                {/* START card */}
                <div className="card card-flat">
                    <div className="card-header text-center bg-dark">
                        <a href="">
                            {/*<img className="block-center rounded" src="img/logo.png" alt="Logo"/>*/}
                            <h2 style={{color: '#fff'}}>HSSE</h2>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">CONFIRM REGISTRATION</p>
                        <p className="text-center">Please check your email to confirm registration.</p>
                    </div>
                </div>
                {/* END card */}
                <div className="p-3 text-center">
                    <span className="mr-2">&copy;</span>
                    <span>2018</span>
                    <span className="mx-2">-</span>
                    <span>McMaster Health Forum</span>
                    <br/>
                </div>
            </div>
        );
    }
}

export default ConfirmRegistration;
