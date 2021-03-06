import React from 'react';
import Cris from '../assets/images/cris2.jpg'

export default class Header extends React.Component{
  render(){
    return(
      <header className="bg-dark py-5">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6">
                <div className="my-5 text-center text-xl-start">
                  <h1 className="display-5 fw-bolder text-white mb-2">
                    Tryberfólio | Meus Projetos
                  </h1>
                  <p className="lead fw-normal text-white-50 mb-4">
                    Olá, seja muito bem vindo(a)!
                    Nesse portfolio você irá encontrar um pouco da minha trajetória de vida
                    profissional e pessoal. 
                  </p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <a
                      className="btn btn-success btn-lg px-4 me-sm-3"
                      href="https://github.com/CrisSouzaMA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repositórios no Github
                    </a>
                    <a 
                      className="btn btn-success btn-lg px-4 me-sm-3" 
                      href="https://www.linkedin.com/in/cristianesmalmeida/"
                      target="_blank"
                      rel="noreferrer"
                      >
                      Perfil no LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                <img
                  className="img-fluid rounded-3 my-5"
                  src={Cris}
                  alt="FotoPerfil"
                />
              </div>
            </div>
          </div>
        </header>
    );
  }
}