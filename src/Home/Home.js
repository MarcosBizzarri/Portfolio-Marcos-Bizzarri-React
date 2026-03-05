import { useState } from "react";
import styles from "./Home.module.css";
import cv from  '../assets/cv/developer-marcos.pdf';

import aviao from "../assets/img/avioes.png";
import trabalho from "../assets/img/trabalho-uninter-bizzarri.png";
import perguntas from "../assets/img/perguntas.png";
import santander from "../assets/img/projeto-santander.png";
import facebook from "../assets/img/facebook-insta.png";
import academia from "../assets/img/academia-gestao.png";
import quiz from "../assets/img/quiz.png";
import crud from "../assets/img/cadastro.png";
import casorio from "../assets/img/casorio.png";
import busca from "../assets/img/bsuca-restaurantes.png";
import treino from "../assets/img/treinos.png"
import controle from "../assets/img/controle.png"

import htmlIcon from "../assets/languages/html.svg";
import cssIcon from "../assets/languages/css.svg";
import jsIcon from "../assets/languages/javascrip.svg";
import reactIcon from "../assets/languages/react.svg";
import bootstrapIcon from "../assets/languages/bootstrap.svg";
import nextIcon from "../assets/languages/next.png";
import nodeIcon from "../assets/languages/node.png";
import tailwindIcon from "../assets/languages/tailwind.png";

import video from "../assets/videos/bizzarriflights.mkv";
import video1 from "../assets/videos/sobre-marcos.mkv";
import video2 from "../assets/videos/perguntas-js.mp4";
import video3 from "../assets/videos/santander.mkv";
import video4 from "../assets/videos/facebook-clone.mkv";
import video5 from "../assets/videos/academia-gestao.mp4";
import video6 from "../assets/videos/quiz-educacional.mp4";
import video7 from "../assets/videos/cadastro-crud.mp4";
import video8 from "../assets/videos/casamento.mp4";
import video9 from "../assets/videos/buscarestaurantes.mp4";
import video10 from "../assets/videos/treino.mp4"
import video11 from "../assets/videos/controlefinanceiro.mp4"

import react from "../assets/languages/react.svg";
import html5 from "../assets/languages/html.svg";
import css3 from "../assets/languages/css.svg";
import js from "../assets/languages/javascrip.svg";
import bt from "../assets/languages/bootstrap.svg";
import nextjs from "../assets/languages/next.png";
import nodejs from "../assets/languages/node.png";
import tailwind from "../assets/languages/tailwind.png";

