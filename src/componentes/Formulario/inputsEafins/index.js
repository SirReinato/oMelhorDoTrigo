import "./inputsEafins.css";

const InputsEaFins = (props) => {
  const placeholderMudada = `${props.placeholder}...`;

  const captarMudanças = (event) =>{
    props.dadosInseridos(event.target.value)
  }

  return (
    <div className="inputsEafins">
      <label>{props.nome}</label>
      <input
        required={props.obrigatorio}
        type={props.type}
        placeholder={placeholderMudada}
        
        value={props.valor}
        onChange={captarMudanças}
      />
    </div>
  );
};

export default InputsEaFins;
