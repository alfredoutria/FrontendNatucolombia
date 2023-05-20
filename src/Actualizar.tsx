import NavBar from "./componentes/Navbar";
import CrudActualizar from './componentes/CrudActualizar';
import PiePagina from "./componentes/PiePagina";
function Actualizar(){
  return(
    <>
    <div className="fondoActualizar"></div>
    <NavBar/>
    <CrudActualizar/>
    <PiePagina/>
    </>
  )
}
export default Actualizar;