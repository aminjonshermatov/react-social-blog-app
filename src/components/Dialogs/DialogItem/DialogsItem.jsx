import React from 'react';
import classes from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};

export default DialogItem
