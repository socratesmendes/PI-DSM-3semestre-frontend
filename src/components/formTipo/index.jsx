import React from 'react'
import './style.css'

export const FormTipo = () => {
    const [newTipo, setNewTipo] = React.useState({
        nome:'',
    })

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setNewTipo ({ ...newTipo, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newTipo)
        alert('Tipo cadastrado com sucesso!')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='form-tipo-container'>
            <div className='form-tipo-content'>
                <label>Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={newTipo.nome}
                    onChange={(e) => handleChangeInput(e)}
                />
            </div>
            <button type='submit' className='form-tipo-btn'>Cadastrar</button>
        </form>
    )
}