import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from '../../axios-local';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Table from '../../components/UI/Table/Table';
import {sparePartHeader} from '../../shared/staticData';
import CardsInBox from '../../components/UI/CardsInBox/CardsInBox';
import * as actions from '../../store/actions/index';
import SearchSpareParts from '../../components/SearchElement/SearchSpareParts/SearchSpareParts';


const SpareParts = props => {
    const spareParts = useSelector(state => {
        return state.spareParts.spareParts;
    });
    const sparePartsCount = useSelector(state => {
        return state.spareParts.sparePartsCount;
    });
    const loading = useSelector(state => {
        return state.spareParts.sparePartsLoading;
    });
    const offset = useSelector(state => {
        return state.spareParts.sparePartsOffset;
    });
    const limit = useSelector(state => {
        return state.spareParts.sparePartsLimit;
    });
    const page = useSelector(state => {
        return state.spareParts.sparePartsPage;
    });   
           
    const[partNumber, setPartNumber] = useState('');
    const[parentPns, setParentPns] = useState('');
    const[ataChapter, setAtaChapter] = useState('');
    const[eligibility, setEligibility] = useState('');
    const[nomenclature, setNomenclature]=useState('');
    // const[iarRouting, setIarRouting]=useState('');
    const[repairDescription, setRepairDescription]=useState('');
    // const[approval, setApproval]=useState('');
               
    const dispatch = useDispatch();
    
    const onFetchSpareParts = useCallback(
        () => dispatch(actions.fetchSpareParts(offset, limit, partNumber, parentPns, ataChapter, eligibility, nomenclature, repairDescription))
        , [dispatch, offset, limit, partNumber, parentPns, ataChapter, eligibility, nomenclature, repairDescription]
    );
    const onSetSparePartsOffsetLimit = (offset, limit) => dispatch(actions.setSparePartsOffsetLimit(offset, limit));    
    const onSetSparePartsPage = (page) => dispatch(actions.setSparePartsPage(page));    
    

    const changeOffsetOrLimitHandler = (tableOffset, tableLimit) => {        
        onSetSparePartsOffsetLimit(tableOffset, tableLimit);   
    };
    const setSparePartsPageHandler = page => {                
        onSetSparePartsPage(page);
    };

   
    // FILTERING/SEARCHING
    const submitSearchHandler1 = (partNumber, parentPns, ataChapter, eligibility, nomenclature, repairDescription) => {  
        onSetSparePartsOffsetLimit(0, limit);
        onSetSparePartsPage(0);
        setPartNumber(partNumber);
        setParentPns(parentPns);
        setAtaChapter(ataChapter);
        setEligibility(eligibility);
        setNomenclature(nomenclature);
        // setIarRouting(iarRouting);
        setRepairDescription(repairDescription);
        // setApproval(approval);
    };   
    

    const resetSearchHandler = () => {        
        onSetSparePartsOffsetLimit(0, limit);
        onSetSparePartsPage(0);
        setPartNumber("");
        setParentPns("");
        setAtaChapter("");
        setEligibility("");
        setNomenclature("");
        // setIarRouting("");
        setRepairDescription("");
        // setApproval("");
        // If we want to bring back to previous page (not on default one) 
        //onFetchAircrafts();     
    };      
       
    useEffect(() => { 
        onFetchSpareParts();
        
    }, [onFetchSpareParts]);    
        
    
    
    //let sparePartsTable = <Spinner />;
    let sparePartsTable = <div style={{ marginTop:"40px" }}><p style={{ color:"black", fontSize:"18px" }}>Please enter one or more search parameters (Part Number, Parent PN, ATA Chapter, Eligibility, Nomenclature, Repair Description) and click SEARCH button to start Your search.</p></div>;
    if(loading){
        sparePartsTable = <Spinner />;
    }
    if (!spareParts && !loading  ) {
        sparePartsTable = <p style={{ textAlign: 'center' }}>Could not read spare parts from the server!</p>;
    }
    if (spareParts && !loading && (partNumber!='' || parentPns!='' || ataChapter!='' || eligibility!='' || nomenclature!='' || repairDescription!='')) {
        sparePartsTable = <Table 
            tableId="sparePartsTable"
            data={spareParts}
            header={sparePartHeader}
            paramsRoute={{
                baseRoute: "/spareParts",
                params: ["sparePartId"],
                delimiter: "-"
            }}
            rowsPerPageDef={limit}
            changeOffsetOrLimit={changeOffsetOrLimitHandler}
            totalDataCount={sparePartsCount}
            setPageStore={setSparePartsPageHandler}
            currPage={page}  
                       
            />;        
    }          
    
    return (
        <React.Fragment>               
            <SearchSpareParts
                clickedSearch1={submitSearchHandler1}                
                clickedReset={resetSearchHandler}
                id={sparePartsTable.tableId}                   
            />                                                
            {sparePartsTable}            
        </React.Fragment>        
    );
};

export default withErrorHandler(SpareParts, axios);