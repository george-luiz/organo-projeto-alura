import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault(); 
    props.aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    });
    // Limpando o formulario
    setNome("");
    setCargo("");
    setImagem("");
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={(valor) => { setNome(valor)}}
          />
        <CampoTexto 
          obrigatorio={true} label="Cargo" 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={(valor) => { setCargo(valor)}}
          />
        <CampoTexto 
          obrigatorio={true} 
          label="Imagem Github" placeholder="Seu nome do Github"
          valor={imagem}
          aoAlterado={(valor) => { setImagem(valor)}}
          />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          />
        <Botao>
          Criar Card
        </Botao>
      </form>
      <form onSubmit={(event) => {
        event.preventDefault();
        props.cadastrarTime({ nome: nomeTime, cor: corTime });
      }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu o nome do time" 
          valor={nomeTime}
          aoAlterado={(valor) => { setNomeTime(valor)}}
        />
        <CampoTexto 
          obrigatorio={true} 
          type="color"
          label="cor" 
          placeholder="Digite a cor do time" 
          valor={corTime}
          aoAlterado={(valor) => { setCorTime(valor)}}
        />
        <Botao>
          Criar um novo time
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
