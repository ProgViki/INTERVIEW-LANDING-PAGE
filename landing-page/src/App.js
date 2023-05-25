import React from 'react'
import Hero from './components/Main/Hero';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import "./App.css";


const App = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Footer />  
    </div>
  )
}

export default App
