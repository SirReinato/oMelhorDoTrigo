import "./SelecionarLista.css";

const SelecionarLista = (props) => {
  return (
    <div className="selecionarLista">
      <label>{props.labelNome}</label>
      <select
        required={props.obrigatorio}
        
        value={props.valor}
        onChange={(evento) => props.quandoDigitado(evento.target.value)}
      >
        <option></option>
        {props.listaTipo.map((lista) => {
          return <option key={lista}>{lista}</option>;
        })}
      </select>
      <span>Selecione o tipo (Tradicional, Doce e Bolos, Salgados)</span>
    </div>
  );
};

export default SelecionarLista;
