import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

/* const dialogsData = [
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
];

const messagesData = [
    {
        message: 'Hi',
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
]; */

const Dialogs = ({ state }) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {state.dialogs.map(({ name, id}) => <DialogItem key={id} name={name} id={id} />)}
            </div>
            <div className={classes.messages}>
                {state.messages.map(({ message, id }) => <Message key={id} message={message} />)}
            </div>
        </div>
    )
}

export default Dialogs
