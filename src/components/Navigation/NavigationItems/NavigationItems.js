import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/home">Home</NavigationItem>        
        {/* <NavigationItem link="/capabilities">Capabilities</NavigationItem> */}
        <NavigationItem link="/downloads">Downloads</NavigationItem>  
        {/* <NavigationItem link="/auth">Log</NavigationItem>
        <NavigationItem link="/admin">Admin</NavigationItem>          */}
    </ul>
);

export default navigationItems;