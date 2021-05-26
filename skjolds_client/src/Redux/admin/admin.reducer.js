import AdminActionTypes from './admin.types';

const INITIAL_STATE = {
    modelList: [],
    currentModel: '',
    records: {
        data: []
    },
    currentRecord : {},
    hasLoaded: true,
    error: ''
};

const adminReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AdminActionTypes.CREATE_RECORD_START:
        case AdminActionTypes.EDIT_RECORD_START:
        case AdminActionTypes.FETCH_RECORDS_START:
        case AdminActionTypes.FETCH_MODEL_LIST_START:
        case AdminActionTypes.FETCH_INDIVIDUAL_RECORD_START:
        case AdminActionTypes.DELETE_RECORD_START:
            return {
                ...state,
                hasLoaded: false
            }
        case AdminActionTypes.FETCH_MODEL_LIST_SUCCESS:
            return {
                ...state,
                modelList: [...action.payload],
                hasLoaded: true
            }
        case AdminActionTypes.FETCH_RECORDS_SUCCESS:
            return {
                ...state,
                records: action.payload,
                hasLoaded: true
            }
        case AdminActionTypes.DELETE_RECORD_SUCCESS:
        case AdminActionTypes.SET_RECORDS_DATA:
            return {
                ...state,
                records: {
                    ...state.records,
                    data: action.payload
                },
                hasLoaded: true
            }
        case AdminActionTypes.CREATE_RECORD_SUCCESS:
            return {
                ...state,
                currentModel: '',
                records: {
                    data: []
                },
                hasLoaded: true
            }
        case AdminActionTypes.EDIT_RECORD_SUCCESS:
            return {
                ...state,
                currentRecord : {},
                records: {
                    data: [...action.payload]
                },
                hasLoaded: true
            }
        case AdminActionTypes.FETCH_INDIVIDUAL_RECORD_SUCCESS:
            return {
                ...state,
                currentRecord: action.payload,
                hasLoaded: true
            }
        case AdminActionTypes.CREATE_RECORD_FAILURE:
        case AdminActionTypes.EDIT_RECORD_FAILURE:
        case AdminActionTypes.DELETE_RECORD_FAILURE:
        case AdminActionTypes.FETCH_MODEL_LIST_FAILURE:
        case AdminActionTypes.FETCH_RECORDS_FAILURE:
        case AdminActionTypes.FETCH_INDIVIDUAL_RECORD_FAILURE:
            return {
                ...state,
                error: action.payload,
                hasLoaded: true
            }
        case AdminActionTypes.CHANGE_CURRENT_MODEL:
            return {
                ...state,
                currentModel: action.payload
            }
        case AdminActionTypes.CHANGE_CONTENT_LOADED_STATUS:
            return {
                ...state,
                hasLoaded: action.payload
            }
        default:
            return state;
    }
}

export default adminReducer;