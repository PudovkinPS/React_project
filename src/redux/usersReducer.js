const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CORRENT_PAGE = 'SET_CORRENT_PAGE'
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 10,
  totalUsers: 0,
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW: 
      return {
        ...state, 
        users: state.users.map(u => {
          if (u.id === action.user_id) {
            return {...u, followed: true}
          }
          return u 
        })
      }
    case UN_FOLLOW:
      return {
        ...state, 
        users: state.users.map(u => {
          if (u.id === action.user_id) {
            return {...u, followed: false}
          }
          return u 
        })
      }
    case SET_USERS:
      return {
        ...state, 
        users: action.users
      }
    case SET_CORRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case TOTAL_USERS_COUNT: 
      return {
        ...state,
        totalUsers: action.totalUsersCount
      }
    default:
      return state
  }
}

export const followAC = (user_id) => ({type: FOLLOW, user_id})
export const unFollowAC = (user_id) => ({type: UN_FOLLOW, user_id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CORRENT_PAGE, currentPage})
export const setTotalusersCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer