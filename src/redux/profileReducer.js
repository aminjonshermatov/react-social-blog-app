const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_POST:
            const newPost = {
                id: Date.now(),
                message: state.newPostText,
                likes: parseInt(Math.random() * 60)
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = payload.text;
            return state;
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

export default profileReducer;