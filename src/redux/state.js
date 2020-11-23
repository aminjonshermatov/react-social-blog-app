const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            messages: [
                {
                    message: 'Hi redux',
                    id: 1
                },
                {
                    message: 'My name is blablabla',
                    id: 2
                },
                {
                    message: 'How are you',
                    id: 3
                },
                {
                    message: 'Goodbye',
                    id: 4
                }
            ],
            dialogs: [
                {
                    name: 'Aminjon',
                    id: 1
                },
                {
                    name: 'Azamat',
                    id: 2
                },
                {
                    name: 'Mehrona',
                    id: 3
                },
                {
                    name: 'Abdu',
                    id: 4
                },
                {
                    name: 'Razoq',
                    id: 5
                },
                {
                    name: 'Jataroq',
                    id: 6
                }
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('state was chanded');
    },
    getState() {
        return this._state;
    },
    subscribe(obsebver) {
        //obsebver(state, addPost, updateNewPostText);
        this._callSubscriber = obsebver;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: Date.now(),
                message: this._state.profilePage.newPostText,
                likes: parseInt(Math.random() * 60)
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
        
            this._callSubscriber(this.getState());
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.payload.text;
            this._callSubscriber(this.getState());
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.payload.text;
            this._callSubscriber(this.getState());
        } else if (action.type === SEND_MESSAGE) {
            const newMessage = {
                message: this._state.dialogsPage.newMessageBody,
                id: Date.now()
            };
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push(newMessage);
            this._callSubscriber(this.getState());
        }
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

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};

export const updateNewMessageTextActionCreator = text => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        payload: {
            text
        }
    };
};

window.store = store;

export default store;