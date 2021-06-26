import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';

import apiClient from '../../apiClient';
import history from '../../history';

import {  registerFailure, registerSuccess, logInSuccess, logInFailure, logOutSuccess, logOutFailure } 
from './user.actions';


export function* userRegistration({payload: { username, email, password, confirmPassword }}) {
    try {

        yield apiClient.get('/sanctum/csrf-cookie');

        const userData = yield apiClient.post('/api/register', {
            username,
            email,
            password,
            password_confirmation: confirmPassword
        })

        yield put(registerSuccess(userData.data));
        yield put(logInSuccess(userData.data));

        
    } catch (error) {
        yield put(registerFailure(error))
    }
}

export function* onUserRegistrationStart() {
    yield takeLatest(
        UserActionTypes.REGISTER_START,
        userRegistration
    )
}

export function* emailLogIn({ payload : { email, password }}){

    try {

        yield apiClient.get('/sanctum/csrf-cookie');

        const userData = yield apiClient.post('/api/login', {
            email,
            password
        })

        yield put(logInSuccess(userData.data));
        
        if(history.location.state){
            console.log(history.location.state.from)
            history.push(`${history.location.state.from}`)
        } else {
            history.push('/')
        }

    } catch (error) {
        yield put(logInFailure(error))
    }

}

export function* onEmailLogInStart(){
    yield takeLatest(
        UserActionTypes.EMAIL_LOG_IN_START,
        emailLogIn
    )
}

export function* userLogOut(){

    try {

        yield apiClient.get('/sanctum/csrf-cookie');
        yield apiClient.post('/api/logout')

        yield put(logOutSuccess());
        history.push('/')

    } catch (error) {
        yield put(logOutFailure(error))
    }

}

export function* onUserLogOut(){
    yield takeLatest(
        UserActionTypes.LOG_OUT_START,
        userLogOut
    )
}

export function* userSagas() {
    yield all([
        call(onEmailLogInStart),
        call(onUserRegistrationStart),
        call(onUserLogOut)
    ]);
}