import mailIcon from "../assets/contatos/mail.svg";
import phoneIcon from "../assets/contatos/phone.svg";
import linkedinIcon from "../assets/contatos/linkedin.svg";
import githubIcon from "../assets/contatos/github.svg";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseVideo = () => {
    setSelectedProject(null);
  };

  
    const voltarTopo = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.textContainer}>
          <h5 className={styles.titulo_um}>Olá, eu sou o</h5>
          <span className={styles.titulo_dois}>Marcos Bizzarri</span>
          <br />
          <p className={styles.titulo_tres}>
            Desenvolvedor Frontend | React, Next.js & Tailwind
          </p>
          <div className={`${styles.actions} mt-3`}>
            <a href={cv} download className="btn btn-primary mr-2">Currículo</a>
            <a href="https://wa.me/5519994449107" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Whatsapp</a>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <h2 className={styles.texto_um}>Sobre mim</h2>
        <p className={styles.texto}>
          Sou desenvolvedor Front-end com foco em criar interfaces modernas,
          responsivas e performáticas. Atuo principalmente com React, Next.js e
          Tailwind CSS, buscando sempre código limpo, boa experiência do usuário
          e soluções escaláveis.
        </p>
      </div>
      <div className={styles.container_um}>
        <h2 className={styles.habilidades}>Habilidades</h2>
        <div className={styles.cards}>
          <div className={styles.box}>
            <img src={htmlIcon} alt="html" className={styles.img_html} />
            <p className={styles.paragra}>HTML5</p>
          </div>
          <div className={styles.box}>
            <img src={cssIcon} alt="css" className={styles.img_html} />
            <p className={styles.paragra}>CSS3</p>
          </div>
          <div className={styles.box}>
            <img src={jsIcon} alt="javascript" className={styles.img_html} />
            <p className={styles.paragra}>JavaScript</p>
          </div>
          <div className={styles.box}>
            <img src={reactIcon} alt="react" className={styles.img_html} />
            <p className={styles.paragra}>React</p>
          </div>
          <div className={styles.box}>
            <img
              src={bootstrapIcon}
              alt="bootstrap"
              className={styles.img_html}
            />
            <p className={styles.paragra}>Bootstrap</p>
          </div>
          <div className={styles.box}>
            <img src={nextIcon} alt="next" className={styles.img_html} />
            <p className={styles.paragra}>Nextjs</p>
          </div>
          <div className={styles.box}>
            <img src={nodeIcon} alt="node" className={styles.img_html} />
            <p className={styles.paragra}>Nodejs</p>
          </div>
          <div className={styles.box}>
            <img
              src={tailwindIcon}
              alt="tailwind"
              className={styles.img_html}
            />
            <p className={styles.paragra}>Tailwind</p>
          </div>
        </div>
      </div>
      <div className={styles.projetos}>
        <h1 className={styles.titulo_projeto}>Projetos</h1>

        <div className={styles.gridContainer}>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("treinodiario")}
            >
              <img src={treino} alt="aviões" className={styles.imagem_aviao} />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={nextjs}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  
                  <img src={tailwind} alt="overlay" className={styles.imageinter} />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>
              Projeto Treinos diários
            </h2>
            {selectedProject === "treinodiario" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video10} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://training-evolution.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    O projeto{" "}
                    <strong className={styles.color}>Treinos diários</strong>
                    <br />
                    é uma aplicação web desenvolvida em React.
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("controle")}
            >
              <img src={controle} alt="aviões" className={styles.imagem_aviao} />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={nextjs}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img src={tailwind} alt="overlay" className={styles.imageinter} />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>
              Projeto Controle financeiro
            </h2>
            {selectedProject === "controle" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video11} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://controle-financeiro-ten-alpha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    O projeto{" "}
                    <strong className={styles.color}>Controle Financeiro</strong>
                    <br />
                    é uma aplicação web desenvolvida em React.
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("bizzarriFlights")}
            >
              <img src={aviao} alt="aviões" className={styles.imagem_aviao} />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={react}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img
                    src={html5}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img src={css3} alt="overlay" className={styles.imageinter} />
                  <img src={bt} alt="overlay" className={styles.imageinter} />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>
              Projeto Bizzarri Flights
            </h2>
            {selectedProject === "bizzarriFlights" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://bizzarri-flights-2bb60.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    O projeto{" "}
                    <strong className={styles.color}>Bizzarri Flights</strong>
                    <br />
                    é uma aplicação web desenvolvida em React.
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("casamento")}
            >
              <img
                src={casorio}
                alt="casamento"
                className={styles.imagem_aviao}
              />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={nextIcon}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img
                    src={tailwindIcon}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>
              Projeto do meu casamento
            </h2>
            {selectedProject === "casamento" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video8} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://casamento-one-roan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="https://github.com/MarcosBizzarri/casamento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Repositório
                  </a>
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    O projeto{" "}
                    <strong className={styles.color}>Casamento</strong>
                    <br />
                    é uma aplicação web desenvolvida em Nextjs e tailwind
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("busca")}
            >
              <img src={busca} alt="aviões" className={styles.imagem_aviao} />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={nextjs}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img
                    src={nodejs}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img
                    src={tailwind}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>
              Busca de restaurantes
            </h2>
            {selectedProject === "busca" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video9} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://buscas-de-restaurantes.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="https://github.com/MarcosBizzarri/Buscas-de-restaurantes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Repositório
                  </a>
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    O projeto{" "}
                    <strong className={styles.color}>
                      Busca de restaurantes
                    </strong>
                    <br />
                    é desenvolvido com Nextjs , nodejs e tailwind
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("sobreMarcos")}
            >
              <img
                src={trabalho}
                alt="aviões"
                className={styles.imagem_aviao}
              />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={html5}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img src={css3} alt="overlay" className={styles.imageinter} />
                  <img src={js} alt="overlay" className={styles.imageinter} />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>
              Projeto sobre Marcos Bizzarri
            </h2>
            {selectedProject === "sobreMarcos" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video1} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://marcosbizzarri.github.io/Portfolio-Marcos-Bizzarri/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="https://github.com/MarcosBizzarri/Portfolio-Marcos-Bizzarri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Repositório
                  </a>
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    Projeto feito sobre o{" "}
                    <strong className={styles.color}> Marcos Bizzarri </strong>,
                    <br />
                    é uma aplicação web desenvolvida em HTML, CSS e JS.
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("perguntas")}
            >
              <img
                src={perguntas}
                alt="aviões"
                className={styles.imagem_aviao}
              />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={html5}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img src={css3} alt="overlay" className={styles.imageinter} />
                  <img src={js} alt="overlay" className={styles.imageinter} />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>
              Quiz sobre HTML, CSS e JS
            </h2>
            {selectedProject === "perguntas" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video2} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://marcosbizzarri.github.io/perguntas-html-css-js/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="https://github.com/MarcosBizzarri/perguntas-html-css-js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Repositório
                  </a>
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    O projeto{" "}
                    <strong className={styles.color}>Perguntas</strong>
                    <br />
                    é uma aplicação web desenvolvida em HTML, CSS e JS.
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("santander")}
            >
              <img
                src={santander}
                alt="aviões"
                className={styles.imagem_aviao}
              />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={html5}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img src={css3} alt="overlay" className={styles.imageinter} />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>
              Projeto Banco Santander
            </h2>
            {selectedProject === "santander" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video3} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://marcosbizzarri.github.io/projeto-santander/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="https://github.com/MarcosBizzarri/projeto-santander"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Repositório
                  </a>
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    O projeto{" "}
                    <strong className={styles.color}>Santander</strong>
                    <br />
                    é uma aplicação web desenvolvida em HTML, CSS.
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("facebook")}
            >
              <img
                src={facebook}
                alt="aviões"
                className={styles.imagem_aviao}
              />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={html5}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img src={css3} alt="overlay" className={styles.imageinter} />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>
              Facebook com cores do Instagram
            </h2>
            {selectedProject === "facebook" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video4} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://marcosbizzarri.github.io/facebook-pagina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="https://github.com/MarcosBizzarri/facebook-pagina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Repositório
                  </a>{" "}
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    O projeto{" "}
                    <strong className={styles.color}>Facebook Clone</strong>
                    <br />
                    é uma aplicação web desenvolvida em HTML, CSS.
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("academia")}
            >
              <img
                src={academia}
                alt="aviões"
                className={styles.imagem_aviao}
              />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={html5}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img src={css3} alt="overlay" className={styles.imageinter} />
                  <img src={js} alt="overlay" className={styles.imageinter} />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>
              Gerenciador de Academia
            </h2>
            {selectedProject === "academia" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video5} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://marcosbizzarri.github.io/gestao-academia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="https://github.com/MarcosBizzarri/gestao-academia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Repositório
                  </a>{" "}
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    O projeto{" "}
                    <strong className={styles.color}>
                      Gerenciador de Academia
                    </strong>
                    <br />
                    é uma aplicação web desenvolvida em HTML, CSS e JS.
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("quizeducacional")}
            >
              <img src={quiz} alt="aviões" className={styles.imagem_aviao} />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={react}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img
                    src={html5}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img src={css3} alt="overlay" className={styles.imageinter} />
                  <img src={bt} alt="overlay" className={styles.imageinter} />
                  <img src={js} alt="overlay" className={styles.imageinter} />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>Quiz Educacional</h2>
            {selectedProject === "quizeducacional" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video6} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://quiz-educacional-7a06f.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="https://github.com/MarcosBizzarri/Quiz-Educacional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Repositório
                  </a>
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    Projeto{" "}
                    <strong className={styles.color}> Quiz Educacional </strong>
                    ,<br />
                    é uma aplicação web desenvolvida em React.
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>

          <div className={styles.projeto}>
            <div
              className={styles.imagemContainer}
              onClick={() => handleImageClick("crud")}
            >
              <img src={crud} alt="aviões" className={styles.imagem_aviao} />
              <div className={styles.overlay}>
                <div className={styles.textoOverlay}>
                  <img
                    src={react}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img
                    src={html5}
                    alt="overlay"
                    className={styles.imageinter}
                  />
                  <img src={css3} alt="overlay" className={styles.imageinter} />
                  <img src={bt} alt="overlay" className={styles.imageinter} />
                  <img src={js} alt="overlay" className={styles.imageinter} />
                </div>
              </div>
            </div>
            <h2 className={styles.titulo_projeto_texto}>Sistema sobre CRUD</h2>
            {selectedProject === "crud" && (
              <div className={styles.videoContainer}>
                <video className={styles.video} controls>
                  <source src={video7} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className={styles.links}>
                  <a
                    href="https://sistema-de-cadastro-bizzarri.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href="https://github.com/MarcosBizzarri/Crud-sistema"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-2"
                  >
                    Ver Repositório
                  </a>
                  <br />
                  <br />
                  <br />
                  <p className={styles.paragrafo_projeto}>
                    {" "}
                    Projeto sobre{" "}
                    <strong className={styles.color}> CRUD </strong>,<br />
                    é uma aplicação web desenvolvida em React.
                    <br />
                  </p>
                </div>
                <button
                  onClick={handleCloseVideo}
                  className={styles.closeButton}
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.contacts}>
        <div className={styles.contatos}>
          <h2 className={styles.mini_titulo}>Contato</h2>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <a
                href="mailto:marcos-bizzarri@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonLink}
              >
                <div className={styles.box}>
                  <img src={mailIcon} alt="e-mail" />
                </div>
              </a>{" "}
              <p className={styles.mini_paragrafo}>E-mail</p>
            </div>
            <div className={styles.icon}>
              <a
                href="https://api.whatsapp.com/send/?phone=5519994449107&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonLink}
              >
                <div className={styles.box}>
                  <img src={phoneIcon} alt="telefone" />
                </div>
              </a>
              <p className={styles.mini_paragrafo}>Telefone</p>
            </div>
            <div className={styles.icon}>
              <a
                href="https://linkedin.com/in/marcos-bizzarri"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonLink}
              >
                <div className={styles.box}>
                  <img src={linkedinIcon} alt="linkedin" />
                </div>
              </a>
              <p className={styles.mini_paragrafo}>Linkedin</p>
            </div>
            <div className={styles.icon}>
              <a
                href="https://github.com/MarcosBizzarri"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonLink}
              >
                <div className={styles.box}>
                  <img src={githubIcon} alt="github" />
                </div>
              </a>
              <p className={styles.mini_paragrafo}>Github</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
          <footer>
          © 2026 • Marcos Bizzarri
        
    </footer>
      </div>

      <div className={styles.seta}>
        <button onClick={voltarTopo}>
           ↑

          <span className="tooltip">Subir ao topo</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
