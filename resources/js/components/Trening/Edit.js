import axios from 'axios';
import { divide } from 'lodash';
import React, {Component} from 'react';
import Button from '../button/Button';

export default class Edit extends Component{

        constructor(props)
        {
            super(props);
            super();
            this.onChangeNazivTreninga = this.onChangeNazivTreninga.bind(this);
            this.onChangeIntenzitetTreninga = this.onChangeIntenzitetTreninga.bind(this);
            this.onChangeKapacitetTreninga = this.onChangeKapacitetTreninga.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.state = {
                trening_naziv:'',
                trening_intenzitet:'',
                trening_kapacitet:'',
            }
        }

        componentDidMount(){
            axios.get('http://127.0.0.1:8000/treninzi/edit/'+this.props.match.params.id)
            .then(response=>{
                this.setState({trening_naziv:response.data.naziv,
                    trening_intenzitet:response.data.intenzitet,         
                    trening_kapacitet:response.data.kapacitet
                })
            });
    
        }

        onChangeNazivTreninga(e)
        {
            this.setState({
                trening_naziv:e.target.value
            });
        }


        onChangeIntenzitetTreninga(e)
        {
            this.setState({
                trening_intenzitet:e.target.value
            });
        } 

        onChangeKapacitetTreninga(e)
        {
            this.setState({
                trening_kapacitet:e.target.value
            });
        } 


        onSubmit(e)
        {
            e.preventDefault();
            const trening ={
                trening_naziv:this.state.trening_naziv,
                trening_intenzitet:this.state.trening_intenzitet,
                trening_kapacitet:this.state.trening_kapacitet
            }
            axios.put('http://127.0.0.1:8000/treninzi/update/'+this.props.match.params.id,trening)
            .then(res=>console.log(res.data));
        }

        render() {
            return(
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="trening_naziv">Naziv</label>
                            <input type="text" 
                            className="form-control" 
                            id="trening_naziv" 
                            defaultValue = {this.state.trening_naziv}
                            onChange = {this.onChangeNazivTreninga}/>  
                        
                            <label htmlFor="trening_intenzitet">Intenzitet</label> 
                            <input type="text" 
                            className="form-control" 
                            id="trening_intenzitet" 
                            defaultValue = {this.state.trening_intenzitet}
                            onChange = {this.onChangeIntenzitetTreninga}/>

                            <label htmlFor="trening_kapacitet">Kapacitet</label>
                            <input type="text" 
                            className="form-control" 
                            id="trening_kapacitet" 
                            defaultValue = {this.state.trening_kapacitet}
                            onChange = {this.onChangeKapacitetTreninga}/> 

                           
                        </div>
                      
                        <Button onClick={this.onSubmit} value="Izmeni" styleClass="btn-primary"/>
                    
                    </form>
                </div>
            );
    }
}