import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'

const App = () => {
  return (
    <div>
      <Header/>
        <Routes>
        <Route path="/" element={< Homepage/>} />
        <Route path="coins" element={<Coins/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
