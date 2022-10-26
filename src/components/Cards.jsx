import React from 'react'

function Cards({pelicula}) {
  return (
    <article className="peli-item">
                <h3 className="title">{pelicula.titulo}</h3>
                <p className="description">{pelicula.descripcion}</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
  )
}

export default Cards