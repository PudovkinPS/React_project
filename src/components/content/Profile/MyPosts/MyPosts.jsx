import React from 'react'
import s from './MyPosts.module.css'
import NewPostContainer from './NewPost/NewPostContainer'

function MyPosts(props) {
  return (
    <div className={s.myPost}>
      <NewPostContainer />
    </div>
  )
}

export default MyPosts
