import React from 'react'
import style from './Preloader.modules.css'
import preloader from '../../../assets/images/loader.gif'

function Preloader (props) {
  return (
    <div className={style}>
      <img src={preloader} />
    </div>
  )
}

export default Preloader