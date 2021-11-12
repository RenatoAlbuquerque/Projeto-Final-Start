import './modalProject.scss';
import { AiOutlineHtml5, AiOutlineApi, AiOutlineGithub } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiTrello } from "react-icons/di";
import { RiPagesLine } from "react-icons/ri";

export default function ModalProject({ id = 'modal-equipe', onClose = () => { } }) {

  const outSideClick = (e => {
    if (e.target.id === id) onClose();
  })
  return (
    <div id="modal-equipe" onClick={outSideClick}>
      <div className="ModalProject">
        <div className="btnCloseModal">
          <button className="btn-close" onClick={onClose}>X</button>
        </div>
        <h1 id="titulo-modal">O Projeto</h1>
        <div className="projectDescriptModal">
          <p>O site desenvolvido é o trabalho final do curso Start Brasil de Desenvolvimento Front-End realizado em 2021, foi proposto que o site em questão retratasse uma Loja de maquiagem, contendo uma:</p>
        </div>
        <div className="projectDescriptPages">
          <p>Tela de Login</p>
          <p>Tela de Home com Menu</p>
          <p>Tela de Produtos</p>
          <p>Tela de Detalhes</p>
          <p>Tela de Compras</p>
          <p>Tela de Boletos (Bônus)</p>
        </div>
        <div className="projectDescriptModal">
          <p>Utilizando as softskills repassadas ao longo do curso.</p>
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
              className="linkTrello"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub id="iconAbout" />
            </a>
          </div>
          <div className="linkAbout">
            <p>Hospedagem</p>
            <a
              href="/"
              className="linkTrello"
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