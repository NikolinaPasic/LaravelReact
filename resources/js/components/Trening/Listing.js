import { divide } from 'lodash';
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default class Listing extends Component{

    constructor(){
        super();
        this.state = {
            treninzi:[]
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/treninzi')
        .then(response=>{
            this.setState({treninzi:response.data});
        });

    }

    onDelete(trening){
        console.log(trening);
        axios.delete('http://127.0.0.1:8000/treninzi/delete/'+trening)
        .then(response=>{
            var treninzi= this.state.treninzi;
            for(var i=0; i<treninzi.length; i++){
                if (treninzi[i].id == trening){
                    treninzi.splice(i,1);
                    this.setState({treninzi:treninzi});
                }
            }
        });
    }

    render(){
        return(
            <div>
                <table id="myTable" className="table table-dark table-hover">
                <thead>
                    <tr>
                    {/* <th scope="col" >#</th> */}
                    <th scope="col" >Naziv</th>
                    <th scope="col" >Intenzitet</th>
                    <th scope="col" >Kapacitet</th>
                    <th scope="col" ></th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.treninzi.map((trening, index)=>{
                        const { id, naziv, intenzitet, kapacitet } = trening
                        return (
                                 <tr key={id}>
                                    <td >{trening.naziv}</td>
                                    <td >{trening.intenzitet}</td>
                                    <td >{trening.kapacitet}</td>
                                    <td >
                                        <Link id="izmenibtn" to={`/treninzi/edit/${trening.id}` }>Izmeni</Link>
                                        <a href="#" id="deletebtn" onClick={this.onDelete.bind(this, trening.id)}>Obrisi</a>
                                    </td>
                                </tr>  
                                
                            )
                    })
                }
                </tbody>
             </table>
            </div>
        );
    }
}

