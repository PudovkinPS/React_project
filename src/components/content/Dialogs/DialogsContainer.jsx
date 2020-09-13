import {updateNewMessageBodyCreator, sendMessageCreater} from './../../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogsReducer
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreater())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
