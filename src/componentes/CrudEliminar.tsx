import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Url from './Url';



function Crud() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
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

    const handleClose = () => setShow(false);

    useEffect(() => {
        async function obtenerLista() {
            try {
                const response = await axios.get(`${Url.listaId}/${id}`);
                setDato(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerLista();
        return;
    }), []




    const enviarEliminar = async () => {
        // Lógica para eliminar los datos
        try {
            const response = await axios.delete(`${Url.eliminar}/${id}`);
            console.log('Eliminado ', response);
            setShow(true);
        } catch (error) {
            console.error(error);
        }
    };

    const redirigir = ()=>{
        navigate('/listado');
    }

    const change = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;

        setDato((prevEliminar) => ({
            ...prevEliminar, [id]: value
        }));




    }


    return (

        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   Eliminado Exitosamente
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={redirigir}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Form className='form' style={{ maxWidth: '100%', width: '70%' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Eliminar</h2>

                <Row  >
                    <Row className="mb-3">
                        <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="nombre" >
                            <Form.Control size='lg' type="text" placeholder="Nombre" value={dato.nombre} onChange={change} />
                        </Form.Group>

                        <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="urlvideo" >
                            <Form.Control size='lg' type="text" placeholder="Urlvideo:" value={dato.urlvideo} onChange={change} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="mb-3" as={Col} xs="12" md="4" controlId="ubicacion" >
                            <Form.Control size='lg' as="textarea" placeholder="Ubicación" value={dato.ubicacion} onChange={change} />
                        </Form.Group>

                        <Form.Group className="mb-3" as={Col} xs="12" md="4" controlId="temperatura" >
                            <Form.Control size='lg' as="textarea" placeholder="Temperatura" value={dato.temperatura} onChange={change} />
                        </Form.Group>

                        <Form.Group className="mb-3" as={Col} xs="12" md="4" controlId="comollegar" >
                            <Form.Control size='lg' as="textarea" placeholder="Como Llegar" value={dato.comollegar} onChange={change} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="urlimagen1" >
                            <Form.Control size='lg' type="text" placeholder="Url Imagen N°1" value={dato.urlimagen1} onChange={change} />
                        </Form.Group>

                        <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="urlimagen2" >
                            <Form.Control size='lg' type="text" placeholder="Url Imagen N°2" value={dato.urlimagen2} onChange={change} />
                        </Form.Group>

                        <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="urlimagen3" >
                            <Form.Control size='lg' type="text" placeholder="Url Imagen N°3" value={dato.urlimagen3} onChange={change} />
                        </Form.Group>

                        <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="urlimagen4" >
                            <Form.Control size='lg' type="text" placeholder="Url Imagen N°4" value={dato.urlimagen4} onChange={change} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="mb-3" as={Col} xs="12" md="12" controlId="contenidoCorto" >
                            <Form.Control as="textarea" placeholder="Escriba alguna frase corta acerca del contenido" value={dato.contenidoCorto} onChange={change} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="mb-3" as={Col} xs="12" md="12" controlId="contenido"  >
                            <Form.Control as="textarea" placeholder="Escriba su contenido aquí" value={dato.contenido} onChange={change} />
                        </Form.Group>
                    </Row>
                </Row>


                <div style={{ textAlign: 'center' }}>
                    <Button variant="danger" style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '10px', marginLeft: '10px' }} type="button" onClick={enviarEliminar}>
                        Eliminar
                    </Button>
                </div>

            </Form>


        </>

    )

}

export default Crud;