import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../FormControls/FormControls';
import { required, maxLengthCreator } from '../../utils/validators';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name='newMessageBody'
                    placeholder='Enter your message'
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

const Dialogs = ({ sendMessage, dialogs, messages, isAuth }) => {
    const addNewMessage = ({ newMessageBody }) => {
        sendMessage(newMessageBody);
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
                        <AddMessageFormRedux onSubmit={addNewMessage} />
                    </div>
                </div>
            )
    );
}

export default Dialogs
