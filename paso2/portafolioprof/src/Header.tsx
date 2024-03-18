import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll'

interface HeaderProps {
  cambiarIdioma: () => void; 
  
}

const Header: React.FC<HeaderProps> = ({ cambiarIdioma }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className='Header'>
      <div className='language-switch'>
        <button onClick={cambiarIdioma}>Cambiar Idioma</button>
        
      </div>
      <nav className="NavigationMenu">
      <div className="toggleButton" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`menuItems ${isOpen ? 'open' : ''}`}>
        <li><Link to="aboutme" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Acerca de</Link></li>
        <li><Link to="projects" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Proyectos</Link></li>
        <li><Link to="contact" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Contacto</Link></li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;
