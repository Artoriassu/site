import React from 'react';
import view from './Users.module.css';
import userPhoto from '../../assets/f1.jpeg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && view.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }}>{p} </span>
            })}

        </div>
        {
           
            props.users.map(u =>
                <div className={view.item}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    {u.name}
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
                            }}>Follow</button>}
                    </div>
                    <div>
                        <span>Status : {u.status}</span>
                    </div>
                    <div>Country: {/*  u.location.country */} </div>
                    <div>City: { /* u.location.city */}</div>
                    <div> -</div>
                </div>
            )
        }
    </div>
}

export default Users;