import React from 'react'
import './style.css'

export const FormCategoria = () => {
  const [newCategoria, setNewCategoria] = React.useState({
    nome: '',
  })

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setNewCategoria({ ...newCategoria, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newCategoria)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='form-categoria-container'>
      <div className='form-categoria-content'>
        <label>Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={newCategoria.nome}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <button type="submit" className='form-categoria-btn'>Cadastrar</button>
    </form>
  )
}
