import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import Login from '../pages/login'

function Router() {
  return (
    <BrowserRouter>

    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router