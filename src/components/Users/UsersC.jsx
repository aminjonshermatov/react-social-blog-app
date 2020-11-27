import React from 'react'
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(({ id, name, status, location, followed, photos }) => (
                        <div key={id}>
                            <span>
                                <div>
                                    <img alt="user" src={photos.small !== null ? photos.small : userPhoto} className={classes.userPhoto} />
                                </div>
                                <div>
                                    {
                                        followed
                                            ? <button onClick={() => this.props.unFollow(id)}>Unfollow</button>
                                            : <button onClick={() => this.props.follow(id)}>Follow</button>
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
}

export default Users;