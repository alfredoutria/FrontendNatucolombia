import {Table, Button} from 'react-bootstrap';
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

function TablaLista() {

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
    <div className="text-center" style={{marginTop:'150px'}}>
     <Button variant="primary" ><a href={'/agregar'} style={{color:'white', fontWeight:'bold', textDecoration:'none'}}>Agregar</a></Button>
    </div>
    
      <div className="table-container" style={{marginTop:'-15px'}}>
        <Table striped bordered hover responsive variant="dark" style={{ maxWidth: '100%', textAlign:'center', fontSize: '20px', marginTop: '50px' }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Acción Actualizar</th>
              <th>Acción Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {lista.map((dato) => (
              <tr key={dato._id}>
                <td>{dato._id}</td>
                <td>{dato.nombre}</td>
                <td><a style={{textDecoration:'none', fontWeight:'bold'}} href={`/actualizar/${dato._id}`}>Actualizar</a></td>
                <td><a style={{textDecoration:'none', fontWeight:'bold'}} href={`/eliminar/${dato._id}`}>Eliminar</a></td>
              </tr>
            ))}
          </tbody>

        </Table>
      </div>
    </>
  );
}

export default TablaLista;