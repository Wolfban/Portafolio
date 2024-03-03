import React from 'react';
import logo from './reshot-icon-code-CZ2NMXUGQ8.svg';
import Footer from './Footer';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import './App.css';

function App() {
  return (
  
    <div className="App">
      
      <Header />
      <NavigationMenu/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esteban Barrera's Portfolio
        </p>
        <a
          className="App-link"
          href="https://github.com/Wolfban"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
        <section id='aboutme' className='aboutme'>
           <h2>Acerca de mi</h2>
        </section>
        <section id='projects'className='projects'>
           <h2>Mis Proyectos</h2>
        </section>
        <section id='contact' className='contact'>
           <h2>Contacto</h2>
        </section>
       
        


      <Footer />
    </div>
  );
}

export default App;
