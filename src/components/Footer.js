import React from 'react';

export default class Footer extends React.Component{
  render(){
    return(
      <div>
        <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">
                Cristiane Souza 2021/2022
              </div>
            </div>
            <div className="col-auto">
              <a className="link-light small" href="#!">
                Privacy
              </a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">
                Terms
              </a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}