import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ state, dispatch }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer posts={state.posts} newPostText={state.newPostText} dispatch={dispatch} />
        </div>
    )
}

export default Profile
