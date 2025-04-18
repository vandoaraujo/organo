import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({time, colaboradores, aoDeletar, mudarCorDoTime, aoFavoritar}) => {
  const css = { backgroundColor: time.corSecundaria };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={css}>
        <input
          onChange={evento => mudarCorDoTime(evento.target.value, time.id)}
          value={time.corPrimaria}
          type='color'
          className="input-cor" />
        <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map(colaborador => (
              <Colaborador
                key={colaborador.nome}
                corDeFundo={time.corPrimaria}
                colaborador={colaborador}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
