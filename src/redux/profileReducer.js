import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialSate = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you',
            likes: 0
        },
        {
            id: 2,
            message: 'It is my first post',
            likes: 12
        },
        {
            id: 3,
            message: 'Posts is gooood',
            likes: 32
        }
    ],
    profile: {},
    status: ''
};

const profileReducer = (state = initialSate, { type, payload }) => {
    switch (type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: Date.now(),
                        message: payload.newPostText,
                        likes: parseInt(Math.random() * 60)
                    }
                ]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: payload.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: payload.status
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = newPostText => {
    return {
        type: ADD_POST,
        payload: {
            newPostText
        }
    };
};

export const setStatus = status => {
    return {
        type: SET_STATUS,
        payload: { status }
    };
};

const setUserProfile = profile => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    };
};

export const getUserProfile = userId => dispatch => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
};

export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        });
};

export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};


export default profileReducer;