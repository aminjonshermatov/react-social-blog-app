import React from 'react'
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

const Users = ({ users, follow, unFollow, setUsers }) => {
    const getUsers = () => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => setUsers(response.data.items))
        }
    };

    return (
        <div>
            {users.length === 0 ? <button onClick={getUsers}>Get Users</button> : ''}
            {
                users.map(({ id, name, status, location, followed, photos }) => (
                    <div key={id}>
                        <span>
                            <div>
                                <img alt="user" src={photos.small !== null ? photos.small : userPhoto} className={classes.userPhoto} />
                            </div>
                            <div>
                                {
                                    followed
                                        ? <button onClick={() => unFollow(id)}>Unfollow</button>
                                        : <button onClick={() => follow(id)}>Follow</button>
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
    )
}

export default Users;