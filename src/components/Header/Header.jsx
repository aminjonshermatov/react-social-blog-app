import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = ({ isAuth, login }) => {
    return (
        <header className={classes.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-samples/bakary.png" alt="logo"/>
            <div className={classes.loginBlock}>
                {
                    isAuth
                        ? login
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header
