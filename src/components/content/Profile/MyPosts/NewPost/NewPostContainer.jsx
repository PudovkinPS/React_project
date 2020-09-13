import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../../../redux/profileReducer'
import NewPost from './NewPost'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    newPostText: state.profileReducer.newPostText,
    post: state.profileReducer.post
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (body) => {
      dispatch(updateNewPostTextActionCreator(body))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer