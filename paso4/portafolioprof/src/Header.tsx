import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  cambiarIdioma: () => void; // Función para cambiar el idioma
}

const Header: React.FC<HeaderProps> = ({ cambiarIdioma }) => {
  return (
    <header className='Header'>
      <h1>Esteban Barrera</h1>
      <div className='language-switch'>
        <button onClick={cambiarIdioma}>Cambiar Idioma</button>
      </div>
    </header>
  );
};

export default Header;
