import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './components/Menu'
import Middle from './components/Middle'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Project from './components/Project'

function App() {
  return (
    <div>
     <Menu/>
     <Middle/>
     <About/>
     <Experience/>
     <Project/>
     <Contact/>
    </div>
  )
}

export default App
