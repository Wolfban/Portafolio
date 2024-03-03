import React from 'react';
import logo from './reshot-icon-code-CZ2NMXUGQ8.svg';
import Footer from './Footer';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import AboutMeImg from './user-alt-1-svgrepo-com.svg';
import ProjectImg from './restaurant-menu-svgrepo-com.svg';
import ContactImg from './user-pen-svgrepo-com.svg';
import ProjectCarousel from './CarouselImgs'
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
        <section id="aboutme" className='aboutme'>
          <img src={AboutMeImg} alt="About Me" className="aboutimg" />
          <h2>Acerca de mí</h2>
        </section>
        <section id="projects" className='projects'>
          <img src={ProjectImg} alt="Projects" className="projectimg" />
          <h2>Mis Proyectos</h2>
          <ProjectCarousel />
        </section>
        <section id="contact" className='contact'>
          <img src={ContactImg} alt="Contact" className="contactimg" />
          <h2>Contacto</h2>
        </section>
       
        


      <Footer />
    </div>
  );
}

export default App;
