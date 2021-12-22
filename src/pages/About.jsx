import React from 'react';
import Crisbaby from '../assets/images/crisbaby.JPG';
import Formatura from '../assets/images/formatura.jpg';
import EuePietro from '../assets/images/euepietro.jpg';
import EueTrybe from '../assets/images/euetrybe.JPG';
import Familia from '../assets/images/familia.JPG';

export default class About extends React.Component{
  render(){
    return(
      <div>
      <section className="py-5 bg-light" id="scroll-target">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={Crisbaby}
                  alt="Foto da infancia"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Infância</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Olá, tudo bem ?
                  Me chamo Cristiane Souza e vou deixar nesse portfólio um pouquinho da minha vida pessoal e profissional.
                  Tive uma infância incrível, mas hoje sei que com muito sacrifício dos meus pais.
                  Nasci em uma família muito humilde, minha mãe é dona de casa e meu pai é representante comercial de bebidas.
                  Mesmo com toda dificuldade sempre fomos muito unidos e eles me proporcionaram uma infância rica em experiências maravilhosas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-first order-lg-last">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={Formatura}
                  alt="Formatura"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Formada em Engenharia de Produção</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Peço que não reparem na qualidade da foto!
                  Essa foto tem um peso muito grande pra mim. Mesmo contra todos os obstáculos eu formei.
                  Sempre gostei de estudar e antes de completar o ensino médio tinha conquistado uma bolsa integral para 
                  cursar engenharia de produção pelo PROUNI. Foram muitos dias de trabalho duro e estudo madrugada a dentro
                  para manter minhas notas e dar conta de tudo, mas eu consegui. E essa, por enquanto, é minha conquista favorita.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-light" id="scroll-target">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={EuePietro}
                  alt="Foto com meu filho"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Pietro</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Engravidei no meio da faculdade.
                  Então sim, era estágio, faculdade, barrigão e muita correria.
                  A descoberta da gravidez me assustou muito mas me deu uma força inimaginável.
                  Como diz Cristina Junqueira - fundadora do Nubank: "O mamífero mais poderoso do Planeta é uma mulher grávida".
                  E ela tem toda razão. Pietro me ajudou a seguir em frente mesmo nas maiores adversidades.
                  Ele é minha fortaleza, meu lugar seguro e o motivo do meu inconformismo.
                  Quero sempre evoluir para ser pra ele exemplo de força e de felicidade.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-first order-lg-last">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={Familia}
                  alt="Minha familia"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">Familia</h2>
                <p className="lead fw-normal text-muted mb-0">
                  Esse é meu alicerce!
                  Meus pais, meu único irmão e meu filho!
                  Já cheguei na idade que sou mãe da minha familia inteira. Resolvendo toda a burocracia da vida adulta e cuidando dos mínimos detalhes da saúde e bem estar deles.
                  Meus pais sempre me apoiaram. Sempre estiveram ao meu lado, mesmo quando tudo ia muito mal.
                  Eu realmente tive muita sorte em crescer em um lar feliz, simples e repleto de muito amor.
                  Foi nesse lar que aprendi que sozinho não somos nada.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 bg-light" id="scroll-target">
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src={EueTrybe}
                  alt="Trybe"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="fw-bolder">O ínicio na programação</h2>
                <p className="lead fw-normal text-muted mb-0">
                Foi em um momento de muito questionamento sobre a direção que minha vida profissional estava tomando que a Trybe surgiu pra mim.
                Foram meses de namoro a distância. Estava bem empregada mas sentia que faltava algo. Sentia que podia contribuir mais para minha formação.
                Pensei: "Vou tentar só por tentar mesmo". E fui admitida na primeira tentativa do processo seletivo do curso.
                Em uma seleção com 47 pessoas por vaga. Confesso que no inicio tive muito medo. Que por vezes balancei.
                Mas hoje vejo como escolhi certo e já estou ansiosa para falar que sou engenheira e programadora!
                </p>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
  }
}