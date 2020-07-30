import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

//const de erro - desafio de colocar um jogo na página de erro
const paginaErro = () => <div>Página 404</div>

//exact - exatamente o path 
//ordem importa 
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/Categoria' component={CadastroCategoria} />
      <Route path='/' component={Home} exact/> 
      <Route component={paginaErro} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
