import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    {/*<ItemListContainer greeting="Hola Mundo"/>*/}
    <ItemDetailContainer/>
    </BrowserRouter>
    );
}

export default App;
