import "./Alimento.css";

const Alimento = ({nome, valor, foto, corDeFundo}) => {
  const seuValor = `R$ ${valor},00`;
  return (
    <div className="alimento" style={{backgroundColor: corDeFundo}}>
      <div className="cabecalho">
        <img src={foto} alt={nome} />
      </div>
      <div className="conteudo">
        <h4>{nome}</h4>
        <h5>{seuValor}</h5>
      </div>
    </div>
  );
};

export default Alimento;
