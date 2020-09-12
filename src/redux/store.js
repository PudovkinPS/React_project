import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'

let store = {
  _state: {
    profilePage: {
      post: [
        {message: 'Hi', id: '1', likes: '5'},
        {message: 'HEllo', id: '2', likes: '15'},
        {message: 'Forza juve', id: '3', likes: '0'}
      ],
      newPostText: ''
    },
    dialogsPage: {
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
  },
  _renderEntireTree() {
    console.log('State')
  },

  getState() {
    return this._state
  },
  subscribe(observer){
    this._renderEntireTree = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    
    this._renderEntireTree(this.getState())
  }

}

export default store