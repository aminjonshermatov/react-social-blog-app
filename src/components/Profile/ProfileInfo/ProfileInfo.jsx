import React from 'react';
import classes from './ProfileInfo.module.css';
import Loader from '../../Loader/Loader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return (
            <Loader />
        );
    }

    const { aboutMe, contacts, fullName, lookingForAJob, lookingForAJobDescription, photos, userId } = profile;

    return (
        <div>            
            {/* <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300" alt="snow"/>
            </div> */}
            <div className={classes.descriptionBlock}>
                <img src={photos?.large} alt="small"/>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo
