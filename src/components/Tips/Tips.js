import React from 'react';
import classes from './Tips.module.css';

const Tips = () =>{
    return(
        <div className={classes.tips}>     
            <button type="button" className={classes.tipButton} data-toggle="tooltip" data-placement="right" title=""></button>                           
            <button type="button" className={classes.tipButton} data-toggle="tooltip" data-placement="right" title="LRU / Component PN">
                2
            </button>
            <button type="button" className={classes.tipButton} data-toggle="tooltip" data-placement="right" title="">
                3
            </button>
            <button type="button" className={classes.tipButton} data-toggle="tooltip" data-placement="right" title="Aircraft, Engine APU, Landing Gear Type">
                4
            </button>
            <button type="button" className={classes.tipButton} data-toggle="tooltip" data-placement="right" title="Sub Assembly Name">
                5
            </button>
            <button type="button" className={classes.tipButton} data-toggle="tooltip" data-placement="left" title="">
                6
            </button>
        </div>
    );
}

export default Tips;