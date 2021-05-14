import axios from 'axios';
/* import { Button } from 'bootstrap'; */
import { divide } from 'lodash';
import React, {Component} from 'react';
import Button from '../button/Button';
import FormInput from '../formInput/FormInput';

export default class Add extends Component{

        constructor()
        {
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

            axios.post('http://127.0.0.1:8000/treninzi/store', trening)
            .then(res=>console.log(res.data));
        }

        render() {
            return(
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">

                            <FormInput name="trening_naziv" type="text" placeholder="Naziv treninga" onChange = {this.onChangeNazivTreninga} className="form-control" />
                            <FormInput name="trening_intenzitet" type="text" placeholder="Intenzitet treninga" onChange = {this.onChangeIntenzitetTreninga} className="form-control" />
                            <FormInput name="trening_kapacitet" type="text" placeholder="Kapacitet treninga" onChange = {this.onChangeKapacitetTreninga} className="form-control" />
                            
                       
                        </div>
                        <Button onClick={this.onSubmit} value="Zakazi trening" styleClass="btn-primary"/>
                    
                    </form>
                </div>

        

            );
    }
}

