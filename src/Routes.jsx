import Início from './Pages/Início/Início'
import Sobre from './Pages/Sobre/Sobre'
import Projetos from './Pages/Projetos/Projetos'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'

import React from 'react'

export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Início />} /> 
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/projetos" element={< Projetos/>} />
    </Routes>
    </BrowserRouter>

  </>
  )
}
