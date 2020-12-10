import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profile, status, updateStatus }) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile
