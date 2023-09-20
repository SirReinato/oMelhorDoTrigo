import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/Formulario';

function App() {

  const [cardapio, setCardapio] = useState([]);

  const aoNovoItemAddAoCardapio = (item)=>{
    console.log(item);
    setCardapio([...cardapio, item])
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario aosAlimentosAdicionado={item => aoNovoItemAddAoCardapio(item)}/>
    </div>
  );
}

export default App;
