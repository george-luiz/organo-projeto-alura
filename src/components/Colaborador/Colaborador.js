import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle 
        size={25} 
        className="deletar" 
        onClick={() => aoDeletar(colaborador.id)} 
      />

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={`https://github.com/${colaborador.imagem}.png`} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
            {colaborador.favorito === true 
              ? <AiFillHeart size={25} color="#ff0000" onClick={favoritar} /> 
              : <AiOutlineHeart size={25} onClick={favoritar} 
            />}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
