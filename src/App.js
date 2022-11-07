import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import Main from './Components/Main'
import survey from './reducers/survey'

const reducer = combineReducers({
  survey: survey.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  return (    
      <Provider store={store}>
        <Main />
      </Provider>    
  )
}