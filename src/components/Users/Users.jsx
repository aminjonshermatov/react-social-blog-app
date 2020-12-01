import React from 'react'
import { usersAPI } from '../../api/api';
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
                                            props.unFollow(id);
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                    : <button
                                        disabled={props.followingInProgress.some(numId => numId === id)}
                                        onClick={() => {
                                            props.follow(id);
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