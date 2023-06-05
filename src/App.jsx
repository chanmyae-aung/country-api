import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'
import Search from './components/Search'
import Region from './components/Region'
import DetailPage from './components/DetailPage'
import { StateContextCustom } from './context/StateContext'

const App = () => {
  const {mode, setMode} = StateContextCustom();
  // console.log(mode)
  return (
    <div className={mode ? "dark" : null}>
      <Navbar/>
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/region/:index' element={<Region/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App