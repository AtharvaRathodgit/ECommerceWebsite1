import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// 
import Navbar from './components/navbar'
import HomePage from './components/homePage'

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )
}

export default App
