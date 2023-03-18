import React from 'react'
import './app.css'
import {Header} from './components/header/Header'
import {GifsProvider} from './context/gifsContext/GifsProvider'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {

  return (
    <div className="wrap-App">
      <GifsProvider>
      <Router>
      <Header>
      </Header>
      </Router>
      </GifsProvider>
     
    </div>
  )
}

export default App
