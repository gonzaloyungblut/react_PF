import './App.css';

import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    {/*<ItemListContainer greeting="Hola Mundo"/>*/}
    <ItemDetailContainer/>
    </>
    );
}

export default App;
