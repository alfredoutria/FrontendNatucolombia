import NavBar from "./componentes/Navbar";
import CrudAgregar from './componentes/CrudAgregar';
import PiePagina from "./componentes/PiePagina";
function Agregar(){
  return(
    <>
    <div className="fondoActualizar"></div>
    <NavBar/>
    <CrudAgregar/>
    <PiePagina/>
    </>
  )
}
export default Agregar;