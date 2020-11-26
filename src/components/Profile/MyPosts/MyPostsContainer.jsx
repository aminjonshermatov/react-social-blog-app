import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from './MyPosts';

const MyPostsContainer = ({ posts, newPostText, dispatch }) => {
    const addNewPost = () => {
        dispatch(addPostActionCreator());
    };

    const onChange = text => {
        dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts posts={posts} updateNewPostText={onChange} addPost={addNewPost} newPostText={newPostText} />
    );
};

export default MyPostsContainer;