import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

function NavBar() {

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

        <>
            <Navbar className='navbar' fixed="top" expand="lg">
                <Navbar.Brand href="/">NatuColombia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navIzquierda">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        
                        <NavDropdown className='NavDropdown' title="Lugares turisticos" id="navbarScrollingDropdown">
                        {lista.map((dato) => (
                            <NavDropdown.Item className='NavItem' as={Link} to={`/contenido/${dato._id}`} key={dato._id}>{dato.nombre}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/nosotros"}>Acerca de nosotros</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
           

        </>
    )
}


export default NavBar

/*

  <div className="navDerecha">
                <div className="SubnavDerecha"><a href="#home"><img src={facebook} style={{ width: '40px' }} /></a></div>
                <div className="SubnavDerecha"><a href="#link"><img src={instagram} style={{ width: '40px' }} /></a></div>
                <div className="SubnavDerecha"><a href="#link"><img src={youtube} style={{ width: '40px' }} /></a></div>
            </div>
*/