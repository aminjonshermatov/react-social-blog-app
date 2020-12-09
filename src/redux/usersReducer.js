import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

const initialSate = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialSate, { type, payload }) => {
    switch (type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === payload.userId ? ({...user, followed: true}) : user)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === payload.userId ? ({...user, followed: false}) : user)
            };
        case SET_USERS:
            return {
                ...state,
                users: [
                    ...payload.users
                ]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: payload.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: payload.isFetching
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: payload.isFetching
                                        ? [state.followingInProgress, payload.id]
                                        : state.followingInProgress.filter(numId => numId !== payload.id)
            };
        default:
            return state;
    }
};

export const followSuccess = id => {
    return {
        type: FOLLOW,
        payload: {
            userId: id
        }
    };
};

export const unFollowSuccess = id => {
    return {
        type: UNFOLLOW,
        payload: {
            userId: id
        }
    };
};

export const setUsers = users => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    };
};

export const setCurrentPage = page => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: page
        }
    };
};

export const setUsersTotalCount = totalUsersCount => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalUsersCount
        }
    };
};

export const toggleIsFetching = isFetching => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    };
};

export const toggleFollowingProgress = (isFetching, id) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        payload: {
            isFetching,
            id
        }
    };
};

export const getUsers = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
                dispatch(toggleIsFetching(false));
            });
    };
};

export const follow = userId => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    };
};

export const unFollow = userId => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unFollow(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    };
};

export default usersReducer;