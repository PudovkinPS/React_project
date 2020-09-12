import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

function Dialogs(props) {
  const onSendMessageClick = () => {
    props.sendMessage()
  }

  const onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  const newMessageBody = props.dialogPage.newMessageBody
  
  const messagesData = props.dialogPage.messageData.map( (m, i) => <Message key={i} message={m.body} id={m.id}/>)
  const dialogsItems = props.dialogPage.dialogs.map( (d, i) => <DialogItem key={i} name={d.name} id={d.id}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsItems }
      </div>
      <div className={s.messages}>
       { messagesData }
       <div>
         <textarea placeholder="Enter your message" value={newMessageBody} onChange={onNewMessageChange} cols="20" rows="5" />
       </div>
       <div>
         <button onClick={onSendMessageClick} >Click</button>
       </div>
      </div>
    </div>
  )
}

export default Dialogs
