const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

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
    newPostText: 'example'
};

const profileReducer = (state = initialSate, { type, payload }) => {
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