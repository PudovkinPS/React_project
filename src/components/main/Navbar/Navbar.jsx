import React from 'react'
import s from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="#1">Profile</a>
      </div>
      <div className={s.item}>
        <a href="#1">Messages</a>
      </div>
      <div className={s.item}>
        <a href="#1">News</a>
      </div>
      <div className={s.item}>
        <a href="#1">Music</a>
      </div>
      <div className={s.item}>
        <a href="#1">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
