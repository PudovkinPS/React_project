import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './redux/reduxStore'
import ReactDOM from 'react-dom'
import App from './App'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App 
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister();
