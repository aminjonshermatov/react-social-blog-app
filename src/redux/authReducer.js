const SET_USER_DATA = 'SET_USER_DATA';

const initialSate = {
    id: null,
    email: '',
    login: '',
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialSate, { type, payload }) => {
    switch (type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...payload,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = data => {
    return {
        type: SET_USER_DATA,
        payload: {
            ...data
        }
    };
};

export default authReducer;