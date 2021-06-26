import UserActionTypes from './user.types';

const INITIAL_STATE = {
    data: {
        username: null,
        email: null,
        privileged: false
    },
    isAuthenticated: false,
    isCurrentlyAuthenticating: false,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.EMAIL_LOG_IN_START:
        case UserActionTypes.REGISTER_START:
        case UserActionTypes.LOG_OUT_START:
            return {
                ...state,
                isCurrentlyAuthenticating: true
            }
        case UserActionTypes.LOG_IN_SUCCESS:
            return {
                ...state,
                data: action.payload.user,
                isAuthenticated: true,
                isCurrentlyAuthenticating: false,
                error: null
            }
        case UserActionTypes.LOG_OUT_SUCCESS:
            return INITIAL_STATE;
        case UserActionTypes.LOG_IN_FAILURE:
        case UserActionTypes.LOG_OUT_FAILURE:
        case UserActionTypes.REGISTER_FAILURE:
            return {
                ...state,
                isCurrentlyAuthenticating: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;