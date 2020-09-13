
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initinalState = {
  messageData: [
    {body: 'dsfsd', id: '1'},
    {body: '112232311', id: '2'},
    {body: '100', id: '3'}
  ],
  dialogs: [
    {id: 1, name: 'Pavel'},
    {id: 2, name: 'Pavlo'},
    {id: 3, name: 'Pasha'},
    {id: 4, name: 'Pahan'}
  ],
  newMessageBody: ''
}

export const dialogsReducer = (state = initinalState, action) => {

  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
      return {
        ...state,
      newMessageBody: action.body
      }
    case SEND_MESSAGE: 
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messageData: [...state.messageData, {id: 78, body: body}]
      }
    default: 
      return state  
  }
}

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageCreater = () => ({type: SEND_MESSAGE})

export default dialogsReducer