import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavBar from './componentes/Navbar';
import Comentario from './componentes/Comentario';
import PiePagina from "./componentes/PiePagina";
import axios from 'axios';
import Url from './componentes/Url';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Contenido() {

  const { id } = useParams();
  const [dato, setDato] = useState({
    nombre: '',
    urlvideo: '',
    ubicacion: '',
    temperatura: '',
    comollegar: '',
    urlimagen1: '',
    urlimagen2: '',
    urlimagen3: '',
    urlimagen4: '',
    contenidoCorto: '',
    contenido: '',
  });


  useEffect(() => {
    AOS.init({
      duration: 3000, // Duración de las animaciones en milisegundos

    });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    AOS.refresh();
  };


  useEffect(() => {
    const obtenerLista = async () => {
      try {
        const response = await axios.get(`${Url.listaId}/${id}`);
        setDato(response.data);

      } catch (error) {
        console.log(error);
        console.log('Mis Datos: ' + `${Url.listaId}/${id}`);
      }
    };
    obtenerLista();
  }, [id])




  return (
    <div className="bodyContenido">
      <div className="fondo"></div>
      <NavBar />
      <Container  data-aos="fade-up" fluid style={{ maxWidth: "95%", marginTop:'130px', marginBottom:'100px' }}>
        <Row style={{ color: 'white' }}>
          <Col xs={12} md={6}>
            <h1 style={{ textAlign: 'center' }}>{dato.nombre}</h1>
            <p>{dato.contenido}</p>
          </Col>
          <Col xs={12} md={6}>
            <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${dato.urlvideo}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container className='escritorioContainer'>
        <Row >
          <Col  data-aos="zoom-in" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen1} alt="imagen" />
          </Col>
          <Col  data-aos="zoom-in" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen2} alt="imagen" />
          </Col>
        </Row>
      </Container>
       
      <Container className='movilContainer'>
        <Row >
          <Col  data-aos="flip-right" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen1} alt="imagen" />
          </Col>
          <Col data-aos="flip-left" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen2} alt="imagen" />
          </Col>
        </Row>
      </Container>



      <Container style={{ maxWidth: "95%", marginTop:'30px' }}>
        <Row style={{ textAlign: 'center', color: 'white' }}>
          <Col data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" xs={12} md={4}>
            <h2>Ubicación</h2>
            <p style={{textAlign:'left'}}>{dato.ubicacion}</p>
          </Col>
          <Col data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" xs={12} md={4}>
            <h2>Temperatura</h2>
            <p style={{textAlign:'left'}}>{dato.temperatura}</p>
          </Col>
          <Col data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" xs={12} md={4}>
            <h2>Como llegar?</h2>
            <p style={{textAlign:'left'}}>{dato.comollegar}</p>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container className='escritorioContainer'>
        <Row>
          <Col  data-aos="zoom-in" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen3}  alt="imagen" />
          </Col>
          <Col  data-aos="zoom-in" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen4}  alt="imagen" />
          </Col>
        </Row>
      </Container>

      <Container className='movilContainer' >
        <Row >
          <Col  data-aos="flip-right" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen3}  alt="imagen" />
          </Col>
          <Col  data-aos="flip-left" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen4}  alt="imagen" />
          </Col>
        </Row>
      </Container>
      <Comentario />
      <PiePagina />
    </div>

  )

}

export default Contenido;


/*

 <Container className='movilContainer' style={{ maxWidth: "95%" }}>
        <Row >
          <Col  data-aos="fade-right" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen1} alt="imagen" />
          </Col>
          <Col data-aos="fade-left" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen2} alt="imagen" />
          </Col>
        </Row>
      </Container>
      



      <Container className='movilContainer' style={{ maxWidth: "95%" }}>
        <Row data-aos="fade-right" >
          <Col  data-aos="zoom-in" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen3}  alt="imagen" />
          </Col>
          <Col  data-aos="fade-left" xs={12} md={6}>
            <img className='columnaImagen' src={dato.urlimagen4}  alt="imagen" />
          </Col>
        </Row>
      </Container>

*/