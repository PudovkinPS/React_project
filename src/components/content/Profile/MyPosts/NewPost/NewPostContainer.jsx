import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../../../redux/profileReducer'
import NewPost from './NewPost'

function NewPostContainer(props) {
  
  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text))
  }
 
  return (
    <NewPost 
      onPostChange={onPostChange} 
      addPost={addPost}
      newPostText={props.newPostText}
    />
  )
}

export default NewPostContainer