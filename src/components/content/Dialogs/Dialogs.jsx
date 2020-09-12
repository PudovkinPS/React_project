import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props) {
  
  let messagesData = props.state.messageData.map( (m, i) => <Message key={i} message={m.message} id={m.id}/>)
  let dialogsItems = props.state.dialogs.map( (d, i) => <DialogItem key={i} name={d.name} id={d.id}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsItems }
      </div>
      <div className={s.messages}>
       { messagesData }
      </div>
    </div>
  )
}

export default Dialogs
