import React from 'react'
import * as axios from 'axios';
import Users from './Users';
import { connect } from "react-redux";
import {
    followAC,
    unFollowAC,
    setUsersAC,
    setCurrentPageAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC
} from '../../redux/usersReducer';
import Loader from '../Loader/Loader'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = page => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);