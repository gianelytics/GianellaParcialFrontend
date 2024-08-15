import { useState } from 'react'
import Card from './Card'
import styles from '../styles/styles.module.css'

const Form = () => {

  const [usuarioInfo, setUsuarioInfo] = useState({
    name: '',
    apellido: '',
    destino: '',
    fecha: ''
  })

  const [error, setError] = useState(false)
  const [showCard, setShowCard] = useState(false)

  const handleName = e => {
    setUsuarioInfo({...usuarioInfo, name: e.target.value})
  }

  const handleApellido = e => {
    setUsuarioInfo({...usuarioInfo, apellido: e.target.value})
  }

  const handleDestino = e => {
    setUsuarioInfo({...usuarioInfo, destino: e.target.value})
  }

  const handleFecha = e => {
    setUsuarioInfo({...usuarioInfo, fecha: e.target.value})
  }

  const submitHandle = e => {
    e.preventDefault()

    if(usuarioInfo.name.trim().length < 3 || usuarioInfo.apellido.trim().length < 6 || usuarioInfo.destino.trim().length < 3 || !usuarioInfo.fecha || new Date(usuarioInfo.fecha).toString() === 'Invalid Date'){
        setError(true)
        setShowCard(false)
    }else{
        setError(false)
        setShowCard(true)
    }
  }

  return (
    <>
    {showCard? <Card usuarioInfo={usuarioInfo} /> : <><form className={styles.formDeViajes} onSubmit={submitHandle}>
        <label htmlFor='name'>Nombre: </label>
        <input type='text' value={usuarioInfo.name} id='name' onChange={handleName}/>
        <label htmlFor='apellido'>Apellido:</label>
        <input type='text' value={usuarioInfo.apellido} id='apellido' onChange={handleApellido}/>
        <label htmlFor='destino'>Indica tu destino:</label>
        <input type='text' value={usuarioInfo.destino} id='destino' onChange={handleDestino}/>
        <label htmlFor='fecha'>Fecha de vuelo</label>
        <input type='date' value={usuarioInfo.fecha} id='fecha' onChange={handleFecha}/>
        <button type='submit' style={{backgroundColor: 'black', color: 'white', marginTop: '20px'}}>Enviar Informacion</button>
    </form></>
    }
    {error? <h3 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h3> : null}
    </>
  )
}

export default Form