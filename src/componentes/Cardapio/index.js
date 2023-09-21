import Alimento from "../Alimento";
import "./Cardapio.css";

const Cardapio = (props) => {
  return (
    (props.alimentos.length > 0) ? <section
      className="cardapio"
      style={{ backgroundColor: props.corPrimaria }}
    >
      <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
      <div className="alimentoConteiner">
        {props.alimentos.map(alimento => 
        <Alimento
            key={alimento.nome}
            nome={alimento.nome}
            valor={alimento.valor}
            foto={alimento.foto}
            tipo={alimento.tipo}
            corDeFundo={props.corSecundaria}
        />)
        }
      </div>
    </section> : ''
  );
};

export default Cardapio;
