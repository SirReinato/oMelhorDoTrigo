import "./Formulario.css";
import InputsEaFins from "./inputsEafins";

const Formulario = () => {
  return (
    <section className="formulario">
      <h2>ALIMENTAR CARDÁPIO</h2>
      <form>
        <h3>Preencha os dados para adicionar alimento</h3>
        <InputsEaFins
          nome="Nome"
          
          obrigatorio={true}
          placeholder="Digite o nome do alimento"
        />

        <InputsEaFins
        type='file'
        nome="Foto"
        obrigatorio={true}

        />
      </form>
    </section>
  );
};

export default Formulario;
