import React from 'react'
import s from './MyPosts.module.css'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'

function MyPosts() {
  return (
    <div className={s.myPost}>
      <div className={s.title}>
      My post
      </div>
      <NewPost />
      <Post message="Hi" like="15"/>
      <Post message="Hello, bro" like="1"/>
    </div>
  )
}

export default MyPosts
