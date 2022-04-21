import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.less'
import 'uno.css'
import App from './App'
import fib from 'virtual:fib'
import env from 'virtual:env'

console.log("env: ",env)
console.log(`result:  ${fib(10)}`) 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
