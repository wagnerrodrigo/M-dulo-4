import React, { useState, useEffect } from 'react'
import Header from './Header'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Home = () =>{
  return(
    <h1>Home </h1>
  )
}



function App() {
  const [data, setData] = useState({})
  useEffect(() =>{
    axios.get('/api').then(res =>{
      setData(res.data)
    })
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos/novo' exact component={NovoGenero} />
        <Route path='/generos' exact component={Generos} />
        <p>{JSON.stringify(data)}</p>
      </div>
    </Router>
  );
}

export default App;