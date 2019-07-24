import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
// import store, { history } from './store'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'
import configureStore, { history } from './configureStore';

const store = configureStore()

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
      <App/>
      </>
    </ConnectedRouter>
  </Provider>,
  target
)
