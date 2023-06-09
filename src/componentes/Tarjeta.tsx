import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
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

function Tarjeta() {
 
  const [lista, setLista] = useState<Informacion[]>([]);
  const [cargar, setCargar] = useState(true);

  useEffect(() => {
      obtenerlista();
  }, []);

  const obtenerlista = async () => {
    try {
      const res = await axios.get(Url.lista);
      setLista(res.data);
      setCargar(false);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
    <div style={{marginTop:'80px'}}>
    { cargar ?(  
          <div className='cargandoMovil'>
            <CircularProgress style={{color:'white'}} />
            <div style={{fontSize:'50', color: 'white'}}>Cargando...</div>
            <div style={{fontSize:'50', color: 'white'}}>Espere un momento por favor</div>
          </div>

          ):(
    lista.map((dato)=>(
    <Card className='tarjeta' key={dato._id}>
      <a href={`/contenido/${dato._id}`} > 
        <Card.Img className='imagenTarjeta' variant='top' src={dato.urlimagen1}  />
      </a>
     
      <a href={`/contenido/${dato._id}`}  style={{textDecoration:'none', color:'black'}}><Card.Body>
        <Card.Title>{dato.nombre}</Card.Title>
        <Card.Text>
        {dato.contenidoCorto}
        </Card.Text>
        <Card.Link href={`/contenido/${dato._id}`} style={{textDecoration:'none', color:'green', fontWeight:'bold', fontSize:'18px'}}>Más detalles</Card.Link>
      </Card.Body>
      </a>
    </Card>
    
    ))

   )}
    </div>
    </>
  );
}

export default Tarjeta;