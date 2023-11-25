import React from 'react'
import { produtos } from '../../mock/produtos'
import { clientes } from '../../mock/clientes'
import './style.css'

export const FormVendas = () => {
  const [newProduto, setProduto] = React.useState([])
  const [newClientes, setClientes] = React.useState([])

  const [createNovaVenda, setCreateNovaVenda] = React.useState({
    produto: '',
    cliente: '',
    preco: '',
    quantidade: '',
  })

  React.useEffect(() => {
    const prods = produtos
    setProduto(prods)

    const clients = clientes
    setClientes(clients)
  }, [])

  const handleGetVenda = (e) => {
    const { name, value } = e.target
    setCreateNovaVenda({ ...createNovaVenda, [name]: value })
  }

  const handleSubmitVenda = (e) => {
    e.preventDefault()
    console.log(createNovaVenda)
  }

  return (
    <form
      onSubmit={(e) => handleSubmitVenda(e)}
      className="form-vendas-container"
    >
      <div className="form-vendas-content">
        <label>Produto: </label>
        <select id="produto" name="produto" onChange={(e) => handleGetVenda(e)}>
          {newProduto.length ? (
            newProduto.map((item) => (
              <option key={item.id} value={item.nome}>
                {item.nome}
              </option>
            ))
          ) : (
            <option>Não há produtos</option>
          )}
        </select>
      </div>

      <div className="form-vendas-content">
        <label>Cliente: </label>
        <select id="cliente" name="cliente" onChange={(e) => handleGetVenda(e)}>
          {newClientes.length ? (
            newClientes.map((item) => (
              <option key={item.id} value={item.nome}>
                {item.nome}
              </option>
            ))
          ) : (
            <option>Não há clientes</option>
          )}
        </select>
      </div>

      <div className="form-vendas-content">
        <label>Preço: </label>
        <input
          type="text"
          name="preco"
          id="preco"
          placeholder="Insira o preço"
          value={createNovaVenda.preco}
          onChange={(e) => handleGetVenda(e)}
        />
      </div>

      <div className="form-vendas-content">
        <label>Quantidade: </label>
        <input
          type="text"
          name="quantidade"
          id="quantidade"
          placeholder="Insira a quantidade"
          value={createNovaVenda.quantidade}
          onChange={(e) => handleGetVenda(e)}
        />
      </div>

      <button type="submit" className='form-venda-btn'>Cadastrar Venda</button>
    </form>
  )
}
