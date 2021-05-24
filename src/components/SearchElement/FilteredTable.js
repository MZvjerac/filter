import React from 'react';
import classes from './FilteredTable.module.css';

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
                data.map((d, index) => (
                <tbody>
                               
                    <tr key={index} className={classes.row}>
                        <th className={classes.th}>{d.Part_Number}</th>
                        <th className={classes.th}>{d.Parent_Part_Numbers}</th>
                        <th className={classes.th}>{d.ATA_Chapter}</th>
                        <th className={classes.th}>{d.Eligibility}</th>
                        <th className={classes.th}>{d.Nomenclature}</th>
                        <th className={classes.th}>{d.Repair_Description}</th>                        
                    </tr> 
                </tbody>             
                )) : <th colSpan={6} className={classes.th} >Sorry, no matches found. Do send us an email to check viability of your part number for Epoly repair.</th>
             
                 
           
            }          
            
        </table> 
    );
};



export default FilterdTable;