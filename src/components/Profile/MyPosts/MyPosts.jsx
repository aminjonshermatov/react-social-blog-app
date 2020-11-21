import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const postData = [
    {
        id: 1,
        message: 'Hi, how are you',
        likes: 0
    },
    {
        id: 2,
        message: 'It is my first post',
        likes: 12
    },
    {
        id: 3,
        message: 'Posts is gooood',
        likes: 32
    },
];

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea cols="40" rows="6"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postData.map(({ id, message, likes }) => <Post key={id} message={message} likes={likes} />)}
            </div>
        </div>
    )
}

export default MyPosts
