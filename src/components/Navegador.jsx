import React from 'react'

function Navegador() {
  return (
    <>
    <header className="header">
    <div className="logo">
      <div className="play"></div>
    </div>

    <h1>MisPelis</h1>
  </header>

  <nav className="nav">
    <ul>
      <li>
        <a href="#">Inicio</a>
      </li>
      <li>
        <a href="#">Peliculas</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Contacto</a>
      </li>
    </ul>
  </nav>
  </>
  )
}

export default Navegador