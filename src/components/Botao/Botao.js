import "./Botao.css";

const Botao = (props) => {
    //childre: tudo o que estiver dentro do components irá ser renderizado como filho, seja texto ou outros components.
    return(
        <button className="botao">
            {props.children}
        </button>
    );
}

export default Botao;