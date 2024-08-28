import { useState } from 'react'
import './App.css'
import Nav from './NavBar/Nav'
import { Route,Routes } from 'react-router-dom'
import Home from './Home/Home'
import E_404 from './Errors/E_404'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<E_404/>}/>
      </Routes>
    </>
  )
}

export default App
