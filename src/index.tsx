import React from 'react'
import ReactDOM from 'react-dom'
import ClassApp from 'class/App'
import Counter from 'Counter'
import App from 'App'
import Timer from 'Timer'
import HOCCounter from 'HOCCounter'
import reportWebVitals from './reportWebVitals'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ClassApp />
    <Counter />
    <Timer />
    <HOCCounter max={100} />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
