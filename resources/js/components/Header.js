import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Aranzman from './Trening/Index';

export default class Header extends Component {
    render(){
        return (
            <Router>
            <div>
                <nav className="navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Pocetna</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">O nama</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/treninzi">Trening</Link>
                    </li>
                    </ul>

                   
                </div>
                </nav>
            <Route exact path='/' component = {Home}/>
            <Route exact path='/about' component = {About}/>
            <Route exact path='/treninzi' component = {Aranzman}/>

            </div>      
            </Router>
        );
}
}
