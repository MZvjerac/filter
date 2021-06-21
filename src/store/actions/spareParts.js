import * as actionTypes from './actionTypes';
import axios from '../../axios-local';

export const setSparePartsOffsetLimit = (offset, limit) => {
    return {
        type: actionTypes.SET_SPAREPARTS_OFFSET_LIMIT,
        offset: offset,
        limit: limit
    }
};

export const setSparePartsPage = (page) => {
    return {
        type: actionTypes.SET_SPAREPARTS_PAGE,
        page: page
    }
};

export const fetchSparePartsSuccess = (spareParts, sparePartsCount) => {
    return {
        type: actionTypes.FETCH_SPAREPARTS_SUCCESS,
        spareParts: spareParts,
        sparePartsCount: sparePartsCount
    }
};

export const fetchSparePartsFail = (error) => {
    return {
        type: actionTypes.FETCH_SPAREPARTS_FAIL,
        error: error
    }
};

export const fetchSparePartsStart = () => {
    return {
        type: actionTypes.FETCH_SPAREPARTS_START
    }
};



export const fetchSpareParts = (offset, limit, partNumber, parentPns, ataChapter, eligibility, nomenclature, repairDescription) => {
    return dispatch => {
        dispatch(fetchSparePartsStart());        
          
        const query = new URLSearchParams();                        
        query.append('partNumber', partNumber);
        query.append('parentPns', parentPns);
        query.append('ataChapter', ataChapter);
        query.append('eligibility', eligibility);
        query.append('nomenclature', nomenclature); 
        // query.append('iarRouting', iarRouting);
        query.append('repairDescription', repairDescription);         
        // query.append('approval', approval);         
        query.append('offset', offset);
        query.append('limit', limit); 
            

        let queryString = limit !== "-1"            
            ? query
            : '';            
            
        axios.get(`/spareParts?`+ queryString)
            .then(response => {                
                dispatch(fetchSparePartsSuccess(response.data['spareParts'], response.data['sparePartsCount']))                 
            })
            .catch(error => {
                dispatch(fetchSparePartsFail(error));                                
            }    
        );        
    }
};

export const unmountSpareParts = () => {
    return {
        type: actionTypes.UNMOUNT_SPAREPARTS
    }
};