
const Card = ({usuarioInfo}) => {
  return (
    <div style={{border: '1px solid black', padding: '15px'}}>
        <h3>Hola {usuarioInfo.name} {usuarioInfo.apellido}</h3>
        <h3>Acabas de reservar un viaje a: {usuarioInfo.destino}</h3>
        <h3>Tu fecha de vuelo esta programada para: {usuarioInfo.fecha}</h3>
    </div>
  )
}

export default Card