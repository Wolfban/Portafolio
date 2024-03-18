import React, {useState} from 'react';
import logo from './photo_4916161357213183202_y.jpg';
import Footer from './Footer';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import AboutMeImg from './user-alt-1-svgrepo-com.svg';
import ProjectImg from './restaurant-menu-svgrepo-com.svg';
import ContactImg from './user-pen-svgrepo-com.svg';
import ProjectCarousel from './CarouselImgs'
import {Link } from 'react-scroll';
import WhatsAppImg from './icons8-whatsapp.svg';
import LinkedInImg from './iconmonstr-linkedin-3.svg';
import GitHubImg from './Octicons-mark-github.svg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; 
import './App.css';
import { ContactForm } from './Form';
import texto_es from './textos/textosEsp.json';
import texto_en from './textos/textosEng.json';



function App() {
  const scrollToTop = () => {
    scroll.scrollToTop(); 
  };
  const [idioma, setIdioma] = useState('es');

  const cambiarIdioma = () => {
    setIdioma(idioma === 'es' ? 'en' : 'es');
  };

  const textos = idioma === 'es' ? texto_es : texto_en;
  return (
  
    <div className="App">
     
      <Header cambiarIdioma={cambiarIdioma} />
      <NavigationMenu/>
      <div className='Logo'>
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esteban Barrera's Portfolio
        </p>
      </div>
      
       
        <div className="social-links">
          <a href="https://wa.me/+50662351633" target="_blank" rel="noopener noreferrer">
            <img src={WhatsAppImg} alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://github.com/Wolfban" target="_blank" rel="noopener noreferrer">
            <img src={GitHubImg} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/esteban-alonso-barrera-araya-10b534289/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInImg} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
        <section id="aboutme" className='aboutme'>
          <img src={AboutMeImg} alt="About Me" className="aboutimg" />
          <h2>Acerca de mí</h2>
          <p> {textos.titulo} </p>
          <p> {textos.descripcion} </p>
        


        </section>
        <section id="projects" className='projects'>
          <img src={ProjectImg} alt="Projects" className="projectimg" />
          <h2>Mis Proyectos</h2>
          <ProjectCarousel />
        </section>
        <section id="contact" className='contact'>
          <img src={ContactImg} alt="Contact" className="contactimg" />
          <h2>Contacto</h2>
          <ContactForm />
        </section>
        <div className="scroll-to-top" onClick={scrollToTop}>
        <span>↑</span>
      </div>
      <Footer />
    </div>
  );
}

export default App;
