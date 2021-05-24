import React, {useState, useEffect} from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './Capabilities.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ButtonBordered from '../../components/UI/ButtonBordered/ButtonBordered';
import FilteredTable from '../../components/SearchElement/FilteredTable';
import * as XLSX from 'xlsx';

const  Capabilities = (props) => {

    const[query, setQuery] = useState(['']);
    // Excel dokument
    const[excel, setExcel]=useState({});  
    const[searchColumns, setSearchColumns] = useState(['']);

        
    useEffect(()=>{        
        fetch("Epoly.xlsx").then(res => res.arrayBuffer()).then(ab => {
            const wb = XLSX.read(ab, { type: "array" });               
                    
            const wsname = wb.SheetNames[0];
        
            const ws = wb.Sheets[wsname];
        
            const items = XLSX.utils.sheet_to_json(ws);
            console.log("Items=",items);
            setExcel(items);
        });                         
    }, []);

    const resetSearchHandler = () => {
        setQuery(""); 
        setSearchColumns(['']);        
    };    

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
    
    const columns = excel[0] && Object.keys(excel[0]);

    if(query!="")
    {   
    return (
        <div className={classes.container}>                                   
                    
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
                            /><Button onClick={resetSearchHandler} className={classes.button}>RESET</Button>
                    </InputGroup>
                    <label><b>Search by:</b></label>   
                        {
                            columns && columns.map(column => 
                                <label className={classes.checkBoxes}>
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
                                </label>)
                        }
                        <hr className={classes.hr}></hr>                     
                    <div> 
                        {
                            <FilteredTable data={search(excel)}/> 
                        }                    
                    </div>      
        </div> );
    }
    else{
        return (
            <div className={classes.container}>                                   
                        
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
                            /><Button onClick={resetSearchHandler} className={classes.button}>RESET</Button>
                        </InputGroup>
                        
                        <label><b>Search by:</b></label>    
                            {
                                columns && columns.map(column => 
                                    <label className={classes.checkBoxes}>
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
                                        
                                    </label>)
                            }   
                        <hr className={classes.hr}></hr>                          
            </div> 
        );
    }
    
};

export default Capabilities;


