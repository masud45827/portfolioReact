import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './components/Menu'
import Middle from './components/Middle'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Project from './components/Project'
import Datafetch from './components/Datafetch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
     {/* <Menu/> 
     <Datafetch/>
     <Middle/>
     <About/>
     <Experience/>
     <Project/>
     <Contact/> */}
     <BrowserRouter>
       <Menu /> 
        <Routes>
        
          <Route path = '/portfolioReact' element={<Middle />} />
          <Route path='/about' element={<About />} />
          <Route path ='/datafetch' element={<Datafetch />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
