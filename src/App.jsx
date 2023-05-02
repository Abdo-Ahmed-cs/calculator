import React from 'react'
import Calc from './components/Calc'
import { store } from './app/store'
import { Provider } from "react-redux"

export default function App() {
  return (
    <Provider store={store}>
      <Calc/>
    </Provider>
  )
}
