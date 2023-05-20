import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Col, Row, Modal } from 'react-bootstrap';
import Url from './Url';


function Comentario() {

    const [show, setShow] = useState(false);
    const [comentario, setComentario] = useState({

        nombre: '',
        correo:'',
        mensaje:''

    });

    const handleClose = () => {
        
        setShow(false)
    }

    const enviar = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }



    const enviarComentario = async () => {
        try {

            const response = await axios.post(Url.comentario, comentario);
            console.log('Enviado ', response);
            console.log('Datos ' + comentario.nombre);
            setComentario({
                nombre: '',
                correo:'',
                mensaje:''
            })
    
            setShow(true);
        } catch (error) {
            console.error(error);
        }


    }

   

    const change = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;

        setComentario((prevComentario) => ({
            ...prevComentario, [id]: value
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
                    <Modal.Title>Comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   Gracias por tu comentario
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Form className='formComentario' onSubmit={enviar}>
                <h3 style={{ textAlign: 'center', color: 'white' }}>Dejanos algún comentario</h3>
               <br></br>
                    <Row>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" as={Col} xs="12" md="12" controlId="nombre" >
                                <Form.Control size='lg' type="text" placeholder="Nombre" value={comentario.nombre} onChange={change}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" as={Col} xs="12" md="12" controlId="correo" >
                                <Form.Control size='lg' type="text" placeholder="Correo electrónico" value={comentario.correo} onChange={change}/>
                            </Form.Group>
                        </Row>
                      
                        <Row className="mb-3">
                            <Form.Group className="mb-3" as={Col} xs="12" md="12" controlId="mensaje" >
                                <Form.Control as="textarea" placeholder="Escriba aquí su comentario" style={{height:'200px'}} value={comentario.mensaje} onChange={change}  />
                            </Form.Group>
                        </Row>
                    </Row>
            

                <div style={{ textAlign: 'center' }}>
                    <Button variant="secondary" style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '10px', }} type="button" onClick={enviarComentario}>
                       Enviar
                    </Button>
                </div>

            </Form>
        </>

    )

}

export default Comentario;