import React from 'react';
import aircraftKnowledgeLogo from '../../assets/images/daes-group-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={aircraftKnowledgeLogo} alt="daes-Logo" />
    </div>
);

export default logo;