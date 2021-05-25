import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Contact from '../../Contact/Contact';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>        
        <NavigationItem link="/capabilities">Capability</NavigationItem>                
        <Contact/>        
    </ul>
);

export default navigationItems;