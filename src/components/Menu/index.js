import React from 'react';
import Logo from '../../assets/images/brunoflix.png'
import { LogoImage, MenuWrapper } from './styled.js'
import { Link } from 'react-router-dom'
import Button from '../Button'

// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <MenuWrapper className = 'Menu'>
            <Link to = '/'>
                <LogoImage className = "Logo" src = {Logo} alt='BrunoFlix logo'/>
            </Link>

            <Button as={Link} className='ButtonLink' to = '/cadastro/video'>
                Novo Vídeo
            </Button>
        </MenuWrapper>
    )
}

export default Menu;