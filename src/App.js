import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import Rodape from "./components/Footer/Footer";
import Time from "./components/Time/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Back-End",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Sciense",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#D86EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FEBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: "false",
      nome: "George Luiz",
      cargo: "Desenvolvedor Front-End e mobile",
      imagem: "george-luiz",
      time: times[1].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map((colaborador) => {
      if(colaborador.id === id){
         colaborador.favorito = !colaborador.favorito;
         return colaborador;
      }
    }));
  }

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => {
          return time.nome;
        })}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <section className="times">
        <h1 style={{textAlign: "center", fontWeight: "bold", fontSize: "35px"}}>Minha organização</h1>
        {times.map((time) => {
          return (
            <Time
              aoFavoritar={resolverFavorito}
              mudarCor={mudarCorDoTime}
              key={time.nome}
              nome={time.nome}
              cor={time.cor}
              id={time.id}
              colaboradores={colaboradores.filter((colaborador) => {
                return colaborador.time === time.nome;
              })}
              aoDeletar={deletarColaborador}
            />
          );
        })}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
