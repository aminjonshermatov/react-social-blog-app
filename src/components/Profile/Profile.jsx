import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ state, addPost, updateNewPostText }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={state.posts} newPostText={state.newPostText} addPost={addPost} updateNewPostText={updateNewPostText} />
        </div>
    )
}

export default Profile
