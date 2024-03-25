/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from "react-router-dom"
import {toast,Toaster} from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(

  // counter App code

  // <Provider store={store}>
  //   <App />
  // </Provider>

  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>
)