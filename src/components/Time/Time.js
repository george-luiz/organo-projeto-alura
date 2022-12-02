import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
  return (
    //props.colaboradores.length > 0 &&: js vai olhar e caso seja true irá exibir a o componente caso seja false não irá exibir nada OU pode ser feito como operador ternario
    props.colaboradores.length > 0 ? (
      <section
        className="time"
        style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, '0.6')}}
      >
        <input value={props.cor} onChange={(event) => props.mudarCor(event.target.value, props.id)} type="color" className="input-color" />
        
        <h3 style={{ borderColor: props.cor }}>
          {props.nome}
        </h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={props.nome}
                colaborador={colaborador}
                corDeFundo={props.cor}
                aoDeletar={props.aoDeletar}
                id={colaborador.id}
                aoFavoritar={props.aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    ) : null
  );
};

export default Time;
