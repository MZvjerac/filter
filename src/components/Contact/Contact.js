import React from 'react';
import classes from './Contact.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import contactImg from '../../assets/images/daes.JPG'

const Contact = () =>{
    return(
        
            <Card className={classes.card}>               
                <Card.Body>
                <Card.Title>CONTACT</Card.Title>
                <Card.Img variant="top" src={contactImg} style={{ width:'60px', alignSelf:'center' }} />
                <Card.Text>			
					<p className={classes.p} >DAES Belgrade office</p>					
					<p className={classes.p} >Đorđe Zekavica</p>
					<p className={classes.p}>Kadinjačka 121, 11030 Beograd Srbija</p>					
					<p className={classes.p} >Tel: +381 63 86 35 778 E-mail: george.zekavica@dassaero.com</p>				
                </Card.Text>
                
                </Card.Body>
            </Card>
            
        
    );
}

export default Contact;

