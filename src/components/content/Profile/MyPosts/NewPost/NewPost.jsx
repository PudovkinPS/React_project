import React from 'react'
import s from './NewPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../../../redux/profileReducer'

function NewPost(props) {
  const newPostElement = React.createRef()

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onPostChange = (e) => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }
 
  return (
    <div className={s.newPost}>
      <div>
        My post
      </div>
      <div className={s.newPost}>
        <textarea ref={newPostElement} cols="20" rows="5" value={props.newPostText} onChange={onPostChange}/>
        <button onClick={addPost}>Click</button>
      </div>
    </div>
  )
}

export default NewPost
