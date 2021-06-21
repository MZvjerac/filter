import React, {useState, useEffect} from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './Capabilities.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FilteredTable from '../../components/SearchElement/FilteredTable';
import * as XLSX from 'xlsx';
import FileDownloader from '../Downloads/FileDownloader';
import Tips from '../../components/Tips/Tips';
import epoly from '../../assets/Epoly.xlsx';
import SpareParts from '../SpareParts/SpareParts';


const  Capabilities = (props) => {

    const[query, setQuery] = useState(['']);
    // Excel dokument
    const[excel, setExcel]=useState({});  
    const[searchColumns, setSearchColumns] = useState(['']);
            
    useEffect(()=>{        
        fetch("/epoly/Epoly.xlsx").then(res => res.arrayBuffer()).then(ab => {
        /* fetch(epoly).then(res => res.arrayBuffer()).then(ab => { */
            const wb = XLSX.read(ab, { type: "array" });               
                    
            const wsname = wb.SheetNames[0];
        
            const ws = wb.Sheets[wsname];
        
            const items = XLSX.utils.sheet_to_json(ws);
            //console.log("Items=",items);
            setExcel(items);
        }); 
        
        /* var first_worksheet = epoly.Sheets[epoly.SheetNames[0]];
        var data = XLSX.utils.sheet_to_json(first_worksheet, {header:1});
        setExcel(data); */
        
        /* const ab = epoly.arrayBuffer();

        const wb = XLSX.read(ab, { type: "array" });               
                    
        const wsname = wb.SheetNames[0];
    
        const ws = wb.Sheets[wsname];
    
        const items = XLSX.utils.sheet_to_json(ws);
        console.log("Items=",items);
        setExcel(items); */
    }, []);

    const resetSearchHandler = () => {
        setQuery(""); 
        setSearchColumns(['']);        
    };  
    
    const columns = excel[0] && Object.keys(excel[0]);

    
    const queryInputConfig = {
        type:'text',
        placeholder:'Enter Search Term'
    }

           
    function search(rows) {        
        // Extracting array of properties from the array of objects
        const propertyArray = rows.map((item) =>{
            return item;
        });         
        // Filter 2
        return propertyArray.filter(
            (row)=>            
            searchColumns.some((column) => 
                row[column] ?
                row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1 : null)
        );
    }     
    
    // if(query!="")
    // {       
    //     if(searchColumns!="" )
    //     {
    //         return (
    //             <div className={classes.container}>                                   
    //                 <div className="row">
    //                     <div className={classes.col1}>
    //                         <div className={classes.card1}>
    //                             <FileDownloader />
    //                         </div>                        
    //                     </div>
                        {/* <div className={classes.col2}>
                            <div className={classes.card2}>
                                <label><b>Search by:</b></label>  
                            </div>
                            <div className={classes.card3}>
                                <table className="table"  >
                                    <tbody>                           
                                    {
                                        columns && columns.map((column, index) =>
                                            <tr key={index} className={classes.rowSearch} > 
                                                <td >
                                                <div className={classes.checkBoxes}>
                                                    <input type="checkbox" 
                                                        checked={searchColumns.includes(column)} 
                                                        onChange={(e) => {
                                                        const checked = searchColumns.includes(column);
                                                        setSearchColumns((prev) => checked
                                                        ? prev.filter((src) => src !== column)
                                                        : [...prev, column]);
                                                            }}      
                                                    />                                           
                                                    
                                                    {column}
                                                </div>                                          
                                                </td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>      
                            <Tips/>     
                        </div>
                        <div className={classes.col3}>
                            <div className={classes.card4}>
                                <InputGroup className={classes.input}>
                                    <InputGroup.Prepend className={classes.inputPrepend}>
                                        <InputGroup.Text className={classes.span}>
                                            <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
                                        </InputGroup.Text>                                
                                    </InputGroup.Prepend>                   
                                <Input
                                    value={query}
                                    changed={(e)=>setQuery(e.target.value)}                                                                             
                                    elementType='input' 
                                    elementConfig= {queryInputConfig}
                                />
                                
                                </InputGroup>
                            </div>                        
                        </div> */}
                                        
        //             </div>
        //             <div className={classes.row2}> 
        //                 <div className={classes.col4}>
        //                     {                               
        //                         <Button onClick={resetSearchHandler} className={classes.buttonReset}>RESET</Button>                         
        //                     }
        //                 </div>                                                
        //             </div>
        //             <div className={classes.row3}>                        
        //                 <div className={classes.col5}> 
        //                     {                               
        //                         <FilteredTable data={search(excel)} />                           
        //                     }                    
        //                 </div>
        //             </div>                                           
        //         </div>        );
        // }
        // else{           
                return (
                    <div className={classes.container}>                                   
                        <div className="row">
                            <div className={classes.col1}>
                                <div className={classes.card1}>
                                    <FileDownloader />
                                </div>                        
                            </div>
                            <div className={classes.col2}>
                                <div className={classes.card2}>
                                
                                {/* <label><b>Search by: </b></label>                                      
                                </div>
                                <div className={classes.card3}>
                                    <table className="table"  >
                                        <tbody>
                                            {
                                                columns && columns.map((column, index) => 
                                                <tr key={index} className={classes.rowSearch} >
                                                    <td >
                                                    <div className={classes.checkBoxes}>
                                                        <input type="checkbox" 
                                                            checked={searchColumns.includes(column)} 
                                                            onChange={(e) => {
                                                            const checked = searchColumns.includes(column);
                                                            setSearchColumns((prev) => checked
                                                            ? prev.filter((src) => src !== column)
                                                            : [...prev, column]);
                                                                }} 
                    
                                                        />                                                       
                                                        {column}
                                                        <hr className={classes.hr}></hr>
                                                    </div>  
                                                    </td>
                                                </tr>
                                                )
                                            }
                                        </tbody>
                                    </table> */}
                                </div>      
                                {/* <Tips/>       */}
                            </div>
                            {/* <div className={classes.col3}>                            
                                <div className={classes.card4}>
                                
                                    <InputGroup className={classes.input}>
                                        <InputGroup.Prepend className={classes.inputPrepend}>
                                            <InputGroup.Text className={classes.span}>
                                                <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
                                            </InputGroup.Text>                                
                                        </InputGroup.Prepend>                   
                                        <Input
                                            value={query}
                                            changed={(e)=>setQuery(e.target.value)}                                                                             
                                            elementType='input' 
                                            elementConfig= {queryInputConfig}                                               
                                    />
                                    <label className={classes.warning}>Please select Search by type (Part Number, Parent Part Numbers, ATA Chapter, Eligibility, Nomenclature or Repair Description) to continue with search.</label>
                                    
                                    </InputGroup>
                                   
                                </div> 
                                                       
                            </div> */}
                                                
                        </div>                                           
                    </div> 
                );           
    //     }                   
    // }
    // else{
    //     return (
    //         <div className={classes.container}>                                   
    //             <div className="row">
    //                 <div className={classes.col1}>
    //                     <div className={classes.card1}>
    //                         <FileDownloader />
    //                     </div>                        
    //                 </div>
    //                 <div className={classes.col2}>
    //                     <div className={classes.card2}>
    //                         <label className={classes.label}><b>Search by:</b></label>  
    //                     </div>         

    //                     <div className={classes.card3}>
                        
    //                         <table className="table"  >
    //                             <tbody>                                                            
    //                             {
    //                                 columns && columns.map((column, index) =>                                 
    //                                 <tr key={index} className={classes.rowSearch} >
    //                                     <td >
    //                                     <div className={classes.checkBoxes}>
    //                                         <input type="checkbox" 
    //                                             checked={searchColumns.includes(column)} 
    //                                             onChange={(e) => {
    //                                             const checked = searchColumns.includes(column);
    //                                             setSearchColumns((prev) => checked
    //                                             ? prev.filter((src) => src !== column)
    //                                             : [...prev, column]);
    //                                                 }} 
        
    //                                         />                                                                                
    //                                         {column}
    //                                         </div>                                        
    //                                     </td>
    //                                 </tr>                                
    //                                 )
    //                             }                                
    //                             </tbody>
    //                         </table>
    //                     </div>                       
    //                     <Tips/> 
    //                 </div>
    //                 <div className={classes.col3}>
    //                     <div className={classes.card4}>
    //                         <InputGroup className={classes.input}>
    //                             <InputGroup.Prepend className={classes.inputPrepend}>
    //                                 <InputGroup.Text className={classes.span}>
    //                                     <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
    //                                 </InputGroup.Text>                                
    //                             </InputGroup.Prepend>                   
    //                             <Input
    //                                 value={query}
    //                                 changed={(e)=>setQuery(e.target.value)}                                                                             
    //                                 elementType='input' 
    //                                 elementConfig= {queryInputConfig}                                               
    //                         />                            
    //                         </InputGroup>
    //                     </div>                        
    //                 </div>
                                    
    //             </div>                                           
    //         </div> 
    //     );
    // }
    
};

export default Capabilities;


