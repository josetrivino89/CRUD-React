import React from 'react'
import Cards from './Cards'

function Listado() {
    const listado =[{id:1234,titulo:"Locos por mary",descripcion:"La pelicula ma tiempo de la historia"},{id:1235,titulo:"Locos por Tary",descripcion:"La pelicula meno tiempo de la historia"}]


  return (
    <>
    {listado.map(peli=>(
        <Cards key={peli.id}
         pelicula = {peli}
        />

    ))}
    </>
  )
}

export default Listado