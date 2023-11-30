import React from 'react'
import './style.css'

export const FormProduto = () => {
  const [newProduto, setNewProduto] = React.useState({
    nome: '',
    preco: '',
    classe: '',
    cor: '',
    espessura: '',
  })

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setNewProduto({ ...newProduto, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newProduto)
    alert('Produto cadastrado com sucesso!')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='form-produto-container'>
      <div className='form-produto-content'>
        <label>Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={newProduto.nome}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className='form-produto-content'>
        <label>Preço:</label>
        <input
          type="text"
          id="preco"
          name="preco"
          value={newProduto.preco}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className='form-produto-content'>
        <label>Classe:</label>
        <input
          type="text"
          id="classe"
          name="classe"
          value={newProduto.classe}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className='form-produto-content'>
        <label>Cor:</label>
        <input
          type="text"
          id="cor"
          name="cor"
          value={newProduto.cor}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className='form-produto-content'>
        <label>Espessura:</label>
        <input
          type="text"
          id="espessura"
          name="espessura"
          value={newProduto.espessura}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <button type="submit" className='form-produto-btn'>Cadastrar</button>
    </form>
  )
}
