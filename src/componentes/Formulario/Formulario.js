import { useState } from "react";
import Botao from "../Botao";
import "./Formulario.css";
import SelecionarLista from "./SelecionarLista";
import InputsEafins from "./inputsEafins";

const Formulario = (props) => {

  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [foto, setFoto] = useState('');

  const enviado = (event)=>{
    event.preventDefault();
    props.aosAlimentosAdicionado({
      nome, tipo, valor, foto
    })
    setNome('')
    setTipo('')
    setValor('')
    setFoto('')
  }

  return (
    <section className="formulario">
      <h2>ALIMENTAR CARDÁPIO</h2>
      <form onSubmit={enviado}>
        <h3>Preencha os dados para adicinoar alimento</h3>
        <InputsEafins
          labelNome="Nome"
          obrigatorio={true}
          placeholder="Digite o nome do alimento"

          valor={nome}
          quandoDigitado={valor => setNome(valor)}
        />

        <SelecionarLista
          labelNome="Tipo"
          obrigatorio={true}
          listaTipo={props.listaTipo}

          valor={tipo}
          quandoDigitado={valor => setTipo(valor)}
        />

        <InputsEafins
          labelNome="Valor"
          obrigatorio={true}
          placeholder="Digite o valor ( R$ ) do alimento"
          
          valor={valor}
          quandoDigitado={valor => setValor(valor)}
        />

        <InputsEafins
          labelNome="Foto"
          obrigatorio={true}
          placeholder="Coloque a foto do alimento"

          valor={foto}
          quandoDigitado={valor => setFoto(valor)}
        />
        <Botao>ADICIONAR</Botao>
      </form>
    </section>
  );
};

export default Formulario;
