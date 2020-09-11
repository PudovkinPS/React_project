import React from 'react'
import s from './Post.module.css'

function Post(props) {
  return (
    <div className={s.post}>
      <div className={s.avatar}></div>
      <div className={s.text}>{props.message}</div>
      <div className={s.like}>{props.like}</div>
    </div>
  )
}

export default Post
