import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    //props.colaboradores.length > 0 &&: js vai olhar e caso seja true irá exibir a o componente caso seja false não irá exibir nada OU pode ser feito como operador ternario 
    (props.colaboradores.length > 0) ? <section className="time" style={{ backgroundColor: props.corSecundaria }}>
    <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    <div className="colaboradores">
      {props.colaboradores.map((colaborador) => (
        <Colaborador
          key={props.nome}
          corDeFundo={props.corPrimaria}
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
        />
      ))}
    </div>
  </section> : null
    
  );
};

export default Time;
