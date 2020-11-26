import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
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
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this.getState());
    }
};

window.store = store;

export default store;