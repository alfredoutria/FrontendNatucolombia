import NavBar from './componentes/Navbar';
import Carrusel from './componentes/Carrusel';
import Tarjeta from './componentes/Tarjeta';
import PiePagina from './componentes/PiePagina';
import video from './material/video.mp4';

const Principal = () => {

    return(
        <div className='body'>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
        <NavBar/>
        <Carrusel/>
        <Tarjeta/>
        <PiePagina/>
        </div>
 
    )

}

export default Principal;