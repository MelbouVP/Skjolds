import UserActionTypes from './user.types';

const INITIAL_STATE = {
    data: null,
    isAuthenticated: false,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.LOG_IN_SUCCESS:
            return {
                ...state,
                data: action.payload.user,
                isAuthenticated: true,
                error: null
            }
        case UserActionTypes.LOG_OUT_SUCCESS:
            return {
                ...state,
                data: null,
                isAuthenticated: false,
                error: null
            }
        case UserActionTypes.LOG_IN_FAILURE:
        case UserActionTypes.LOG_OUT_FAILURE:
        case UserActionTypes.REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;