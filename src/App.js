import './App.css';
import Boton from './componentes/Boton';
import counterClicLogo from './imagenes/logo-cs.png';

function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }

  return (
    <div className='App'>
      <div className='counterclic-logo-contenedor'>
        <img 
          className='counterclic-logo'
          src={counterClicLogo}
          alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Boton
          texto='Clic'
          esBotonClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
