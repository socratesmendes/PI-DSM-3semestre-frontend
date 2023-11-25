import React from 'react'
import { produtos } from '../../mock/produtos'
import { clientes } from '../../mock/clientes'

export const FormVendas = () => {
  const [newVenda, setNewVenda] = React.useState([])
  const [newClientes, setClientes] = React.useState([])

  React.useEffect(() => {
    const prods = produtos
    setNewVenda(prods)

    const clients = clientes
    setClientes(clients)
  }, [])

  return (
    <form>
      <div>
        <label>Produto</label>
        <select id="vendas" name="vendas">
          {newVenda.length ? (
            newVenda.map((item) => (
              <option key={item.id} value={item.nome}>
                {item.nome}
              </option>
            ))
          ) : (
            <option>Não há produtos</option>
          )}
        </select>
      </div>

      <div>
        <label>Cliente</label>
        <select id="vendas" name="vendas">
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

      <div>
        <label>Preço: </label>
        <input
          type="text"
          name="preco"
          id="preco"
          placeholder="Insira o preço"
        />
      </div>

      <div>
        <label>Quantidade: </label>
        <input
          type="text"
          name="quantidade"
          id="quantidade"
          placeholder="Insira a quantidade"
        />
      </div>
    </form>
  )
}
