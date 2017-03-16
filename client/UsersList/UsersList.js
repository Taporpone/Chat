import React from 'react';

import styles from './UsersList.css';
import stylesRed from './UsersListRed.css';
import stylesGreen from './UsersListGreen.css';

const UsersList = props => (
    <div className={props.theme === 'red' ? stylesRed.Users : (props.theme === 'green' ? stylesGreen.Users : styles.Users)}>
        <div className={props.theme === 'red' ? stylesRed.UsersOnline : (props.theme === 'green' ? stylesGreen.UsersOnline : styles.UsersOnline)}>
            {props.users.length} {props.users.length === 1 ? 'user' : 'users'} online
        </div>
        <ul className={props.theme === 'red' ? stylesRed.UsersList : (props.theme === 'green' ? stylesGreen.UsersList : styles.UsersList)}>
            {
                props.users.map((user) => {
                    return (
                        <li key={user.id} className={props.theme === 'red' ? stylesRed.UserItem : (props.theme === 'green' ? stylesGreen.UserItem : styles.UserItem)}>
                            {user.name}
                        </li>
                    );
                })
            }
        </ul>
    </div>
);

export default UsersList;