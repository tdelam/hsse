import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {

    signOut = () => {
        this.props.signin();
    }

    renderLinks() {
        
        if(this.props.authenticated) {
            return (
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signout">Sign out</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/articles/new">Upload Article</Link>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signin">Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
            );
        }
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="">McMaster Health</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    { this.renderLinks() }
                </div>
              </nav>
        );
    }
}

function mapStateToprops({ auth }) {
    return { authenticated: auth.authenticated }
}

export default connect(mapStateToprops)(Header);