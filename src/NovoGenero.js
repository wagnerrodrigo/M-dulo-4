import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName ] = useState('')
    const [success, setSuccess] = useState()
    const onChange = evt =>{
        setName(evt.target.value);
    }
    const save = () =>{
        axios.post('/api/genres',{
            name: name

        })
        .then(res =>{
            setSuccess(true)
        })
    }
    if(success){
        return(
            <Redirect to='/generos'/>
        )
    }
    return(
    <div className='container'>
        <h1> Novo Genêros</h1>
        <form>
            <div className='form-group'>
            <label htmlfor='exampleInputEmail1'>Nome </label>
                <input type='text' className='form-control' value={name} onChange={onChange} id='nome' placeholder='Nome do Genêro'/>
            </div>
            <button type='submit' onClick={save} className='btn btn-primary'> Salvar </button>
        </form>
    </div>
    )
}

export default NovoGenero