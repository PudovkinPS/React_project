import React from 'react'
import s from './NewPost.module.css'
import Post from './../Post/Post'

function NewPost(props) {
  const newPostElement = React.createRef()

  let postsElements = props.post.map( p => <Post key={p.id} message={p.message} like={p.likes} id={p.id}/>)

  const addPost = () => {
    props.addPost()
  }

  const onPostChange = (e) => {
    let text = newPostElement.current.value
    props.onPostChange(text)
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
      { postsElements }
    </div>
  )
}

export default NewPost
