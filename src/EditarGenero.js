import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero = (match) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)


    useEffect(() =>{
         axios
            .get('/api/genres/'  )
            .then(res =>{
                setName(res.data.name)
            })
    },[])


    const onChange = evt => {
        setName(evt.target.value);
    }
    const save = () => {
        axios
            .put('/api/genres' + match.params.id, {
                name
            })
            .then(res => {
                setSuccess(true)
            })
    }
    if (success) {
        return (
            <Redirect to='/genero' />
        )
    }
    return (
        <div className='container'>
            <h1> Editar Genêros</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Nome </label>
                    <input type='text' className='form-control' value={name} onChange={onChange} id='nome' placeholder='Editar o Genêro' />
                </div>
                <button type='submit' onClick={save} className='btn btn-primary'> Salvar </button>
            </form>
        </div>
    )
}

export default EditarGenero