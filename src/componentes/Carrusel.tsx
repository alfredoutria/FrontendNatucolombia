import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

    useEffect(() => {
        obtenerlista();
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
        <Carousel className='Carousel'>
            {lista.map((dato) => (
            <Carousel.Item className='Carousel.Item' interval={2000} key={dato._id}>
                <div className='d-flex align-items-center justify-content-center'>
                    <img
                        className="img-fluid"
                        src={dato.urlimagen1}
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption className='text-center'>
                    <div className='CarouselCaption' >
                        <h3>{dato.nombre}</h3>
                        <h5 className="my-2">{dato.contenidoCorto}</h5>
                        <h5 className='detalle'><Link className='link' to={`/contenido/${dato._id}`}>Más detalles</Link> </h5>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
              ))}
        </Carousel>
    )
}

export default Carrusel;
