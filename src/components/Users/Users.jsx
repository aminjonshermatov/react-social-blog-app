import React from 'react'
import * as axios from 'axios';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Users = props => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) >= 50 ? 50 : Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <div>
            <div>
                {
                    pages.map(num => {
                        return (
                            <span
                                className={props.currentPage === num ? classes.selectedPage : ''}
                                key={num}
                                onClick={() => props.onPageChanged(num)}
                            >
                                {num}
                            </span>
                        );
                    })
                }
            </div>
            {
                props.users.map(({ id, name, status, followed, photos }) => (
                    <div key={id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${id}`}>
                                    <img
                                        alt="user"
                                        src={photos.small !== null
                                                ? photos.small
                                                : userPhoto
                                            }
                                        className={classes.userPhoto}
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {followed
                                        ? <button
                                            disabled={props.followingInProgress.some(numId => numId === id)}
                                            onClick={() => {
                                                props.toggleFollowingProgress(true, id);
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "23ebb49d-93e2-42ce-8588-d1ca3023b81e"
                                                    }
                                                })
                                                    .then(response => {
                                                        props.toggleFollowingProgress(false, id);
                                                        if (response.data.resultCode === 0) {
                                                            props.unFollow(id);
                                                        }
                                                    });
                                            }}
                                        >
                                            Unfollow
                                        </button>
                                        : <button
                                            disabled={props.followingInProgress.some(numId => numId === id)}
                                            onClick={() => {
                                                props.toggleFollowingProgress(true, id);
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "23ebb49d-93e2-42ce-8588-d1ca3023b81e"
                                                    }
                                                })
                                                    .then(response => {
                                                        props.toggleFollowingProgress(false, id);
                                                        if (response.data.resultCode === 0) {
                                                            props.follow(id);
                                                        }
                                                    });
                                            }}
                                        >
                                            Follow
                                        </button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {name}
                                </div>
                                <div>
                                    {status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {'location.city'}
                                </div>
                                <div>
                                    {'location.country'}
                                </div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;