import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";

const MyPosts = ({ posts, newPostText, dispatch }) => {
    const newPostElement = React.createRef();

    const addNewPost = () => {
        dispatch(addPostActionCreator());
    };

    const onChange = () => {
        const text = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onChange} value={newPostText} cols="40" rows="6" />
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts.map(({ id, message, likes }) => <Post key={id} message={message} likes={likes} />)}
            </div>
        </div>
    )
}

export default MyPosts
