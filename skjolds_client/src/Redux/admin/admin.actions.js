import AdminActionTypes from './admin.types';


export const changeContentLoadedStatus = (hasLoaded) => ({
    type: AdminActionTypes.CHANGE_CONTENT_LOADED_STATUS,
    payload: hasLoaded
})

export const fetchModelListStart = () => ({
    type: AdminActionTypes.FETCH_MODEL_LIST_START
})

export const fetchModelListSuccess = (modelList) => ({
    type: AdminActionTypes.FETCH_MODEL_LIST_SUCCESS,
    payload: modelList
})

export const fetchModelListFailure = (errorMsg) => ({
    type: AdminActionTypes.FETCH_MODEL_LIST_FAILURE,
    payload: errorMsg
})

export const changeCurrentModel = (modelName) => ({
    type: AdminActionTypes.CHANGE_CURRENT_MODEL,
    payload: modelName
})

export const fetchRecordsStart = (modelName) => ({
    type: AdminActionTypes.FETCH_RECORDS_START,
    payload: modelName
})

export const fetchRecordsSuccess = (records) => ({
    type: AdminActionTypes.FETCH_RECORDS_SUCCESS,
    payload: records
})

export const fetchRecordsFailure = (errorMsg) => ({
    type: AdminActionTypes.FETCH_RECORDS_FAILURE,
    payload: errorMsg
})

export const setRecordsData = (records) => ({
    type: AdminActionTypes.SET_RECORDS_DATA,
    payload: records
})

export const deleteRecordStart = (recordID) => ({
    type: AdminActionTypes.DELETE_RECORD_START,
    payload: recordID
})

export const deleteRecordSuccess = (newRecordsData) => ({
    type: AdminActionTypes.DELETE_RECORD_SUCCESS,
    payload: newRecordsData
})

export const deleteRecordFailure = (errorMsg) => ({
    type: AdminActionTypes.DELETE_RECORD_FAILURE,
    payload: errorMsg
})

export const fetchIndividualRecordStart = (modelAndRecordID) => ({
    type: AdminActionTypes.FETCH_INDIVIDUAL_RECORD_START,
    payload: modelAndRecordID
})

export const fetchIndividualRecordSuccess = (recordData) => ({
    type: AdminActionTypes.FETCH_INDIVIDUAL_RECORD_SUCCESS,
    payload: recordData
})

export const fetchIndividualRecordFailure = (errorMsg) => ({
    type: AdminActionTypes.FETCH_INDIVIDUAL_RECORD_FAILURE,
    payload: errorMsg
})

export const createRecordStart = (data) => ({
    type: AdminActionTypes.CREATE_RECORD_START,
    payload: data
})

export const createRecordSuccess = () => ({
    type: AdminActionTypes.CREATE_RECORD_SUCCESS
})

export const createRecordFailure = (errorMsg) => ({
    type: AdminActionTypes.CREATE_RECORD_FAILURE,
    payload: errorMsg
})

export const editRecordStart = (data) => ({
    type: AdminActionTypes.EDIT_RECORD_START,
    payload: data
})

export const editRecordSuccess = (newRecordsData) => ({
    type: AdminActionTypes.EDIT_RECORD_SUCCESS,
    payload: newRecordsData
})

export const editRecordFailure = (errorMsg) => ({
    type: AdminActionTypes.EDIT_RECORD_FAILURE,
    payload: errorMsg
})