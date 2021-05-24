import React from 'react';
import classes from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import flap from '../../assets/images/flap.jpg';
import turbine from '../../assets/images/turbina.jpg';
import gear from '../../assets/images/gear.jpg'
import brakes from '../../assets/images/brakes.png';
import Image from 'react-bootstrap/Image';
import News from '../../components/News/News';
import Contact from '../../components/Contact/Contact';
import Search from '../../components/Search/Search';
import Background from '../../assets/images/Pozadina6.jpg';

const Home = () =>{
    return(
        <div className={classes.container} style={{backgroundImage:"url("+Background+")"}}>
            <div className="row" style={{marginTop:"60px"}} >
                {/* <div className="col-sm">
                    <div className="card" style={{margin:"10px", opacity:"0.75", width:"100%", padding:"15px"}}>
                        <img src={turbine} className="card-img-top" alt="airplane-img"  />
                            <div className="card-body">
                                <h5 className="card-title">NEWS</h5>
                                <News/>
                                
                            </div>
                    </div>
                </div> */}                                                  
                            <Search />                           
                            <Contact />                               
            </div>
        </div>
    );
}

export default Home;

