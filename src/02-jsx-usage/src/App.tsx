import React from 'react'
import Greets from './components/Greets'

const App: React.FunctionComponent = () => (
  <div className="App">
    <Greets name="Patty" times={4}>
      <span role="img" aria-label="rabbit">
        🐰
      </span>
    </Greets>
  </div>
)

export default App
