import React from 'react';
import classes from './Search.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';


const Search = () =>{
    return(
        
            <Card className={classes.card}>
                {/* <Card.Img variant="top" src={contactImg} style={{ width:'120px',alignSelf:'center' }} /> */}
                <Card.Body>
                <Card.Title>SEARCH</Card.Title>
                <Card.Text>
                    Click on the button below.
                    Then enter wanted term and choose search area.
                </Card.Text>
                <a href="/capabilities" className={classes.a}>QUICK SEARCH</a>
                </Card.Body>
            </Card>
            
            
        
    );
}

export default Search;

