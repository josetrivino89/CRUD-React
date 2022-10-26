import {useState} from "react";

function AgregarPelicula() {
    const [peli, setpeli] = useState({
        titulo:"",
        descripcion:""
    })
    const {titulo, descripcion } = peli
    const getDatosForm = (e)=>{
        e.preventDefault();
        let titulo = e.target.name.value
        let descripcion = e.target.name.value
        let peliculaNueva = {
            titulo:titulo,
            descripcion:descripcion
        }
        console.log(peliculaNueva); //minuto 47 clase 24-10-2022

    }
  return (
    <div className="add">
      <h3 className="title">Añadir pelicula</h3>
      <form onSubmit={getDatosForm}>
        <input type="text" id="title" placeholder="Titulo" name="titulo"/>
        <textarea id="description" placeholder="Descripción" name="descripcion"></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
}

export default AgregarPelicula;
