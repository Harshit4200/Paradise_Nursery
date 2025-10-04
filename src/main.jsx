// src/main.jsx

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// 1. Change this import
import { HashRouter } from 'react-router-dom' 
import App from './App'
import store from './store/store'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* 2. And change this component */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)