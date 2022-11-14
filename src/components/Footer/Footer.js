import "./Footer.css";
// import facebook from "../../../public/imagens/fb.png";

const Rodape = () => {
  return (
    <section className="footer">
      <div>
        <a
          href="https://www.linkedin.com/in/george-luiz-42501b151/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/imagens/linkedin.png" alt="facebook" />
        </a>
        <a href="https://github.com/george-luiz?tab=repositories" 
            target="_blank"
            rel="noreferrer"
        >
          <img src="/imagens/github.png" alt="twetter" />
        </a>
      </div>
      <img src="/imagens/logo.png" alt="" />
      <p>Desenvolvido por George</p>
    </section>
  );
};

export default Rodape;
