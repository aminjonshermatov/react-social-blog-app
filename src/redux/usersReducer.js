const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialSate = {
    users: []
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
                    ...state.users,
                    ...payload.users
                ]
            };
        default:
            return state;
    }
};

export const followAC = id => {
    return {
        type: FOLLOW,
        payload: {
            userId: id
        }
    };
};

export const unFollowAC = id => {
    return {
        type: UNFOLLOW,
        payload: {
            userId: id
        }
    };
};

export const setUsersAC = users => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    };
};

export default usersReducer;