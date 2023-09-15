import Botao from "../Botao";
import "./Formulario.css";
import { useState } from "react";
import SelecionarLista from "./SelecionarLista";
import InputsEaFins from "./inputsEafins";

const Formulario = () => {
  const tipoMenu = [
    "Tradicional", "Doces e Bolos", "Pizzas"
  ];

  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");
  const [foto, setFoto] = useState("");

  const aoAdicionar = (event)=>{
    event.preventDefault()
    console.log(nome, tipo, valor, foto);
    
  }
  return (
    <section className="formulario">
      <h2>ALIMENTAR CARDÁPIO</h2>
      <form onSubmit={aoAdicionar}>
        <h3>Preencha os dados para adicionar alimento</h3>
        <InputsEaFins
          valor={nome}
          dadosInseridos={(valor) => setNome(valor)}
          nome="Nome"
          obrigatorio={true}
          placeholder="Digite o nome do alimento"
        />
        <SelecionarLista
          valor={tipo}
          dadosInseridos={(valor) => setTipo(valor)}
          nome="Tipo"
          placeholder="Selecione o tipo"
          tipoMenu={tipoMenu}
        />
        <InputsEaFins
          valor={valor}
          dadosInseridos={(valor) => setValor(valor)}
          nome="valor"
          placeholder="coloque o preço"
          obrigatorio={true}
        />
        <InputsEaFins
          valor={foto}
          dadosInseridos={(valor) => setFoto(valor)}
          type="file"
          nome="Foto"
          obrigatorio={true}
        />
        <Botao>ADICIONAR</Botao>
      </form>
    </section>
  );
};

export default Formulario;
