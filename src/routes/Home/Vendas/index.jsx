import React from 'react'
import { FormVendas } from '../../../components/formVendas'
import './style.css'
export const Vendas = () => {
  return (
    <>
      <nav className="form-nav">
        <p>vendas</p>
      </nav>
      <div className="vendas-container">
        <FormVendas />
      </div>
    </>
  )
}
