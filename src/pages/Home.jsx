import React from 'react';
import Header from '../components/Header';
import Cristiane from '../assets/images/embaixaCris.png';
import Facebook from '../assets/images/facebook.jpg'
import Instagram from '../assets/images/instagram.jpg'
import Linkedin from '../assets/images/linkedin.jpg'

export default class Home extends React.Component{
  render(){
    return(
      <div>
  <main className="flex-shrink-0">
    <Header />
    <section className="py-5" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="fw-bolder mb-0">Conteúdo do meu portfólio</h2>
          </div>
          <div className="col-lg-8">
            <div className="row gx-5 row-cols-1 row-cols-md-2">
              <div className="col mb-5 h-100">
                <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-braces"></i>
                </div>
                <h2 className="h5">Módulo Fundamentos</h2>
                <p className="mb-0">
                  Módulo inicial onde tive muitos aprendizados sobre HTML, CSS e JavaScript.
                </p>
              </div>
              <div className="col mb-5 h-100">
                <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h2 className="h5">Módulo FrontEnd</h2>
                <p className="mb-0">
                  Módulo com diversos aprendizados relacionados ao React.
                </p>
              </div>
              <div className="col mb-5 mb-md-0 h-100">
                <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-x-square"></i>
                </div>
                <h2 className="h5">Módulo BackEnd</h2>
                <p className="mb-0">
                Módulo com diversos aprendizados relacionados a Docker, SQL, Node.JS, Deploy, TypeScript, POO e MongoDB!
                </p>
              </div>
              <div className="col h-100">
                <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-x-square"></i>
                </div>
                <h2 className="h5">Módulo Ciência da Computação</h2>
                <p className="mb-0">
                  Ainda não iniciado!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonial section */}
    <div className="py-5 bg-light">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-10 col-xl-7">
            <div className="text-center">
              <div className="fs-4 mb-4 fst-italic">
                "Ninguém solta a mão de ninguém"
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="rounded-circle me-3"
                  src={Cristiane}
                  alt="Foto perfil"
                  width="150"
                />
                <div className="fw-bold">
                  Cristiane Souza
                  <span className="fw-bold text-success mx-1">/</span>
                  Embaixadora da Turma 16 - Tribo A - Trybe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Blog preview section */}
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center">
              <h2 className="fw-bolder">Redes sociais</h2>
              <p className="lead fw-normal text-muted mb-5">
                Vida pessoal e profissional nas redes sociais
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <img
                className="card-img-top"
                src={Facebook}
                alt="Facebook"
              />
              <div className="card-body p-4">
                <div className="badge bg-success bg-gradient rounded-pill mb-2">
                  <i className="bi bi-facebook"/>
                </div>
                <a
                  className="text-decoration-none link-dark stretched-link"
                  href="https://www.facebook.com/crissouzaepietro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 className="card-title mb-3">Facebook</h5>
                </a>
                <p className="card-text mb-0">
                  Você me encontra no Facebook com muitos memes e muitas histórias engraçadas entre eu e meu filho, Pietro!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <img
                className="card-img-top"
                src={Instagram}
                alt="instagram"
              />
              <div className="card-body p-4">
                <div className="badge bg-success bg-gradient rounded-pill mb-2">
                  <i className="bi bi-instagram" />
                </div>
                <a
                  className="text-decoration-none link-dark stretched-link"
                  href="https://www.instagram.com/crisalmeida.sz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 className="card-title mb-3">Instagram</h5>
                </a>
                <p className="card-text mb-0">
                  Você me encontra no Instagram com um pouco da minha rotina e posicionamento com relação ao universo feminino e todas as suas conquistas!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <img
                className="card-img-top"
                src={Linkedin}
                alt="Linkedin"
              />
              <div className="card-body p-4">
                <div className="badge bg-success bg-gradient rounded-pill mb-2">
                  <i className="bi bi-linkedin"/>
                </div>
                <a
                  className="text-decoration-none link-dark stretched-link"
                  href="https://www.linkedin.com/in/cristianesmalmeida/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 className="card-title mb-3">
                    LinkedIn
                  </h5>
                </a>
                <p className="card-text mb-0">
                  Ainda estou bem tímida no LinkedIn mas sempre postando meus avanços relacionados ao mundo da programação!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
    );
  }
}