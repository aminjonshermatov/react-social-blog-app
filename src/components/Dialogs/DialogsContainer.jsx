import React from 'react';
import { sendMessageCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({ state, dispatch }) => {
    const sendMessage = () => {
        dispatch(sendMessageCreator());
    };

    const changeMessage = text => {
        dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Dialogs
            sendMessage={sendMessage}
            updateNewMessageText={changeMessage}
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageBody={state.newMessageBody}
        />
    )
}

export default DialogsContainer;