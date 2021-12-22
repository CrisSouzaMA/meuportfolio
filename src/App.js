import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import projects from '../src/data/projects';
import './App.css'

class App extends React.Component{ 
  constructor(){
    super();
    this.state ={
      projectGit: [],
      proj: '',
    }
  }

  componentDidMount(){
    const projGit = projects.map((data) => ({
      id: data.id,
      nome: data.nome,
      modulo: data.modulo,
      repositorio: data.repositorio,
      image: data.image,
      sobre: data.sobre,
    }));
    this.setState({projectGit: projGit, proj: projGit[0].nome })
  }

  handleOnChange = ({target: {value: proj}}) => {
    this.setState({proj})
  }

  render(){
    const {projectGit, proj} = this.state
    console.log(proj);
    return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/portfolio" render={(props) => <Portfolio projectGit={projectGit} proj={proj} handleOnChange={this.handleOnChange} {...props} /> } />
        <Route exact path="*" component={ Home } />
      </Switch>
      <Footer />
    </div>
  );
}
}

export default App;
