import "./SelecionarLista.css";

const SelecionarLista = (props) => {
  return (
    <div className="selecionarLista">
      <label>{props.nome}</label>
      <select>
        {props.tipoMenu.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default SelecionarLista;
