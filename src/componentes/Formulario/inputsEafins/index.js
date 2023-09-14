import "./inputsEafins.css";

const InputsEaFins = (props) => {
  const placeholderMudada = `${props.placeholder}...`;
  return (
    <div className="inputsEafins">
      <label>{props.nome}</label>
      <input
        required={props.obrigatorio}
        type={props.type}
        placeholder={placeholderMudada}
      />
    </div>
  );
};

export default InputsEaFins;
