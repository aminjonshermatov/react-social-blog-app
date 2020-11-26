const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, { type, payload }) => {
    switch (type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = payload.text;
            return state;
        case SEND_MESSAGE:
            const newMessage = {
                message: state.newMessageBody,
                id: Date.now()
            };
            state.newMessageBody = '';
            state.messages.push(newMessage);
            return state;
        default:
            return state;
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