import React from 'react';
import Header from '../components/Header';
import Cristiane from '../assets/images/embaixaCris.png';

export default class Home extends React.Component {
  render() {
    return (
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
          {/* Testimonial section */ }
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
                        src={ Cristiane }
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
        </main>
      </div>
    );
  }
}