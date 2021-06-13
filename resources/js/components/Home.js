import { divide } from 'lodash';
import React, {Component} from 'react';
import '../../css/app.css';
import Carousel from 'react-bootstrap/Carousel'
import first from '../../img/first.jpg';
import second from '../../img/second.jpg';
import third from '../../img/third.jpg';
import fourth from '../../img/fourth.jpg';
export default class Home extends Component{
    render(){
        return(
            
                    <Carousel href="carousel">
                    <Carousel.Item>
                    <Carousel.Caption >
                        <h2>Odaberite vrstu treninga koja vam najviše odgovara</h2>
                        <h3>Nismo svi isti i nemamo svi iste zahteve.</h3>
                        </Carousel.Caption>
                        <img
                        className="d-block w-100"
                        src={first}
                        alt="First slide"
                        />
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block w-100"
                        src={second}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h2>GRUPNI TRENINZI</h2>
                        <h3>Već od 1500 dinara.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block w-100"
                        src={third}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h2>POJEDINAČNI TRENINZI</h2>
                        <h3>Već od 400 dinara.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <img
                        className="d-block w-100"
                        src={fourth}
                        alt="Fourth slide"
                        />
                        <Carousel.Caption>
                        <h2>TERETANA I KARDIO TRENINZI</h2>
                        <h3>Već od 1700 dinara.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            
        );
    }
}
