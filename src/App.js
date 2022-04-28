import './App.css';
import encabezado from './img/encabezado.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

let contador = 0;

function App() {

  let [numClick, setNumClick] = useState(0);

  const manejarClick = () => {
    console.log('clixk')
    contador=contador+1;
    setNumClick( "kev-"+contador );
  }

  const reiniciarContador = () => {
    console.log('reiniciar')
    setNumClick(0);
  }

  return (
    <div className="App">

      <div className="app-logo-contenedor">
        <img 
          className="app-logo" 
          src={encabezado} 
          alt="Logo app contador" />
      </div>

      <div className="contenedor-principal">
        <Contador 
          numClick={ numClick } />

        <Boton 
          texto='Incrimentar'
          esBotonClick={true}
          manejarClick={manejarClick} />

        <Boton 
          texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador} />
      </div>

    </div>
  );
}

export default App;
