let rerenderEntireTree = () => {
    console.log('state was chanded');
}

const state = {
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
        ]
    }
};

window.state = state;

export const addPost = () => {
    const newPost = {
        id: Date.now(),
        message: state.profilePage.newPostText,
        likes: parseInt(Math.random() * 60)
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state, addPost, updateNewPostText);
};

export const updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state, addPost, updateNewPostText);
};

export const subscribe = obsebver => {
    //obsebver(state, addPost, updateNewPostText);
    rerenderEntireTree = obsebver;
};

export default state;