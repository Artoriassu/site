import React from 'react';
import view from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const SidebarFriend = (props) => {
  let path = '/' + props.id;
  return (
      <div className={view.sidebar_person}>
          <img src={props.avatar}/>
          <NavLink className={view.dialog_person} to={path}> {props.person}</NavLink>
      </div>
  )
}

const Navbar = (props) => {
let sidebar_elements = props.friends_sidebar
.map(sidebar_pers => <SidebarFriend id={sidebar_pers.id} avatar={sidebar_pers.avatar} person={sidebar_pers.person}  />)

  return (
    <nav className={view.nav}>
      <div className={view.item}> <NavLink to='/profile' activeClassName={view.active}>Profile</NavLink></div>
      <div className={view.item}> <NavLink to='/dialogs' activeClassName={view.active}>Messages</NavLink></div>
      <div className={view.item}> <NavLink to='/news' activeClassName={view.active}>News</NavLink></div>
      <div className={view.item}> <NavLink to='/music' activeClassName={view.active}>Music</NavLink></div>
      <div className={view.item}> <NavLink to='/settings' activeClassName={view.active}>Settings</NavLink></div>
      <div className={view.item}> <NavLink to='/users' activeClassName={view.active}>Search User</NavLink></div>

      <div className={view.sidebar}>
        <h2>Friends</h2>
  {sidebar_elements}
      </div>
    </nav>
  )
}

export default Navbar;