import React, { useState } from 'react';
import { Link } from 'react-scroll'
import './NavigationMenu.css';

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
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
  );
};

export default NavigationMenu;