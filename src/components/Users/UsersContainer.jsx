import React from 'react'
import Users from './Users';
import { connect } from "react-redux";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress
} from '../../redux/usersReducer';
import Loader from '../Loader/Loader';
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = page => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            });
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
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
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

/* const mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId));
        },
        unFollow: userId => {
            dispatch(unFollowAC(userId));
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: page => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount: totalCount => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: isFetching => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    };
}; */

export default connect(
    mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        toggleIsFetching,
        toggleFollowingProgress
    }
)(UsersContainer);