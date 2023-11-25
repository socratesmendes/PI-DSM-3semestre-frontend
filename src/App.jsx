import { useState } from 'react'
import './App.css'
import { Home, Cadastro, Vendas } from './routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/vendas" element={<Vendas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
