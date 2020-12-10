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
    ]
};

const dialogsReducer = (state = initialSate, { type, payload }) => {
    switch (type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        message: payload.newMessageBody,
                        id: Date.now()
                    }
                ]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = newMessageBody => {
    return {
        type: SEND_MESSAGE,
        payload: {
            newMessageBody
        }
    };
};

export default dialogsReducer;