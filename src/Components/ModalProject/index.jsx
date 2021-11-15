import './style.scss';
import { AiOutlineHtml5, AiOutlineApi, AiOutlineGithub } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiTrello } from "react-icons/di";
import { RiPagesLine } from "react-icons/ri";

export default function ModalProject({ id = 'modal-projeto-overlay', onClose = () => { } }) {

  const outSideClick = (e => {
    if (e.target.id === id) onClose();
  })
  return (
    <div id="modal-projeto-overlay" onClick={outSideClick}>
      <div className="ModalProject">
        <div className="btnCloseModal">
          <button className="btn-close" onClick={onClose}>X</button>
        </div>
        <h1 id="titulo-modal">O Projeto</h1>
        <div className="projectDescriptModal">
          <p>O site desenvolvido é o trabalho final do curso Start Brasil de Desenvolvimento Front-End realizado em 2021, foi proposto que o site em questão retratasse uma Loja de maquiagem, contendo:</p>
        </div>
        <div className="projectDescriptPages">
          <p>Login</p>
          <p>Home com Menu</p>
          <p>Listagem de produtos</p>
          <p>Detalhes dos produtos</p>
          <p>Simulação de compra</p>
          <p>Gerar Boleto de pagamento</p>
        </div>
        <div className="projectDescriptModal">
          <p>Utilizando as stacks ensinadas ao longo do curso.</p>
        </div>
        <div className="projectIcons">
          <AiOutlineHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaReact />
          <AiOutlineApi />
        </div>
        <div className="projectManage">
          <p>Para controle e gestão do fluxo de produção utilizamos o método Kanban com auxilio do Trello para acompanhamento das atividades:</p>
        </div>
        <div className="projectLinks">
          <div className="linkAbout">
            <p>Trello</p>
            <a
              href="https://trello.com/b/NHQTYgeo/projeto-final-react"
              className="linkTrello"
              target="_blank"
              rel="noreferrer"
            >
              <DiTrello id="iconAbout" />
            </a>
          </div>
          <div className="linkAbout">
            <p>Repositório</p>
            <a
              href="https://github.com/RenatoAlbuquerque/Projeto-Final-Start"
              className="linkGithub"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub id="iconAbout" />
            </a>
          </div>
          <div className="linkAbout">
            <p>Hospedagem</p>
            <a
              href="https://zealous-hypatia-ee860e.netlify.app"
              className="linkSite"
              target="_blank"
              rel="noreferrer"
            >
              <RiPagesLine id="iconAbout" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}