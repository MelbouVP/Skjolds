import { takeLatest, select, put, all, call } from 'redux-saga/effects';
import AdminActionTypes from './admin.types';

import apiClient from '../../apiClient';
import history from '../../history';

import { selectCurrentModel, selectCurrentRecord, selectRecordsData } from './admin.select';

import { 
    fetchModelListSuccess, 
    fetchModelListFailure, 
    fetchRecordsSuccess, 
    fetchRecordsFailure, 
    fetchRecordsStart,
    deleteRecordSuccess,
    deleteRecordFailure,
    fetchIndividualRecordSuccess,
    fetchIndividualRecordFailure,
    createRecordSuccess,
    createRecordFailure,
    editRecordSuccess,
    editRecordFailure

} from './admin.actions';

function* fetchModelList(){

    try {
        yield apiClient.get('/sanctum/csrf-cookie');

        const response = yield apiClient.get('/api/resources/index');

        yield put(fetchModelListSuccess(response.data));


    } catch (error) {
        console.log(error);
        yield put(fetchModelListFailure(error));
    }
}


function* onFetchModelList(){
    yield takeLatest(
        AdminActionTypes.FETCH_MODEL_LIST_START,
        fetchModelList
    )
}


function* fetchRecords({ payload }){
    // payload is model name
    yield put(fetchRecordsStart());
    console.log(payload);

    try {
        yield apiClient.get('/sanctum/csrf-cookie');

        const response = yield apiClient.get(`/api/${payload}s`)

        yield put(fetchRecordsSuccess(response.data));


    } catch (error) {
        yield put(fetchRecordsFailure(error));
    }
}


function* onModelChange(){
    yield takeLatest(
        AdminActionTypes.CHANGE_CURRENT_MODEL,
        fetchRecords
    )
}

function* deleteRecord({ payload }){
    // payload is recordID
    try {

        let currentModel = yield select(selectCurrentModel);
        let recordsData = yield select(selectRecordsData);

        yield apiClient.get('/sanctum/csrf-cookie');

        const response = yield apiClient.delete(`/api/${currentModel}/${payload}`);
        
        if(response.data === 1) {
                let newRecordsList = recordsData.filter( product => product.id !== payload);
                
                yield put(deleteRecordSuccess(newRecordsList));
        } else {
            throw new Error("Couldn't delete record.");
        }

    } catch (error) {
        yield put(deleteRecordFailure(error));
    }
}


function* onDeleteRecord(){
    yield takeLatest(
        AdminActionTypes.DELETE_RECORD_START,
        deleteRecord
    )
}

function* fetchIndividualRecord({ payload : { currentModel, recordID} }){
    console.log(currentModel, recordID)

    try {

        const response = yield apiClient.get(`/api/${currentModel}/edit/${recordID}`)
        console.log(response)

        yield put(fetchIndividualRecordSuccess(response.data));

    } catch (error) {
        yield put(fetchIndividualRecordFailure(error));
    }
}


function* onFetchIndividualRecord(){
    yield takeLatest(
        AdminActionTypes.FETCH_INDIVIDUAL_RECORD_START,
        fetchIndividualRecord
    )
}

function* createRecord({ payload }){
    // payload is data necassary to create new record
    try {

        let currentModel = yield select(selectCurrentModel);

        yield apiClient.get('/sanctum/csrf-cookie')
        const response  = yield apiClient.post(`/api/${currentModel}/create`, payload)

        
        if(response.status === 201) {
                yield put(createRecordSuccess());
        } else {
            throw new Error("Couldn't create record.");
        }

    } catch (error) {
        yield put(createRecordFailure(error));
    }
}


function* onCreateRecord(){
    yield takeLatest(
        AdminActionTypes.CREATE_RECORD_START,
        createRecord
    )
}

function* editRecord({ payload }){
    // payload is data necassary to edit existing record
    console.log(payload);
    try {

        let currentModel = yield select(selectCurrentModel);
        let recordsData = yield select(selectRecordsData);
        let currentRecord = yield select(selectCurrentRecord);

        yield apiClient.get('/sanctum/csrf-cookie')
        
        const response = yield apiClient.post(`/api/${currentModel}/update/${currentRecord.id}`, payload)
        
        if(response.status === 201){

            let newRecordsList = recordsData.map( (record,index) => {

                if(record.id === currentRecord.id){
                    return record[index] = response.data
                } else {
                    return record
                }
            });

            history.push('/resources');
            yield put(editRecordSuccess(newRecordsList));
        } else {
            throw new Error("Couldn't edit record.");
        }

    } catch (error) {
        yield put(editRecordFailure(error));
    }
}


function* onEditRecord(){
    yield takeLatest(
        AdminActionTypes.EDIT_RECORD_START,
        editRecord
    )
}


export function* adminSagas() {
    yield all([
        call(onFetchModelList),
        call(onModelChange),
        call(onDeleteRecord),
        call(onFetchIndividualRecord),
        call(onCreateRecord),
        call(onEditRecord)
    ]);
}