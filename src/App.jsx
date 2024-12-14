import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { near, $$ } from '@fastnear/api'

window.near = near;
window.$$ = $$;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
        <a href="https://fastnear.com" target="_blank">
          <img src="https://fastnear.com/img/logo_white.png" className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React + FASTNEAR</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {$$`${count + 1} Tgas`}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
