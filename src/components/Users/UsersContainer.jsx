import React from 'react'
import Users from './Users';
import { connect } from "react-redux";
import {
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
} from '../../redux/usersReducer';
import Loader from '../Loader/Loader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = page => {
        this.props.getUsers(page, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Loader />
                    : ''}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

export default compose(
    connect(
        mapStateToProps,
        {
            follow,
            unFollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers
        }
    ),
    withAuthRedirect
)(UsersContainer);