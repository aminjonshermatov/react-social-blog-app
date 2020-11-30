import React from 'react'
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = page => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    };

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

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
                                    className={this.props.currentPage === num ? classes.selectedPage : ''}
                                    key={num}
                                    onClick={() => this.onPageChanged(num)}
                                >
                                    {num}
                                </span>
                            );
                        })
                    }
                </div>
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