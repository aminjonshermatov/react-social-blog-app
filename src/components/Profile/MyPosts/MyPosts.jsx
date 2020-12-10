import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const AddNewPostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name='newPostText'
                    component='textarea'
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm({ form: 'addNewPostForm' })(AddNewPostForm);

const MyPosts = ({ posts, addPost }) => {
    const onAddPost = ({ newPostText }) => {
        addPost(newPostText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={classes.posts}>
                {posts.map(({ id, message, likes }) => <Post key={id} message={message} likes={likes} />)}
            </div>
        </div>
    )
}

export default MyPosts
