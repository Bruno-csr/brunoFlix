import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
// import TelaLoguin from './pages/cadastro/loguin'

// const de erro - desafio de colocar um jogo na página de erro
const paginaErro = () => <div>Página 404</div>;

// exact - exatamente o path
// ordem importa
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={paginaErro} />
      {/* <Route path="/loguin" component={TelaLoguin} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
