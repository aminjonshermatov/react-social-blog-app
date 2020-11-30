// import Users from './Users';
import UsersC from './UsersC';
import { connect } from "react-redux";
import {
    followAC,
    unFollowAC,
    setUsersAC,
    setCurrentPageAC,
    setUsersTotalCountAC
} from '../../redux/usersReducer';

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer;