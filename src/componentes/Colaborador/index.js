import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";

//Usamos dessa forma () => porque é uma aero function que será executada no futuro...

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
  return (
    <div className="colaborador">
        
      <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />

      <div
        className="cabecalho"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: corDeFundo,
        }}
      >
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
};
export default Colaborador;
