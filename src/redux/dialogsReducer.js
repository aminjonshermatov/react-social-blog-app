const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialSate = {
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
};

const dialogsReducer = (state = initialSate, { type, payload }) => {
    switch (type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = payload.text;
            return {...state};
        case SEND_MESSAGE:
            const newMessage = {
                message: state.newMessageBody,
                id: Date.now()
            };
            state.newMessageBody = '';
            state.messages.push(newMessage);
            return {...state};
        default:
            return {...state};
    }
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

export default dialogsReducer;