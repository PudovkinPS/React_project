import React from 'react'
import s from './MyPosts.module.css'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'

function MyPosts(props) {
  
  let postsElements = props.post.post.map( (p, i) => <Post key={i} message={p.message} like={p.likes} id={p.id}/>)
  
  return (
    <div className={s.myPost}>
      <NewPost 
        newPostText={props.post.newPostText}
        dispatch={props.dispatch}
      />
      { postsElements }
    </div>
  )
}

export default MyPosts
