import React from 'react'
import s from './NewPost.module.css'

function NewPost() {
  return (
    <div className={s.newPost}>
      <textarea name="" id="" cols="20" rows="5"></textarea>
      <button>Click</button>
    </div>
  )
}

export default NewPost
