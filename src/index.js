import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './redux/state'
import ReactDOM from 'react-dom'
import App from './App'
import React from 'react'

let renderEntireTree = (state) => ReactDOM.render(
    <React.StrictMode>
      <App 
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)

serviceWorker.unregister();
