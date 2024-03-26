import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContexProvider from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContexProvider>
    <App />
  </ContexProvider>,
)
