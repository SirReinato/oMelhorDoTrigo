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

  const cardapioInicial = [
    {
      nome: 'Pão Francês',
      tipo: itensCardapio[0].nome,
      valor: '10',
      foto: 'https://i.pinimg.com/564x/00/e0/30/00e030619e352c815b47bd4447c40e5b.jpg'
    },
    {
      nome: 'Pão de Queijo',
      tipo: itensCardapio[0].nome,
      valor: '2',
      foto: 'https://i.pinimg.com/564x/f3/42/fa/f342fa044de80c050b1fcd3e622dcd82.jpg'
    },
    {
      nome: 'Pão de Hamburguer',
      tipo: itensCardapio[0].nome,
      valor: '3',
      foto: 'https://i.pinimg.com/564x/9f/7c/0e/9f7c0ef54fc77fa130c2a1517dea252b.jpg'
    },
    {
      nome: 'Dunuts',
      tipo: itensCardapio[1].nome,
      valor: '5',
      foto: 'https://i.pinimg.com/564x/5b/df/db/5bdfdbfd21e86dc67323ef916dd15cf9.jpg'
    },
    {
      nome: 'Bolinho de Iogurte',
      tipo: itensCardapio[1].nome,
      valor: '5',
      foto: 'https://i.pinimg.com/564x/2c/94/0e/2c940e167f5fbb9c39ee9987a0b129f1.jpg'
    },
    {
      nome: 'Bolo de Cenoura',
      tipo: itensCardapio[1].nome,
      valor: '4',
      foto: 'https://i.pinimg.com/564x/78/34/ea/7834eaf0d383e00c23b4edccb194cc1c.jpg'
    },
    {
      nome: 'Coxinha',
      tipo: itensCardapio[2].nome,
      valor: '5',
      foto: 'https://i.pinimg.com/564x/04/18/06/041806660f6fd12e55841424b2220dfb.jpg'
    },
    {
      nome: 'Pastel',
      tipo: itensCardapio[2].nome,
      valor: '4',
      foto: 'https://i.pinimg.com/564x/6f/38/fe/6f38fedb2714b6b46fc3fec20b9cbf66.jpg'
    },
    {
      nome: 'Pizza',
      tipo: itensCardapio[2].nome,
      valor: '20',
      foto: 'https://i.pinimg.com/564x/a1/be/6e/a1be6e3e22cea7bd7dec31d787f273c1.jpg'
    },
  ]

  const [cardapio, setCardapio] = useState(cardapioInicial);


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
            console.log(comida.tipo);
            return comida.tipo === item.nome
          } )}
          
        />
      ))}
    </div>
  );
}

export default App;
