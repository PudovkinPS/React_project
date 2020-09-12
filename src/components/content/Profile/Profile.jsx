import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

function Profile(props) {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts post={props.state} dispatch={props.dispatch}/>
    </div>
  );
}

export default Profile;
