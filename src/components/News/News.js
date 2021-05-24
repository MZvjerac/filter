import React from 'react';
import classes from './News.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

const News = () =>{
    return(
        <Container className={classes.paragraf}>
            <p>Check a part number to find out about EPAR capabilities and prices or search by engine type to learn more about EPAR special repairs

To search for EPAR capabilities and prices please check a part number in the search field on the left side. If you click at the "Capabilities" tab on top of this page, you will find advanced search parameters.

To find out more about EPAR special repairs, select an engine type on the left or use the more detailed search functions on the "Special Repairs" tab.

All available search options will always be considered in combination. To submit a request, simply click on the "Search" button. Click on the button "Home" in the top left corner to return to this screen.

Clicking on the "Back" button on the detail-page the last search result will displayed again.

Last Update
The last update was on April 28, 2021.</p>
        </Container>
    );
}

export default News;

