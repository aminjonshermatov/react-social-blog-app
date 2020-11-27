import React from 'react'
import classes from './Users.module.css';

const Users = ({ users, follow, unFollow, setUsers }) => {
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                fullName: 'Aminjon',
                photoUrl: 'https://img.lovepik.com/free_png/32/23/59/58PIC1b58PICVKYThNME6ABdg_PIC2018.png_860.png',
                status: 'less knows more stupid',
                location: {
                    country: 'Tajiksitan',
                    city: 'Khujand'
                },
                followed: true
            },
            {
                id: 2,
                fullName: 'Azamat',
                photoUrl: 'https://img.lovepik.com/free_png/32/23/59/58PIC1b58PICVKYThNME6ABdg_PIC2018.png_860.png',
                status: 'physics is the best',
                location: {
                    country: 'Tajikistan_01',
                    city: 'Khujand_01'
                },
                followed: false
            },
            {
                id: 3,
                fullName: 'Mehrona',
                photoUrl: 'https://img.lovepik.com/free_png/32/23/59/58PIC1b58PICVKYThNME6ABdg_PIC2018.png_860.png',
                status: 'i am a kayk',
                location: {
                    country: 'Tajikistan_02',
                    city: 'Khujand_02'
                },
                followed: false
            }
        ]);
    }
    

    return (
        <div>
            {
                users.map(({ id, fullName, status, location, followed, photoUrl }) => (
                    <div key={id}>
                        <span>
                            <div>
                                <img alt="user" src={photoUrl} className={classes.userPhoto} />
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
                                    {fullName}
                                </div>
                                <div>
                                    {status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {location.city}
                                </div>
                                <div>
                                    {location.country}
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