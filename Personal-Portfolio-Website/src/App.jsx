import React from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Vision from './components/Vision'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Journey />
      <Skills />
      <Vision />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App