import React from 'react';
import classes from './Contact.module.css';
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () =>{
    return(
    <li className={classes.contactLink}>       
        {/* <a href="https://www.daesgroup.com/region.php?id=2">Contact</a> */} 
        <a href="https://daesgroup.com/#/contact">Contact</a>      
    </li>                  
    );
}

export default Contact;

