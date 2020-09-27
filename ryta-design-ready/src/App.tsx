import React, { useState } from 'react'
import logo from './logo.svg'
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useMousePositions from './hooks/useMousePosition'
import './App.css'

function App() {
  const [show, setShow] = useState(true)
  const positions = useMousePositions()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello message="Hello World 2" />
        <LikeButton />
        <p>
          X: {positions.x}, Y: {positions.y}
        </p>
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          toggle show
        </button>
        {show && <MouseTracker />}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
