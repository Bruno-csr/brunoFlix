/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/brunoflix.png';
// eslint-disable-next-line import/extensions
import { LogoImage, MenuWrapper } from './styled.js';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="BrunoFlix logo" />
      </Link>

      {/* <Button as={Link} className="ButtonLink" to="/loguin">
        Fazer Loguin
      </Button> */}

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
