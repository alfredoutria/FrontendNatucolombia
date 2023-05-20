import NavBar from "./componentes/Navbar";
import TablaLista from "./componentes/TablaLista";
import PiePagina from "./componentes/PiePagina";
function Lista(){

    return(
        <>
        <div className="fondoLista"></div>
        <NavBar/>
        <TablaLista/>
        <PiePagina/>
        </>
    )

}

export default Lista;