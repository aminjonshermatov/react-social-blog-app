// import Users from './Users';
import UsersC from './UsersC';
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer;