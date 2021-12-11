import './App.css'

function App() {
  const n = Math.floor(Math.random() * 10)
  // P.26
  const threshold = 5
  // P.27
  const list = ['Patty', 'Rolley', 'Bobby']

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* P.26 */}
        <div>
          {n > threshold && <p>`n` is larger than {threshold}</p>}
          <p>`n` is {n % 2 === 0 ? 'even' : 'odd'}</p>
        </div>
        {/* P.27 */}
        <ul>
          {list.map((name) => (
            <li>Hello, {name}!</li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
