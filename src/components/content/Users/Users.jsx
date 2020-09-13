import React from 'react'
import style from './Users.module.css'

function Users (props) {

  if (props.users.length === 0) {
    props.setusers(
      [
        {id: 1, photo_url: 'https://sun9-59.userapi.com/impg/R9Fy3U8GnqMgowE0M9IHYF94e9gNJKnWJA-mVA/CCD5tG7nL_s.jpg?size=200x0&quality=90&crop=16,10,2132,2132&sign=b26bf2e416d610081ebca6878de930ff&ava=1', followed: false, name: 'Lena', status: 'email-mark', location: {city: 'Moscwo'} },
        {id: 2, photo_url: 'https://sun9-59.userapi.com/impg/R9Fy3U8GnqMgowE0M9IHYF94e9gNJKnWJA-mVA/CCD5tG7nL_s.jpg?size=200x0&quality=90&crop=16,10,2132,2132&sign=b26bf2e416d610081ebca6878de930ff&ava=1', followed: true, name: 'Pasha', status: 'frontend', location: {city: 'Moscwo'} },
        {id: 3, photo_url: 'https://sun9-59.userapi.com/impg/R9Fy3U8GnqMgowE0M9IHYF94e9gNJKnWJA-mVA/CCD5tG7nL_s.jpg?size=200x0&quality=90&crop=16,10,2132,2132&sign=b26bf2e416d610081ebca6878de930ff&ava=1', followed: false, name: 'Vova', status: 'manager', location: {city: 'Pushkino'} }
      ]
    )
  }
  
  return ( 
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <span> 
            <div>
              <img className={style.usersPhoto} src={u.photo_url}/>
            </div>
            <div>
              { u.followed 
                ? <button onClick={ () => { props.unFollow(u.id) } }>Unfollow</button>
                : <button onClick={() => { props.follow(u.id)} }>Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div><div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users