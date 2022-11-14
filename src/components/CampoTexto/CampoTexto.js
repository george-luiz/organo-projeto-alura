import "./CampoTexto.css";

const CampoTexto = (props) => {

  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value);
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input 
        required={props.obrigatorio} 
        placeholder={props.placeholder} 
        value={props.valor}
        onChange={aoDigitado}
        />
    </div>
  );
};

export default CampoTexto;
