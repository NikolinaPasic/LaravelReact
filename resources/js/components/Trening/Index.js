import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from "./Add";
import Listing from "./Listing";
import Edit from "./Edit";
import '../../../css/app.css'
export default class Index extends Component{
    render(){
        return(
            <div>
                <Router>
                    <div className="wrapper">
                        <Link id="listingdugme" className="linkic" to="/treninzi">Listing</Link>
                        <Link className="linkic" to="/treninzi/add">Dodaj</Link>
                        <Route exact path="/treninzi" component={Listing} />
                        <Route exact path="/treninzi/Add" component={Add} />
                        <Route exact path="/treninzi/edit/:id" component={Edit} />
                    </div>  
                </Router>
            </div>
        );
    }
}