import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ state, dispatch }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={state.posts} newPostText={state.newPostText} dispatch={dispatch} />
        </div>
    )
}

export default Profile
