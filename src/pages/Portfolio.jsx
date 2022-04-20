import React from 'react';
import { Link } from 'react-router-dom';

export default class Portfolio extends React.Component {

  render() {
    const { projectGit } = this.props;

    return (
      <div>
      <div className="py-5">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bolder">Meus Projetos</h1>
            <p className="lead fw-normal text-muted mb-0">Projetos feitos no curso da Trybe</p>
          </div>
        </div>
        </div>
        <div>
          { projectGit.map((proj) => (
            <section className="py-5 bg-light" id="scroll-target">
              <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="img-fluid rounded mb-5 mb-lg-0"
                      src={ proj.image }
                      alt={ proj.nome }
                    />
                  </div>
                  <div className="col-lg-6">
                    <h2 className="fw-bolder">{ proj.nome }</h2>
                    <p className="lead fw-normal text-muted mb-0">
                      { proj.sobre }
                    </p>
                    <p className="lead fw-normal text-muted mb-0">Url do GitHub Pages: { proj.repositorio }</p>
                  </div>
                </div>
              </div>
            </section>
          )) }
          <section className="py-5 bg-light">
            <div className="container px-5 my-5">
              <p className="display-4 fw-bolder mb-4">
                Let's build something together?
              </p>
              <Link className="btn btn-lg btn-primary"
                to={ { pathname: "https://www.linkedin.com/in/cristianesmalmeida/" } }
                target="_blank"
              >
                LinkedIn para contato
              </Link>
            </div>
          </section>
        </div>
        </div>
        );
  }
}
