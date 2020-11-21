import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300" alt="snow"/>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    post1
                </div>
                <div className={classes.item}>
                    post2
                </div>
            </div>
        </div>
    )
}

export default Profile
