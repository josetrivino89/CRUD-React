import AgregarPelicula from "./components/AgregarPelicula";
import Buscador from "./components/Buscador";
import Listado from "./components/Listado";
import Navegador from "./components/Navegador";

function App() {
  return (
    <div className="layout">
      <Navegador/>
      <section id="content" className="content">
        <Listado />
      </section>
      <aside className="lateral">
        <Buscador />
        <AgregarPelicula />
      </aside>
      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
