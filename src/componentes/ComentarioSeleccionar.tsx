import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Button, Form, Col, Row, Modal } from 'react-bootstrap';
import Url from './Url';


interface Country {
    country_name: string;
}

interface City {
    city_name: string;
}

function Comentario() {

    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [cities, setCities] = useState<City[]>([]);
    const [show, setShow] = useState(false);
    const [comentario, setComentario] = useState({

        nombre: '',
        ciudad: '',
        pais: '',
        mensaje: ''

    });


    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const token = 'cGNORJ5j3UuL2Ye9hGf-oU69zCkimLtonG3xVhobLqToyN9rYwn-tlQKmX-hWSauO2U';
                const response = await axios.get<Country[]>('https://www.universal-tutorial.com/api/countries', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json'
                    }
                });
                setCountries(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCountries();
    }, []);

    const handleCountryChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry = event.target.value;
        setSelectedCountry(selectedCountry);

        try {
            const token = 'cGNORJ5j3UuL2Ye9hGf-oU69zCkimLtonG3xVhobLqToyN9rYwn-tlQKmX-hWSauO2U';
            const response = await axios.get<City[]>(`https://www.universal-tutorial.com/api/countries/${selectedCountry}/cities`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });
            setCities(response.data);
            
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = () => setShow(false);

    const enviar = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }



    const enviarComentario = async () => {
        try {

            const response = await axios.post(Url.comentario, comentario);
            console.log('Enviado ', response);
            console.log('Datos ' + comentario.nombre);
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

                <Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" as={Col} xs="12" md="6" controlId="nombre" onChange={change}>
                            <Form.Control size='lg' type="text" placeholder="Nombre" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} xs="12" md="12" controlId="countrySelect" >
                        <Form.Label>Select Country</Form.Label>
                        <Form.Control as="select" onChange={handleCountryChange as any}>
                            <option value="">Select a country</option>
                            {countries.map((country: Country) => (
                                <option key={country.country_name} value={country.country_name}>
                                    {country.country_name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    {selectedCountry && (
                        <Form.Group as={Col} xs="12" md="12"s controlId="citySelect">
                            <Form.Label>Select City</Form.Label>
                            <Form.Control as="select">
                                {cities.map((city: City) => (
                                    <option key={city.city_name} value={city.city_name}>
                                        {city.city_name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    )}
                   </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" as={Col} xs="12" md="12" controlId="mensaje" onChange={change} >
                            <Form.Control as="textarea" placeholder="Escriba aquí su comentario" />
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