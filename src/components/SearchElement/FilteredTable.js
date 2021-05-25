import React from 'react';
import classes from './FilteredTable.module.css';
import { v4 as uuid_v4 } from "uuid";

const FilterdTable = ({data}) => {       
      
    
    return(
        <table className={classes.table} >
            <thead className={classes.header}>
                <tr>
                    <th scope="col" className={classes.th}>Part Number</th>
                    <th scope="col" className={classes.th}>Parent Part Numbers</th>
                    <th scope="col" className={classes.th}>ATA Chapter</th>
                    <th scope="col" className={classes.th}>Eligibility</th>
                    <th scope="col" className={classes.th}>Nomenclature</th>
                    <th scope="col" className={classes.th}>Repair Description</th>                    
                </tr>
            </thead>    
            { 
            (data && data.length !== 0) ?
                data.map((d) => (
                <tbody>
                               
                    <tr key={uuid_v4()} className={classes.row}>
                        <th className={classes.th1}>{d.Part_Number}</th>
                        <th className={classes.th2}>{d.Parent_Part_Numbers}</th>
                        <th className={classes.th3}>{d.ATA_Chapter}</th>
                        <th className={classes.th4}>{d.Eligibility}</th>
                        <th className={classes.th5}>{d.Nomenclature}</th>
                        <th className={classes.th6}>{d.Repair_Description}</th>                        
                    </tr> 
                </tbody>             
                )) : 
                <tbody>
                    <tr>
                        <th colSpan={6} className={classes.footer} >Sorry, no matches found. Do send us an email to check viability of your part number for Epoly repair.</th>
                    </tr>
                </tbody>
                
             
                 
           
            }          
            
        </table> 
    );
};



export default FilterdTable;