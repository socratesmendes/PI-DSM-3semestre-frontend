import React from 'react'
import { Link } from 'react-router-dom'
import {
  FormCliente,
  FormProduto,
  FormTipo,
  FormCategoria,
} from '../../components'

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
    <section>
      <div>
        <button onClick={() => showFormCliente()}>Cliente</button>
        {showCliente && <FormCliente />}
      </div>

      <div>
        <button onClick={() => showFormProduto()}>Produto</button>
        {showProduto && <FormProduto />}
      </div>

      <div>
        <button onClick={() => showFormCategoria()}>Categoria</button>
        {showCategoria && <FormCategoria />}
      </div>

      <div>
        <button onClick={() => showFormTipo()}>Tipo</button>
        {showTipo && <FormTipo />}
      </div>
    </section>
  )
}
