import React from 'react'
import './style.css'

export const FormCliente = () => {
  const [newClient, setNewClient] = React.useState({
    nome: '',
    cnpj: '',
    telefone: '',
    email: '',
    bairro: '',
    logradouro: '',
  })

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setNewClient({ ...newClient, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newClient)
    alert('Cliente cadastrada com sucesso!')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='form-cliente-container'>
      <div className='form-cliente-content'>
        <label>Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={newClient.nome}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className='form-cliente-content'>
        <label>CNPJ:</label>
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          value={newClient.cnpj}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className='form-cliente-content'>
        <label>Telefone:</label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          value={newClient.telefone}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className='form-cliente-content'>
        <label>E-mail:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={newClient.email}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className='form-cliente-content'>
        <label>Bairro:</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          value={newClient.bairro}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className='form-cliente-content'>
        <label>Logradouro:</label>
        <input
          type="text"
          id="logradouro"
          name="logradouro"
          value={newClient.logradouro}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <button type="submit" className='form-cliente-btn'>Cadastrar</button>
    </form>
  )
}
