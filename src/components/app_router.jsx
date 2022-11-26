import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import QuienesSomos from '../pages/quienes_somos'
import Noticias from '../pages/noticias'
import Publicaciones from '../pages/publicaciones'
import Contacto from '../pages/contacto'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/quienes_somos' element={<QuienesSomos />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/publicaciones' element={<Publicaciones />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

