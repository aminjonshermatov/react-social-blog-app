import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const Dialogs = ({ state, dispatch }) => {
    const handleSendMessage = () => {
        dispatch(sendMessageCreator());
    };

    const handleChangeMessage = ev => {
        const { value } = ev.target;
        dispatch(updateNewMessageTextActionCreator(value));
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {state.dialogs.map(({ name, id}) => <DialogItem key={id} name={name} id={id} />)}
            </div>
            <div className={classes.messages}>
                <div>
                    {state.messages.map(({ message, id }) => <Message key={id} message={message} />)}
                </div>
                <div>
                    <textarea
                        value={state.newMessageBody}
                        onChange={handleChangeMessage}
                        cols="20"
                        rows="3"
                        placeholder='Enter your message'
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Dialogs
