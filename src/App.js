import './App.css';
import carrito from './imagenes/carrito.jpg';

function App() {
  return (
    <header>
  <div> Indumentaria S.A. </div>
  <nav>
    <a href='#'>Hombres</a>
    <a href='#'>Mujeres</a>
    <a href='#'>Niños</a>
  </nav>
  <img src={carrito} alt="carrito de supermecado con fuego"/> 33
  </header>);
}

export default App;
