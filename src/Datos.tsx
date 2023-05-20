import NavBar from "./componentes/Navbar";
import Crud from "./componentes/CrudActualizar";
import PiePagina from "./componentes/PiePagina";

function Datos(){


  return (
    <>
    <div className="fondoCrud"></div>
    <NavBar/>
    <Crud/>
    <PiePagina/>
    </>
   
  );
}

export default Datos;
