import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Badge } from 'reactstrap'

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

    // custom header
    const masterHeader = {
        heigth: '50vh',
        minHeigth: '500px',
        backgroundImage: `url('${data.background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-reapeat'
    }

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
    
    <div>
        <header style={masterHeader}>
            <div className='h-100' style={{ background: 'rgba(0,0,0,0.7)'}}>
                <div className='h-100 container'>
                    <div className='row h-100 align-items-center'>
                        <div className='col-3'>
                            <img alt={data.name} className='img-fluid img-thumbnail' src={data.poster}/>
                        </div>
                        <div className='col-8'>
                            <h1 className='font-weigth-light text-white'>{data.name}</h1>
                            <div className='lead texte-white'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

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

    </div>
    )
}

export default InfoSerie