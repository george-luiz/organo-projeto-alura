import "./CampoTexto.css";

const CampoTexto = ({type = "text", label, placeholder, valor, aoAlterado, obrigatorio = false}) => {

  const aoDigitado = (event) => {
    aoAlterado(event.target.value);
  }

  return (
    <div className={`campo-texto campo-texto-${type}`}>
      <label>{label}</label>
      <input 
        type={type}
        required={obrigatorio} 
        placeholder={placeholder} 
        value={valor}
        onChange={aoDigitado}
        />
    </div>
  );
};

export default CampoTexto;
