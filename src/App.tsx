import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './Principal';
import Contenido from './Contenido';
import Listado from './Listado';
import Agregar from './Agregar';
import Actualizar from './Actualizar';
import Eliminar from './Eliminar';
import Nosotros from './Nosotros';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/contenido/:id' element={<Contenido />} />
          <Route path='/listado' element={<Listado />} />
          <Route path='/agregar' element={<Agregar />} />
          <Route path='/actualizar/:id' element={<Actualizar />} />
          <Route path='/eliminar/:id' element={<Eliminar />} />
          <Route path='/nosotros' element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;

