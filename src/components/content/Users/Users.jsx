import React from 'react'
import userPhoto from './../../../assets/images/heroes.jpg'
import style from './Users.module.css'


function Users (props) {
  let pagesCount = Math.ceil(props.totalUsers / props.pageSize)
    
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {
          pages.map(p =>{
            return <span key={p} onClick={ () => props.onPageChenged(p)} className={props.currentPage === p ? style.selected : ''}> {p} / </span>
          })
        }
      </div>
      {
        props.users.map(u => <div key={u.id}>
          <span> 
            <div>
              <img className={style.usersPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
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
          </span>
        </div>)
      }
    </div>
  )
}

export default Users