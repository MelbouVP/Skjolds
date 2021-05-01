import UserActionTypes from './user.types'

export const registerStart = (registerData) => ({
    type: UserActionTypes.REGISTER_START,
    payload: registerData
})

export const registerSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.REGISTER_SUCCESS,
    payload: { user, additionalData }
})

export const registerFailure = (error) => ({
    type: UserActionTypes.REGISTER_FAILURE,
    payload: error
})

export const emailLogInStart = (loginData) => ({
    type: UserActionTypes.EMAIL_LOG_IN_START,
    payload: loginData
});

export const logInSuccess = (user) => ({
    type: UserActionTypes.LOG_IN_SUCCESS,
    payload: user
});

export const logInFailure = (error) => ({
    type: UserActionTypes.LOG_IN_FAILURE,
    payload: error
})

export const logOutStart = () => ({
    type: UserActionTypes.LOG_OUT_START
})

export const logOutSuccess = () => ({
    type: UserActionTypes.LOG_OUT_SUCCESS
})

export const logOutFailure = (error) => ({
    type: UserActionTypes.LOG_OUT_FAILURE,
    payload: error
})

