import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
      id: uuidv4(),
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
      id: uuidv4(),
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
      id: uuidv4(),
    },
    {
      nome: "Devops",
      corPrimaria: "#E06869",
      corSecundaria: "#FDE7E8",
      id: uuidv4(),
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
      id: uuidv4(),
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
      id: uuidv4(),
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
      id: uuidv4(),
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador() {
    console.log("deletando colaborador");
  }

  function mudarCorDoTime(cor, identificador) {
    console.log(identificador)
    setTimes(times.map(time => {
        if (time.id === identificador) {
          time.corPrimaria = cor;
        }
        return time;
      }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => (
          <Time
            mudarCorDoTime={mudarCorDoTime}
            key={indice}
            time={time}
            aoDeletar={deletarColaborador}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
          />
        ))}
      </section>

      <Rodape />
    </div>
  );
}

export default App;
