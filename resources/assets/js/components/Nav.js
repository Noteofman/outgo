import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">Jousiffe Garden Design</a>
                  </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                          <li><Link to='/'>Dashboard</Link></li>
                          <li><Link to='/expense'>Expense</Link></li>
                        <li>
                          <a className="btn btn-default btn-outline btn-circle collapsed"  data-toggle="collapse" href="#nav-collapse1" aria-expanded="false" aria-controls="nav-collapse1">Sign-out</a>
                        </li>
                      </ul>
                      <ul className="collapse nav navbar-nav nav-collapse" id="nav-collapse1">
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Graphic design</a></li>
                        <li><a href="#">Print</a></li>
                        <li><a href="#">Motion</a></li>
                        <li><a href="#">Mobile apps</a></li>
                      </ul>
                  </div>
                 </div>
             </nav>
        );
    }
}

