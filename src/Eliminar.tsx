import NavBar from "./componentes/Navbar";
import CrudEliminar from './componentes/CrudEliminar';
import PiePagina from "./componentes/PiePagina";
function Eliminar(){
  return(
    <>
    <div className="fondoEliminar"></div>
    <NavBar/>
    <CrudEliminar/>
    <PiePagina/>
    </>
  )
}
export default Eliminar;