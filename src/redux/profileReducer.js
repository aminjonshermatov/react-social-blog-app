import { usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostText: 'example',
    profile: {}
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
                        message: state.newPostText,
                        likes: parseInt(Math.random() * 60)
                    }
                ],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: payload.text
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: payload.profile
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = text => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        payload: {
            text
        }
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

export default profileReducer;