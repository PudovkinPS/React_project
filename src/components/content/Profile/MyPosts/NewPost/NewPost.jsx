import React from 'react'
import s from './NewPost.module.css'

function NewPost(props) {
  
  const newPostElement = React.createRef()

  const addPost = () => {
    props.dispatch({
      type: 'ADD-POST'
    })
  }

  const onPostChange = (e) => {
    let text = newPostElement.current.value
    props.dispatch({
      type: 'UPDATE-NEW-POST-TEXT',
      text: text
    })

    // props.updateNewPosttext(test)
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
