import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Aranzman from './Trening/Index';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/app.css';
import logo from '../../img/image.png';

export default class Header extends Component {
    render(){
        return (
            <Router>              
          
                <nav className="navbar-expand-lg navbar-dark bg-dark">
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="home" href="#home">
                <img
                    alt=""
                    src={logo}
                    width="50px"
                    height="50px"
                    className="d-inline-block align-center"
                />{' '}
                Imperial GYM
                </Navbar.Brand>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Početna</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">O nama</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/treninzi" >Trening</Link>
                    </li>
                    </ul>
                    </div>
            </Navbar> 
                </nav>
            <Route exact path='/' component = {Home}/>
            <Route exact path='/about' component = {About}/>
            <Route exact path='/treninzi' component = {Aranzman}/>

          
            </Router>
        );
}
}
