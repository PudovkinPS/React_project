const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    // {id: 1, photo_url: 'https://sun9-59.userapi.com/impg/R9Fy3U8GnqMgowE0M9IHYF94e9gNJKnWJA-mVA/CCD5tG7nL_s.jpg?size=200x0&quality=90&crop=16,10,2132,2132&sign=b26bf2e416d610081ebca6878de930ff&ava=1', followed: false, name: 'Lena', status: 'email-mark', location: {city: 'Moscwo'} },
    // {id: 2, photo_url: 'https://sun9-59.userapi.com/impg/R9Fy3U8GnqMgowE0M9IHYF94e9gNJKnWJA-mVA/CCD5tG7nL_s.jpg?size=200x0&quality=90&crop=16,10,2132,2132&sign=b26bf2e416d610081ebca6878de930ff&ava=1', followed: true, name: 'Pasha', status: 'frontend', location: {city: 'Moscwo'} },
    // {id: 3, photo_url: 'https://sun9-59.userapi.com/impg/R9Fy3U8GnqMgowE0M9IHYF94e9gNJKnWJA-mVA/CCD5tG7nL_s.jpg?size=200x0&quality=90&crop=16,10,2132,2132&sign=b26bf2e416d610081ebca6878de930ff&ava=1', followed: false, name: 'Vova', status: 'manager', location: {city: 'Pushkino'} }
  ]
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
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state
  }
}

export const followAC = (user_id) => ({type: FOLLOW, user_id})
export const unFollowAC = (user_id) => ({type: UN_FOLLOW, user_id})
export const setUsers = (users) => ({type: SET_USERS, users})

export default usersReducer