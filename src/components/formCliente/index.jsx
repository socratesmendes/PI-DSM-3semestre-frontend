import React from 'react'

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
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={newClient.nome}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <label>CNPJ:</label>
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          value={newClient.cnpj}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          value={newClient.telefone}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <label>E-mail:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={newClient.email}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <label>Bairro:</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          value={newClient.bairro}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <label>Logradouro:</label>
        <input
          type="text"
          id="logradouro"
          name="logradouro"
          value={newClient.logradouro}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  )
}
