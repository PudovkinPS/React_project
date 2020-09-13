import {followAC, unFollowAC, setUsers} from './../../../redux/usersReducer'
import {connect} from 'react-redux'
import Users from './Users'

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (user_id) => {
      dispatch(followAC(user_id))
    },
    unFollow: (user_id) => {
      dispatch(unFollowAC(user_id))
    },
    setusers: (users) => {
      dispatch(setUsers(users))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

