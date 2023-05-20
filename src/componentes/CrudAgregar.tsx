import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button, Form, Col, Row, Modal } from 'react-bootstrap';
import Url from './Url';


function Crud() {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [agregar, setAgregar] = useState({

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

    const enviar = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }



    const enviarAgregar = async () => {
        try {

            const response = await axios.post(Url.agregar, agregar);
            console.log('Enviado ', response);
            console.log('Datos ' + agregar.nombre);
            setShow(true);
        } catch (error) {
            console.error(error);
        }


    }

    const redirigir = ()=>{
        navigate('/listado');
    }

    const change = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;

        setAgregar((prevAgregar) => ({
            ...prevAgregar, [id]: value
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
                    <Modal.Title>Guardando</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   Guardado Exitosamente
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={redirigir}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Form className='form' style={{ maxWidth: '100%', width: '70%' }} onSubmit={enviar}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Agregar</h2>
               
                    <Row>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="nombre" onChange={change}>
                                <Form.Control size='lg' type="text" placeholder="Nombre" />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="urlvideo" onChange={change}>
                                <Form.Control size='lg' type="text" placeholder="Urlvideo:" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" as={Col} xs="12" md="4" controlId="ubicacion" onChange={change}>
                                <Form.Control size='lg' as="textarea" placeholder="Ubicación" />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} xs="12" md="4" controlId="temperatura" onChange={change}>
                                <Form.Control size='lg' as="textarea" placeholder="Temperatura" />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} xs="12" md="4" controlId="comollegar" onChange={change}>
                                <Form.Control size='lg' as="textarea" placeholder="Como Llegar" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="urlimagen1" onChange={change}>
                                <Form.Control size='lg' type="text" placeholder="Url Imagen N°1" />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="urlimagen2" onChange={change}>
                                <Form.Control size='lg' type="text" placeholder="Url Imagen N°2" />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="urlimagen3" onChange={change}>
                                <Form.Control size='lg' type="text" placeholder="Url Imagen N°3" />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="urlimagen4" onChange={change}>
                                <Form.Control size='lg' type="text" placeholder="Url Imagen N°4" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" as={Col} xs="12" md="12" controlId="contenidoCorto">
                                <Form.Control as="textarea" placeholder="Escriba alguna frase corta acerca del contenido" onChange={change} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group className="mb-3" as={Col} xs="12" md="12" controlId="contenido" onChange={change} >
                                <Form.Control as="textarea" placeholder="Escriba su contenido aquí" />
                            </Form.Group>
                        </Row>
                    </Row>
            

                <div style={{ textAlign: 'center' }}>
                    <Button variant="success" style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '10px', }} type="button" onClick={enviarAgregar}>
                        Agregar
                    </Button>
                </div>

            </Form>
        </>

    )

}

export default Crud;