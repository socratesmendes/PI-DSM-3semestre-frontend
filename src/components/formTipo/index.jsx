import React from 'react'

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
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={newTipo.nome}
                    onChange={(e) => handleChangeInput(e)}
                />
            </div>
            <button type='submit'>Cadastrar</button>
        </form>
    )
}