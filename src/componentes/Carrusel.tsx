import {Carousel, Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Url from './Url';

interface Informacion {
    _id: string;
    nombre: string,
    urlvideo: string,
    ubicacion: string,
    temperatura: string,
    comollegar: string,
    urlimagen1: string,
    urlimagen2: string,
    urlimagen3: string,
    urlimagen4: string,
    contenidoCorto: string,
    contenido: string
  }


function Carrusel() {

    const [lista, setLista] = useState<Informacion[]>([]);
    const [cargar, setCargar] = useState(true);

    useEffect(() => {
        obtenerlista();
        setCargar(false);
    }, []);
  
    const obtenerlista = async () => {
      try {
        const res = await axios.get(Url.lista);
        setLista(res.data);
        
      } catch (error) {
        console.error(error);
      }
    }

    return (
      <>
        <Carousel className='Carousel'>
          { cargar ?(  
          <div style={{textAlign:'center'}}>
            <CircularProgress style={{color:'white'}} />
            <div style={{fontSize:'50', color: 'white'}}>Cargando imagenes y datos</div>
          </div>

          ):(
            lista.map((dato) => (
            <Carousel.Item className='Carousel.Item' interval={2000} key={dato._id}>
                <div className='d-flex align-items-center justify-content-center'>
                   <a className='link' href={`/contenido/${dato._id}`}><img
                        className="img-fluid"
                        src={dato.urlimagen1}
                        alt="First slide"
                    /></a> 
                </div>
                <Carousel.Caption className='text-center'>
                    <div className='CarouselCaption' >
                        <h3>{dato.nombre}</h3>
                        <h5 className="my-2">{dato.contenidoCorto}</h5>
                        <h5 className='detalle'><a className='link' href={`/contenido/${dato._id}`}>Más detalles</a> </h5>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
              ))

              )}
        </Carousel><br></br>
        <Container className='containerCarrusel' style={{color: 'white', maxWidth:'100%'}}>
          <Row>
            <Col xs={12} md={4}>
            <h2 style={{textAlign:'center',marginBottom:'30px'}} >Biodiversidad</h2>
            <p>
            Especies:<br></br> 
            Colombia alberga una gran cantidad de especies de flora y fauna, 
            como el cóndor de los Andes, el jaguar, el oso de anteojos, el delfín rosado, el colibrí y la orquídea.
            </p>
            <p>
            Ecosistemas:<br></br> 
            Colombia cuenta con una gran variedad de ecosistemas, incluyendo la Amazonía,
            los Andes, la región del Chocó biogeográfico, los páramos, los manglares,
            los bosques tropicales, los corales del Caribe, entre otros. </p>
            <p>Áreas protegidas: </p>
            <p>
            El país cuenta con una extensa red de áreas protegidas que abarcan parques nacionales naturales, 
            reservas forestales, santuarios de fauna y flora, entre otros. 
            </p>
            Megadiversidad:<br></br> 
            <p> Colombia es considerada uno de los países megadiversos del mundo, 
            lo que significa que alberga una cantidad significativa de diversidad biológica en relación con su extensión territorial. </p>
            </Col>

            <Col xs={12} md={4}>
            <h2  style={{textAlign:'center',marginBottom:'30px'}}>Medio Ambiente</h2>
            <p>Bosques tropicales:<br></br> 
            Colombia alberga una gran cantidad de especies de flora y fauna, 
            como el cóndor de los Andes, el jaguar, el oso de anteojos, el delfín rosado, el colibrí y la orquídea.
            </p>
            <p>Páramos: <br></br>
            Los páramos son ecosistemas de alta montaña que se encuentran en los Andes colombianos.
            Son considerados uno de los ecosistemas más importantes del país debido a su rol en la regulación del agua,
            la protección contra deslizamientos de tierra y su riqueza en especies endémicas.
            </p>
            Diversidad marina: <br></br> 
            <p> a costa caribeña y pacífica de Colombia alberga una gran diversidad de ecosistemas marinos,
              incluyendo arrecifes de coral, manglares, estuarios y praderas submarinas. Estos ecosistemas son hábitats importantes para una amplia gama de especies marinas y contribuyen a la pesca, 
             el turismo y la protección costera. 
             </p> 
             <p>
            Recursos hídricos: <br></br> 
            Colombia cuenta con una gran cantidad de recursos hídricos, incluyendo ríos, 
            lagos y lagunas. Estos recursos son fundamentales para el abastecimiento de agua potable, 
            la generación de energía hidroeléctrica y
            el mantenimiento de los ecosistemas acuáticos.
            </p>
             
              </Col>
            <Col x s={12} md={4}>
            <h2 style={{textAlign:'center',marginBottom:'30px'}}>Regiones Naturales</h2>
            <p>Región Caribe:<br></br> 
            Comprende la costa norte del país, bañada por el Mar Caribe.
            Se caracteriza por playas paradisíacas, manglares,
            arrecifes de coral y una gran riqueza cultural.
            En esta región se encuentran ciudades como Cartagena, Barranquilla y Santa Marta.</p>
            <p>Región Andina: <br></br>
            Esta región abarca la cadena montañosa de los Andes, que atraviesa el país de sur a norte.
            Se caracteriza por su topografía montañosa, valles fértiles y una amplia gama de microclimas. 
            En esta región se encuentran ciudades importantes como Bogotá, Medellín y Cali.
            </p>
            
            <p>Región Pacífica:  <br></br>  
              Ubicada en la costa suroccidental del país, esta región es conocida por su selva tropical, 
              manglares y una gran biodiversidad marina. 
              Es hogar de comunidades afrodescendientes que preservan tradiciones culturales únicas.
             </p> 
             <p>
             Región Orinoquía: <br></br> 
             Situada en el oriente del país, esta región abarca la extensa llanura del río Orinoco. 
             Se caracteriza por sus extensas sabanas,
             ríos caudalosos y una rica diversidad de fauna, incluyendo especies como el jaguar y el manatí.
            </p>

            <p>
            Región Amazónica: <br></br> 
             Ubicada en el sur del país, esta región incluye parte de la selva amazónica,
             una de las regiones con mayor biodiversidad del mundo.
            Es hogar de una gran variedad de especies de flora y fauna, 
             ríos caudalosos y extensas áreas de bosque tropical.
             </p>

            <p>Región Amazónica:  <br></br>  
              Ubicada en la costa suroccidental del país, esta región es conocida por su selva tropical, 
              manglares y una gran biodiversidad marina. 
              Es hogar de comunidades afrodescendientes que preservan tradiciones culturales únicas.
             </p> 
            
            </Col>
          </Row>
        </Container>
        </>

    )
}

export default Carrusel;
