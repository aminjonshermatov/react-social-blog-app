import React from 'react'
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="#l">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="#l">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="#l">News</a>
            </div>
            <div className={classes.item}>
                <a href="#l">Music</a>
            </div>
            <div className={classes.item}>
                <a href="#l">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar
