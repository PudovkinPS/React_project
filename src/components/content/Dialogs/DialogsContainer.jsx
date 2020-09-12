import React from 'react'
import {updateNewMessageBodyCreator, sendMessageCreater} from './../../../redux/dialogsReducer'
import Dialogs from './Dialogs';


function DialogsContainer(props) {

  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreater())
  }

  const onNewMessageChange = (body) => {
    props.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <Dialogs 
      updateNewMessageBody={onNewMessageChange} 
      sendMessage={onSendMessageClick}
      dialogPage={props.state}
    />
  )
}

export default DialogsContainer
