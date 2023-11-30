import React from 'react'
import './style.css'
import { produtos } from '../../mock/produtos'
import { clientes } from '../../mock/clientes'
import axios from 'axios'

export const FormConsulta = () => {
  const [newCliente, setCliente] = React.useState([])
  const [newProduto, setProduto] = React.useState([])
    
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
        const cliente = await axios.get(url);
        setCliente(Object.values(cliente.data));
         
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetch1('https://dot-ease.onrender.com/produto', setProduto);
    fetch2('https://dot-ease.onrender.com/cliente', setCliente);

  }, [])

  return (

    <>

    <div className="consulta-form-content">
    <label>Produto: </label>
    <select id="produto" name="produto">
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

    <label>Cliente: </label>
        <select id="cliente" name="cliente">
          {newCliente.length ? (
            newCliente.map((item) => (
              <option key={item.id} value={item.nome}>
                {item.nome}
              </option>
            ))
          ) : (
            <option>Não há clientes</option>
          )}
        </select>

    </div>

    </>

  )

}
