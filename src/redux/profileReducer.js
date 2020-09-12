const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initinalState = {
  post: [
    {message: 'Hi', id: '1', likes: '5'},
    {message: 'HEllo', id: '2', likes: '15'},
    {message: 'Forza juve', id: '3', likes: '0'}
  ],
  newPostText: ''
}

const profileReducer = (state = initinalState, action) => {

  switch(action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text
      return state
    case ADD_POST: 
      let newPost = {
        id: 7,
        message: state.newPostText,
        likes: 0
      }
    
      state.post.push(newPost)
      state.newPostText = ''
      return state
    default: 
      return state  
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export default profileReducer