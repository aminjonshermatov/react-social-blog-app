import React from 'react';
import { sendMessageCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    

    return (
        <StoreContext.Consumer>
            {store => {
                const sendMessage = () => {
                    store.dispatch(sendMessageCreator());
                };

                const changeMessage = text => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                };

                return (
                    <Dialogs
                        sendMessage={sendMessage}
                        updateNewMessageText={changeMessage}
                        dialogs={store.getState().dialogsPage.dialogs}
                        messages={store.getState().dialogsPage.messages}
                        newMessageBody={store.getState().dialogsPage.newMessageBody}
                    />
                );
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;