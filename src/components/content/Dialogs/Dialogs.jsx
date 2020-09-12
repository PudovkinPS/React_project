import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'
import {updateNewMessageBodyCreator, sendMessageCreater} from './../../../redux/dialogsReducer'


function Dialogs(props) {
  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreater())
  }

  const onNewMessageChange = (e) => {
    let body = e.target.value
    props.dispatch(updateNewMessageBodyCreator(body))
  }

  const newMessageBody = props.state.newMessageBody
  
  let messagesData = props.state.messageData.map( (m, i) => <Message key={i} message={m.body} id={m.id}/>)
  let dialogsItems = props.state.dialogs.map( (d, i) => <DialogItem key={i} name={d.name} id={d.id}/>)

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
