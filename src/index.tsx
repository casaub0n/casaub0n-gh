import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import { App } from './App'
import * as reducers from './reducers'

// Store
const store = createStore(combineReducers(reducers), applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
)
