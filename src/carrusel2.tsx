import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../material/imagenes/Parque utria/1.jpg'
import imagen2 from '../material/imagenes/Parque utria/2.jpg'
import imagen3 from '../material/imagenes/Parque utria/5.jpg'

function Carrusel() {

    return (

        <Carousel className='Carousel' style={{ marginTop: '100px' }}>
            <Carousel.Item className='Carousel.Item' interval={2000}>
                <img
                    className="img-fluid"
                    src={imagen1}
                    alt="First slide"
                />

                <Carousel.Caption className='text-center'>
                    <div className='Carousel.Caption' style={{ height: '120px', border: '1px solid white', borderRadius: '10px', backgroundColor: 'black', margin: '0 auto' }}>
                        <h3>Parque Utría</h3>
                        <p>Lugar con maravillosas playas</p>
                        <p>Más detalles</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='Carousel.Item' interval={2000}>
                <img
                    className="img-fluid"
                    src={imagen2}
                    alt="First slide"
                />

                <Carousel.Caption className='text-center'>
                    <div className='Carousel.Caption' style={{ height: '120px', border: '1px solid white', borderRadius: '10px', backgroundColor: 'black', margin: '0 auto' }}>
                        <h3>Parque Utría</h3>
                        <p>Lugar con maravillosas playas</p>
                        <p>Más detalles</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='Carousel.Item' interval={2000}>
                <img
                    className="img-fluid"
                    src={imagen3}
                    alt="First slide"
                />

                <Carousel.Caption className='text-center'>
                    <div className='Carousel.Caption' style={{ height: '120px', border: '1px solid white', borderRadius: '10px', backgroundColor: 'black', margin: '0 auto' }}>
                        <h3>Parque Utría</h3>
                        <p>Lugar con maravillosas playas</p>
                        <p>Más detalles</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Carrusel;

/* 
 
  import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../material/imagenes/Parque utria/1.jpg'
import imagen2 from '../material/imagenes/Parque utria/2.jpg'
import imagen3 from '../material/imagenes/Parque utria/5.jpg'

function Carrusel() {

    return (

        <Carousel className='Carousel' style={{ width: '1000px', margin: '0 auto', marginTop: '100px', textAlign: 'center' }}>
            <Carousel.Item className='Carousel.Item' interval={2000} style={{ width: '1000px', }}>
                <img
                    className="d-block w-100"
                    src={imagen1}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <div className='Carousel.Caption' style={{ height: '120px', border: '1px solid white', borderRadius: '10px', backgroundColor: 'black', margin: '0 auto' }}>
                        <h3>Parque Utría</h3>
                        <p>Lugar con maravillosas playas</p>
                        <p>Más detalles</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='Carousel.Item' interval={2000} style={{ width: '1000px', }}>
                <img
                    className="d-block w-100"
                    src={imagen2}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <div className='Carousel.Caption' style={{ height: '120px', border: '1px solid white', borderRadius: '10px', backgroundColor: 'black', margin: '0 auto' }}>
                        <h3>Parque Utría</h3>
                        <p>Lugar con maravillosas playas</p>
                        <p>Más detalles</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='Carousel.Item' interval={2000} style={{ width: '1000px', }}>
                <img
                    className="d-block w-100"
                    src={imagen3}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <div className='Carousel.Caption' style={{ height: '120px', border: '1px solid white', borderRadius: '10px', backgroundColor: 'black', margin: '0 auto' }}>
                        <h3>Parque Utría</h3>
                        <p>Lugar con maravillosas playas</p>
                        <p>Más detalles</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Carrusel;

*/