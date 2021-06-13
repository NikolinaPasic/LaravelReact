import { divide } from 'lodash';
import React, {Component} from 'react';
import logo from '../../img/image.png';
import '../../css/app.css';
import Container from 'react-bootstrap/Container'
import about1 from '../../img/about1.jpg'
import about2 from '../../img/about2.jpg';
import about3 from '../../img/about3.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import jumbotron from '../../img/jumbotron.jpg'
export default class About extends Component{
    render(){
        return(
            
            <section class="offred-area section-gap">
            <div class="container">
                <div class="row section-title">
                <div class="jumbotron" style={{ backgroundImage: `url(${jumbotron})`, backgroundSize: 'cover' }}>
                <Container fluid>
                        <h1 className="display-3">Imperial GYM</h1>
                        <p className="lead">Je odlično mesto da započnete rad na svom telu, uz pomoć iskusnih trenera postanete najbolja verzija sebe!</p>
                    </Container>
                    </div>
                </div> 		
               			
                <div class="row">
                    <div class="col-lg-4">
                        <div class="single-offred">
                            <img class="img-fluid" src={about2} alt=""/>
                            <h4>Bodybilding zona</h4>
                            <p>
                                raspolaže izuzetnim uslovima za grupne i samostalne treninge. Opremljena je savremenim spravama za vežbanje brendova Technogym i Hammer Strength, takođe raspolaže delom za funkcionalne treninge.
                            </p>
                        </div>
                    </div>	
                    <div class="col-lg-4">
                        <div class="single-offred">
                           <img class="img-fluid" src={about1} alt=""/>  
                            <h4>Aerobik zona</h4>
                            <p>
                                je opremljena odgovarajućim rekvizitima: tegovi, palice, elastične trake, lopte, steperi i disco rasvetom. U njoj se održavaju LES MILLS programi BODYCOMBAT i BODYPUMP, aerobik, zumba, yoga i pilates. Svi programi su namenjeni vežbačima oba pola. 
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-offred">
                         <img class="img-fluid" src={about3} alt=""/>
                            <h4>Kardio zona</h4>
                            <p>
                                raspolaže sa više od 20 sprava firme Tehnogym među kojima su: trake za trčanje, kardio i spining bicikli, steperi i sprave za nordijsko trčanje.
                            </p>
                        </div>
                    </div>
                                                                
                </div>
            </div>	
        </section>
        
        );
    }
}