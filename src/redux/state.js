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
        {message: 'dsfsd', id: '1'},
        {message: '112232311', id: '2'},
        {message: '100', id: '3'}
      ],
      dialogs: [
        {id: 1, name: 'Pavel'},
        {id: 2, name: 'Pavlo'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Pahan'}
      ],
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 7,
        message: this._state.profilePage.newPostText,
        likes: 0
      }
    
      this._state.profilePage.post.push(newPost)
      this._state.profilePage.newPostText = ''
      this._renderEntireTree(this.getState())
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.text
      this._renderEntireTree(this.getState())
    }
  }

}

export default store