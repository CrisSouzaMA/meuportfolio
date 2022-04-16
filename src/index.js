import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <HashRouter hashType='hashbang'>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
