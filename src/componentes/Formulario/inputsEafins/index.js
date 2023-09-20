import './inputsEafins.css'

const InputsEafins = (props) => {

  const receberDadosAoDigitarDoUsuario = (event)=>{
    props.quandoDigitado(event.target.value)
  }
  return (
    <div className="inputsEafins">
      <label>{props.labelNome}</label>
      <input
        placeholder={props.placeholder}
        required={props.obrigatorio}
        type={props.tipo}

        value={props.valor}
        onChange={receberDadosAoDigitarDoUsuario}
      />
    </div>
  )
}

export default InputsEafins;