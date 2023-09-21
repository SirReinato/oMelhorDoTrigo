import { useState } from "react";
import "./App.css";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Cardapio from "./componentes/Cardapio";

function App() {
  const itensCardapio = [
    {
      nome: "Tradicional",
      corPrimaria: "#7C675E",
      corSecundaria: "#A86E55",
    },
    {
      nome: "Doces e Bolos",
      corPrimaria: "#E2B79D",
      corSecundaria: "#663F28",
    },
    {
      nome: "Salgado",
      corPrimaria: "#FFE9E3",
      corSecundaria: "#2D0A00",
    },
  ];

  const [cardapio, setCardapio] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario
        listaTipo={itensCardapio.map((nomeAlimento) => nomeAlimento.nome)}
        aosAlimentosAdicionado={(item) => setCardapio([...cardapio, item])}
      />

      {itensCardapio.map((item) => (
        <Cardapio
          key={item.nome}
          nome={item.nome}
          corPrimaria={item.corPrimaria}
          corSecundaria={item.corSecundaria}

          alimentos={cardapio.filter(comida => {
            return comida.tipo === item.nome
          } )}
          
          // {cardapio.filter(
          //   (comidas) => comidas.alimentoPcardapio === alimentoPcardapio.nome
          // )}
        />
      ))}
    </div>
  );
}

export default App;
