import React from 'react';
import aircraftKnowledgeLogo from '../../assets/images/daes-group-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <a href="https://www.daesgroup.com/"><img src={aircraftKnowledgeLogo} alt="daes-Logo" /></a>
    </div>
);

export default logo;