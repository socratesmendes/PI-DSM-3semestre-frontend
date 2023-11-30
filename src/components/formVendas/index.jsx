import React from 'react'
import { produtos } from '../../mock/produtos'
import { clientes } from '../../mock/clientes'
import axios from 'axios'
import './style.css'

export const FormVendas = () => {
  const [newProduto, setProduto] = React.useState([])
  const [newClientes, setClientes] = React.useState([])

  const [createNovaVenda, setCreateNovaVenda] = React.useState({
    produto: '',
    cliente: '',
    quantidade: '',
  })

  React.useEffect(() => {

    const fetch1 = async (url, setProduto) =>{
      try {
        const produto = await axios.get(url);
        setProduto(Object.values(produto.data));
         
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    const fetch2 = async (url, setCliente) =>{
      try {
        const clientes = await axios.get(url);
        setCliente(Object.values(clientes.data));
         
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetch1('https://dot-ease.onrender.com/produto', setProduto);
    fetch2('https://dot-ease.onrender.com/cliente', setClientes);

  }, [])

  const handleGetVenda = (e) => {
    const { name, value } = e.target
    setCreateNovaVenda({ ...createNovaVenda, [name]: value })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosDoFormulario((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };


  const handleSubmit = async (event) =>{
    event.preventDefault();

    const struct = {
      idProduto, 
      idCompra,
      qntd
    }

    const url = 'https://dot-ease.onrender.com/cliente/venda';

    const resp = await fetch(url, {
      method: 'POST',
      Headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createNovaVenda)
      })
  }


  const handleSubmitVenda = (e) => {
    e.preventDefault()
    console.log(createNovaVenda)
    alert('Venda cadastrada com sucesso!')
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
