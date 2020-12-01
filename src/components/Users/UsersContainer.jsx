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

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setUsersTotalCount(data.totalCount);
        //         this.props.toggleIsFetching(false);
        //     });
    }

    onPageChanged = page => {
        this.props.getUsers(page, this.props.pageSize);
        // this.props.setCurrentPage(page);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(page, this.props.pageSize).then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.toggleIsFetching(false);
        //     });
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

export default connect(
    mapStateToProps,
    {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    }
)(UsersContainer);