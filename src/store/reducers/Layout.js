import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../util/utility';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null, 
    plus: true
};

const authStart = (state) => {
    return updateObject(state, {loading: true, error: null})
}

const userIdThrust = (state, action) => {
    return updateObject(state, {userId: action.userId})
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        loading: false,
        error: null, 
    })
}

const authLogout = (state) => {
    return updateObject(state, {token: null, userId: null})
}

const authFail = (state, action) => {
    return updateObject(state, {error: action.err, loading: false})
}

const plus = (state) => {
    return updateObject(state, {plus: true});
};

const minus = (state) => {
    return updateObject(state, {plus: false});
};

const loadingTrue = (state) => {
    return updateObject(state, {loading: true})
};

const loadingFalse = (state) => {
    return updateObject(state, {loading: false})
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.USER_ID_THRUST: return userIdThrust(state, action);
        case actionTypes.PLUS: return plus(state, action);
        case actionTypes.MINUS: return minus(state, action);
        case actionTypes.LOADINGTRUE: return loadingTrue(state, action);
        case actionTypes.LOADINGFALSE: return loadingFalse(state, action);

        default: 
            return state;
        
    }
     
};


export default rootReducer;
