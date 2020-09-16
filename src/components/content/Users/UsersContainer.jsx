import {followAC, unFollowAC, setUsers, setCurrentPage, setTotalusersCount, setIsLoadingUsers} from './../../../redux/usersReducer'
import {connect} from 'react-redux'
import React from 'react'
import * as axios from 'axios'
import Users from './Users'
import Preloader from './../../common/Preloader/Preloader'

class UsersContainer extends React.Component{
  componentDidMount() {
    this.props.setIsLoadingUsers(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalusersCount(response.data.totalCount)
      this.props.setIsLoadingUsers(false)
    }) 
  }
  onPageChenged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.setIsLoadingUsers(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalusersCount(response.data.totalCount)
      this.props.setIsLoadingUsers(false)
    }) 
  }

  render() {
    return (
    <>
      { this.props.isLoading 
      ? <Preloader /> 
      : <Users 
          totalUsers={this.props.totalUsers}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChenged={this.onPageChenged}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
        /> }
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsers: state.usersReducer.totalUsers,
    currentPage: state.usersReducer.currentPage,
    isLoading: state.usersReducer.isLoading
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
    },
    setIsLoadingUsers: (isLoading) => {
      dispatch(setIsLoadingUsers(isLoading))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

