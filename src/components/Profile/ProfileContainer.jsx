import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            this.isAuth
                ? <Redirect to={"/login"} />
                : <Profile profile={this.props.profile} />
        );
    };
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);