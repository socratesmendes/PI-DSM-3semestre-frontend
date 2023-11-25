import React from 'react'
import { Link } from 'react-router-dom'
import {
  FormCliente,
  FormProduto,
  FormTipo,
  FormCategoria,
} from '../../../components'
import './style.css'

export const Cadastro = () => {
  const [showCliente, setShowCliente] = React.useState(false)
  const [showProduto, setShowProduto] = React.useState(false)
  const [showCategoria, setShowCategoria] = React.useState(false)
  const [showTipo, setShowTipo] = React.useState(false)

  const showFormCliente = () => {
    setShowCliente((prevState) => !prevState)
    setShowProduto(false)
    setShowCategoria(false)
    setShowTipo(false)
  }

  const showFormProduto = () => {
    setShowProduto((prevState) => !prevState)
    setShowCliente(false)
    setShowCategoria(false)
    setShowTipo(false)
  }

  const showFormCategoria = () => {
    setShowCategoria((prevState) => !prevState)
    setShowCliente(false)
    setShowProduto(false)
    setShowTipo(false)
  }

  const showFormTipo = () => {
    setShowTipo((prevState) => !prevState)
    setShowCliente(false)
    setShowProduto(false)
    setShowCategoria(false)
  }

  return (
    <>
      <nav className="form-nav">
        <p>Cadastro</p>
      </nav>
      <section className="cadastro-section-container">
        <div className="cadastro-btn">
          <button onClick={() => showFormCliente()}>Cliente</button>

          <button onClick={() => showFormProduto()}>Produto</button>

          <button onClick={() => showFormCategoria()}>Categoria</button>

          <button onClick={() => showFormTipo()}>Tipo</button>
        </div>
        <div className="cadastro-form-content">
          {showCliente && <FormCliente />}
          {showProduto && <FormProduto />}
          {showCategoria && <FormCategoria />}
          {showTipo && <FormTipo />}
        </div>
      </section>
    </>
  )
}
