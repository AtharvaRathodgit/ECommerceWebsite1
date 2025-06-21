import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// 
import Navbar from './components/navbar'
import HomePage from './components/homePage'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
