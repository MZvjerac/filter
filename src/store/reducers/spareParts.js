import * as actionTypes from '../actions/actionTypes';
import {rowsPerPageDefault} from '../../shared/staticData';
import {updateObject} from '../../shared/utility';

const initialState = {
    spareParts: null,
    sparePartsCount: null,
    sparePartsLoading: false,
    sparePartsOffset: 0,
    sparePartsLimit: rowsPerPageDefault,
    sparePartsPage: 0
};

const setSparePartsOffsetLimit = (state, action) => {
    return updateObject(state, {
        sparePartsOffset: action.offset,
        sparePartsLimit: action.limit
    });
};
const setSparePartsPage = (state, action) => {
    return updateObject(state, {
        sparePartsPage: action.page
    });
};
const fetchSparePartsStart = (state, action) => {
    return updateObject(state, {
        sparePartsLoading: true
    });
};
const fetchSparePartsSuccess = (state, action) => {
    return updateObject(state, {
        spareParts: action.spareParts,
        sparePartsCount: action.sparePartsCount,
        sparePartsLoading: false
    });
};
const fetchSparePartsFail = (state, action) => {
    return updateObject(state, {
        sparePartsLoading: false
    });
};

const unmountSpareParts = (state, action) => {
    return updateObject(state, {
        sparePartsOffset: 0,
        sparePartsPage: 0
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SPAREPARTS_OFFSET_LIMIT: return setSparePartsOffsetLimit(state, action);
        case actionTypes.SET_SPAREPARTS_PAGE: return setSparePartsPage(state, action);            
        case actionTypes.FETCH_SPAREPARTS_START: return fetchSparePartsStart(state, action);            
        case actionTypes.FETCH_SPAREPARTS_SUCCESS: return fetchSparePartsSuccess(state, action);            
        case actionTypes.FETCH_SPAREPARTS_FAIL: return fetchSparePartsFail(state, action);
        case actionTypes.UNMOUNT_SPAREPARTS: return unmountSpareParts(state, action);
        default: return state;
    }
};

export default reducer;