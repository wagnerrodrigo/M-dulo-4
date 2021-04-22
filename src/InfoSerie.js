import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const InfoSerie = ({ match }) => {
    const [name, setName ] = useState('')
    const [success, setSuccess] = useState(false)
    const [ data, setData ] = useState({})
    useEffect(() => {
        axios
        .get('/api/series/' + match.params.id)
        .then(res =>{
            setData(res.data)
        })
    },[])
    const onChange = evt =>{
        setName(evt.target.value);
    }
    const save = () =>{
        axios
        .post('/api/series',{
            name
        })
        .then(res =>{
            setSuccess(true)
            console.log(res)
        })
    }
    if(success){
        return(
            <Redirect to='/series'/>
        )
    }
    return(
    <div className='container'>
        <h1> Nova Série</h1>
        <pre>{JSON.stringify(data)}</pre>
        <form>
            <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Nome </label>
                <input type='text' className='form-control' value={name} onChange={onChange} id='nome' placeholder='Nome da Série'/>
            </div>
            <button type='submit' onClick={save} className='btn btn-primary'> Salvar </button>
        </form>
    </div>
    )
}

export default InfoSerie