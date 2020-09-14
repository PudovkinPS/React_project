import {followAC, unFollowAC, setUsers, setCurrentPage, setTotalusersCount} from './../../../redux/usersReducer'
import {connect} from 'react-redux'
import React from 'react'
import * as axios from 'axios'
import Users from './Users'
class UsersContainer extends React.Component{
  componentDidMount() {
    if (!this.props.users.length) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalusersCount(response.data.totalCount)
      }) 
    } 
  }
  onPageChenged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalusersCount(response.data.totalCount)
    }) 
  }

  render() {
    return (
      <Users 
        totalUsers={this.props.totalUsers}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChenged={this.onPageChenged}
        users={this.props.users}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
      />  
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsers: state.usersReducer.totalUsers,
    currentPage: state.usersReducer.currentPage
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
    setUsers: (users) => {
      dispatch(setUsers(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPage(currentPage))
    },
    setTotalusersCount: (totalusersCounts) => {
      dispatch(setTotalusersCount(totalusersCounts))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

