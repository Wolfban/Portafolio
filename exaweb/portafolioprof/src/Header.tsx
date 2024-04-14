import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';

interface HeaderProps {
  cambiarIdioma: () => void; 
  textos: HeaderTexts;
}

interface HeaderTexts {
  cambiarId: string;
  aboutme: string;
  contact: string;
  projects: string;
}

const Header: React.FC<HeaderProps> = ({ cambiarIdioma, textos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='Header'>
      <div className='language-switch'>
        <button onClick={cambiarIdioma}>{textos.cambiarId}</button>
      </div>
      <nav className="NavigationMenu">
        <div className="toggleButton" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`menuItems ${isOpen ? 'open' : ''}`}>
          <li><Link to="aboutme" spy={true} smooth={true} duration={500} onClick={toggleMenu}>{textos.aboutme}</Link></li>
          <li><Link to="projects" spy={true} smooth={true} duration={500} onClick={toggleMenu}>{textos.projects}</Link></li>
          <li><Link to="contact" spy={true} smooth={true} duration={500} onClick={toggleMenu}>{textos.contact}</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


