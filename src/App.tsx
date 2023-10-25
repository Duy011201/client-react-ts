import React from 'react'
import './assets/styles/app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.css'

import Home from '@pages/home/Home'
import NoPage from '@pages/404/NoPage'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
