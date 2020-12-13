import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null,
    authRedirectPath: '/notes',
};

const authStart = (state, action) => {
    return updateObject(state, {loading: true, error: null})
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        loading: false,
        error: null
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {token: null, userId: null})
}

const authFail = (state, action) => {
    return updateObject(state, {error: action.err, loading: false})
}

const setAuthRedirectPath = () => {
    return updateObject()
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: 
            return state;
        
    }
     
};


export default rootReducer;
