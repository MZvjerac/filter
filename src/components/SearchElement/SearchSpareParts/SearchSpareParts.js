import React, {useState, useSelector} from 'react';
import Input from '../../UI/Input/Input';
import ButtonBordered from '../../UI/ButtonBordered/ButtonBordered';
import classes from './SearchSpareParts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import InputGroup from 'react-bootstrap/InputGroup';
import FileDownloader from '../../../containers/Downloads/FileDownloader';


const  SearchSpareParts = (props) => {

    const[partNumber, setPartNumber] = useState('');
    const[parentPns, setParentPns] = useState('');
    const[ataChapter, setAtaChapter] = useState('');
    const[eligibility, setEligibility] = useState('');
    const[nomenclature, setNomenclature]=useState('');
    // const[iarRouting, setIarRouting]=useState('');
    const[repairDescription, setRepairDescription]=useState('');
    // const[approval, setApproval]=useState('');    

    const columnInputConfig = {
        type:'text',
        placeholder:'Search'
    }

    const partNumInputConfig = {
        type:'text',
        placeholder:' Part Number'
    }
    const parentPNSInputConfig = {
        type:'text',
        placeholder:' Parent PN'
    }
    const ataInputConfig = {
        type:'text',
        placeholder:' ATA Chapter'
    }
    const eligibilityInputConfig = {
        type:'text',
        placeholder:' Eligibility'
    } 
    const nomenclatureInputConfig = {
        type:'text',
        placeholder:' Nomenclature'
    }
    // const iarRoutingInputConfig = {
    //     type:'text',
    //     placeholder:'Enter IAR routing'
    // }
    const repairDescriptionInputConfig = {
        type:'text',
        placeholder:' Repair Description'
    }     
    // const approvalInputConfig = {
    //     type:'text',
    //     placeholder:'Enter approval'
    // }
    
    // const handleKeyPress1 = (e) =>{
    //     if (e.key === 'Enter') {
    //         props.clickedSearch5(registration); 
    //     }
    // }

    
       

    const resetSearchHandler = () => {
        setPartNumber("");
        setParentPns("");
        setAtaChapter("");
        setEligibility("");
        setNomenclature("");
        // setIarRouting("");
        setRepairDescription("");
        // setApproval("");
        props.clickedReset();       
    };     

    return (
        <div className={classes.container}> 
        
            <div className="row"> 

                <div className="col-sm">                        
                    <div className={classes.card1} >
                        <FileDownloader />                                 
                    </div>
                </div>


                <div className="col-sm">                        
                    <div className={classes.card} >
                        <InputGroup className="mb-3 input-group-sm">
                            <InputGroup.Prepend className={classes.inputPrepend}>
                                <InputGroup.Text className={classes.span}>
                                    <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
                                </InputGroup.Text>                                
                            </InputGroup.Prepend>                   
                            <Input
                                value={partNumber}
                                changed={(e)=>setPartNumber(e.target.value)}                                                                             
                                elementType='input' 
                                elementConfig= {partNumInputConfig}                                                                                                                      
                            />
                        </InputGroup>
                        <InputGroup className="mb-3 input-group-sm">
                            <InputGroup.Prepend className={classes.inputPrepend}>
                                <InputGroup.Text className={classes.span}>
                                    <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
                                </InputGroup.Text>                                
                            </InputGroup.Prepend>                   
                            <Input
                                value={parentPns}
                                changed={(e)=>setParentPns(e.target.value)}
                                elementType='input'
                                elementConfig={parentPNSInputConfig}
                            />
                        </InputGroup>                 
                                                                         
                    </div>
                </div>
                <div className="col-sm">                        
                <div className={classes.card} > 
                    <InputGroup className="mb-3 input-group-sm">
                            <InputGroup.Prepend className={classes.inputPrepend}>
                                <InputGroup.Text className={classes.span}>
                                    <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
                                </InputGroup.Text>                                
                            </InputGroup.Prepend>                   
                            <Input 
                                value={ataChapter}
                                changed={(e)=>setAtaChapter(e.target.value)}          
                                elementType='input' 
                                elementConfig= {ataInputConfig}                     
                            />
                    </InputGroup>                       
                    <InputGroup className="mb-3 input-group-sm">
                        <InputGroup.Prepend className={classes.inputPrepend}>
                            <InputGroup.Text className={classes.span}>
                                <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
                            </InputGroup.Text>                                
                        </InputGroup.Prepend>                   
                        <Input 
                            value={eligibility}
                            changed={(e)=>setEligibility(e.target.value)}          
                            elementType='input' 
                            elementConfig= {eligibilityInputConfig}                     
                        />
                    </InputGroup>
                        
                        {/* <InputGroup className="mb-3 input-group-sm">
                            <InputGroup.Prepend className={classes.inputPrepend}>
                                <InputGroup.Text className={classes.span}>
                                    <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
                                </InputGroup.Text>                                
                            </InputGroup.Prepend>                   
                            <Input
                                value={iarRouting}
                                changed={(e)=>setIarRouting(e.target.value)}
                                elementType='input' 
                                elementConfig= {iarRoutingInputConfig}                                               
                            />
                        </InputGroup>                                                  */}
                    </div>
                </div>    
                <div className="col-sm">                
                    <div className={classes.card}>
                        <InputGroup className="mb-3 input-group-sm">
                            <InputGroup.Prepend className={classes.inputPrepend}>
                                <InputGroup.Text className={classes.span}>
                                    <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
                                </InputGroup.Text>                                
                            </InputGroup.Prepend>                   
                            <Input 
                                value={nomenclature}
                                changed={(e)=>setNomenclature(e.target.value)}          
                                elementType='input' 
                                elementConfig= {nomenclatureInputConfig}                     
                            />
                        </InputGroup>
                        <InputGroup className="mb-3 input-group-sm">
                            <InputGroup.Prepend className={classes.inputPrepend}>
                                <InputGroup.Text className={classes.span}>
                                    <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
                                </InputGroup.Text>                                
                            </InputGroup.Prepend>                   
                            <Input
                                value={repairDescription}
                                changed={(e)=>setRepairDescription(e.target.value)}
                                elementType='input' 
                                elementConfig= {repairDescriptionInputConfig}                                               
                            />
                        </InputGroup>
                        {/* <InputGroup className="mb-3 input-group-sm">
                            <InputGroup.Prepend className={classes.inputPrepend}>
                                <InputGroup.Text className={classes.span}>
                                    <FontAwesomeIcon icon={faSearch} className={classes.icon} />                                                                        
                                </InputGroup.Text>                                
                            </InputGroup.Prepend>                   
                            <Input
                                value={approval}
                                changed={(e)=>setApproval(e.target.value)}
                                elementType='input' 
                                elementConfig= {approvalInputConfig}                                               
                            />
                        </InputGroup> */}
                        
                                                                     
                    </div>
                    <div className={classes.buttonBox}>
                    <ButtonBordered 
                        clicked={() => (props.clickedSearch1(partNumber, parentPns, ataChapter, eligibility, nomenclature, repairDescription))}
                        btnType="Success"                            
                    >SEARCH</ButtonBordered>
                    <ButtonBordered
                        clicked={resetSearchHandler}
                        btnType="Secondary"    
                    >RESET</ButtonBordered>
                    {/* <ReactToExcel
                        table={props.id}
                        filename="Aircraft Report"
                        sheet="sheet 1"
                        buttonText="Export to Excel"
                        className="btn"
                    /> */} 
                    </div>
                </div>
            </div>           
        
        </div> 
    );
    
};

export default SearchSpareParts;