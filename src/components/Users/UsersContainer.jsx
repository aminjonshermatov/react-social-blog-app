import React from 'react'
import Users from './Users';
import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC } from '../../redux/usersReducer';

const mapStateToProps = state => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId))
        },
        unFollow: userId => {
            dispatch(unFollowAC(userId))
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;