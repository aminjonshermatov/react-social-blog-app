import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = ({ sendMessage, updateNewMessageText, dialogs, messages, newMessageBody, isAuth }) => {
    const handleSendMessage = () => {
        sendMessage();
    };

    const handleChangeMessage = ev => {
        const { value } = ev.target;
        updateNewMessageText(value);
    };

    return (
        !isAuth
            ? <Redirect to={"/login"} />
            : (
                <div className={classes.dialogs}>
                    <div className={classes.dialogsItems}>
                        {dialogs.map(({ name, id}) => <DialogItem key={id} name={name} id={id} />)}
                    </div>
                    <div className={classes.messages}>
                        <div>
                            {messages.map(({ message, id }) => <Message key={id} message={message} />)}
                        </div>
                        <div>
                            <textarea
                                value={newMessageBody}
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
    );
}

export default Dialogs
