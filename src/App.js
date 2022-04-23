import React from 'react'
import { Navbar } from './components'
import { About, Header, Skills, Testimonial, Work, Footer } from './containers'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App