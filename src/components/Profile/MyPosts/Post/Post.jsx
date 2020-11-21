import React from 'react';
import classes from './Post.module.css';

const Post = ({ message, likes }) => {
    return (
        <div className={classes.item}>
            <img src="https://townsquare.media/site/442/files/2020/01/avatar-10-year.jpg?w=980&q=75" alt="avatar"/>
            {message}
            <div>
                <span>like {likes}</span>
            </div>
        </div>
    )
}

export default Post
