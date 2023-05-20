import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import NavBar from "./componentes/Navbar";
import PiePagina from "./componentes/PiePagina";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Nosotros() {

    useEffect(() => {
        AOS.init({
          duration: 2000, // Duración de las animaciones en milisegundos
         
        });
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        AOS.refresh();
      };
    return (
        <>
             <div className="fondoNosotros"></div>
            <NavBar />
            <Container data-aos="fade-up" style={{ maxWidth: "85%", marginTop:'150px', fontSize:'22px' }}>
                <Row style={{ color: 'white' }}>
                    <Col xs={12} md={12}>
                        <h1 style={{ textAlign: 'center',marginBottom:'50px' }}>Acerca de Nosotros</h1>
                        <div>


                           <p>Bienvenidos a nuestra plataforma dedicada a dar a conocer los maravillosos parques naturales y sitios turísticos de Colombia. Nuestro objetivo es compartir la belleza y diversidad de nuestro país para que puedas explorar y disfrutar de estos increíbles destinos.</p> 
                            <br></br>
                            <h3>Parques Naturales</h3>

                           <p>Algunos de los parques naturales más destacados que puedes visitar en Colombia son:</p> 

                            <p>* Parque Natural Utría</p>
                            <p>* Parque Nacional Natural Tayrona</p>
                            <p>* Parque Nacional Natural El Cocuy</p>
                            <p>* Parque Serranía la Macarena</p>
                             <br></br>
                            <h3>Sitios Turísticos</h3>
                            <p>Además de los parques naturales, hay otros lugares turísticos en Colombia que no puedes dejar de visitar, como:</p>
                            <p>* Minca</p>
                            <p>* Ciudad Perdida</p>
                            <p>* Peñol de Guatapé</p>
                            <p>* Parque Jaime Duque</p>
                            <p>* Valle del Cocora</p>
                            <p>* Desierto de la Tatacoa</p>
                   </div>
                    </Col>
                </Row>
            </Container>
            <PiePagina />
        </>
    )
}

export default Nosotros;