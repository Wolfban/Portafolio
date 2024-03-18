import React, {useState} from 'react';
import logo from './photo_4916161357213183202_y.jpg';
import Footer from './Footer';
import Header from './Header';
import AboutMeImg from './user-alt-1-svgrepo-com.svg';
import ProjectImg from './restaurant-menu-svgrepo-com.svg';
import ContactImg from './user-pen-svgrepo-com.svg';
import {Link } from 'react-scroll';
import WhatsAppImg from './icons8-whatsapp.svg';
import LinkedInImg from './iconmonstr-linkedin-3.svg';
import GitHubImg from './Octicons-mark-github.svg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; 
import './App.css';
import { ContactForm } from './Form';
import texto_es from './textos/textosEsp.json';
import texto_en from './textos/textosEng.json';
import { useInView } from 'react-intersection-observer';

import Tarjeta from './tarjetas';

const proyectos = [
  {
    title: 'Proyecto de Patrones',
    
    description: 'Proyecto de un videojuego hecho en C# y Unity utilizando distintos patrones de diseño',
   image: ''
  },

  {
    title: 'Proyecto Web Services',
    description: 'Proyecto enfocado en la creación de servicios en linea utilizando Azure .',
    image: ''
  }
]

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop(); 
  };
  const [idioma, setIdioma] = useState('es');

  const cambiarIdioma = () => {
    setIdioma(idioma === 'es' ? 'en' : 'es');
  };

  const textos = idioma === 'es' ? texto_es : texto_en;

  const [aboutMeRef, aboutMeInView] = useInView({ threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.2 });
  const handleDownload = () => {
   
    const pdfUrl = process.env.PUBLIC_URL + '/Esteban Barrera.pdf';

   
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Esteban_Barrera.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  
    <div className="App">
     
      <Header cambiarIdioma={cambiarIdioma} />
     
      <div className='Logo'>
          
      
      </div>
      
       
        <section id="aboutme" ref={aboutMeRef} className={`aboutme ${aboutMeInView ? 'visible' : ''}`}>
       <img src={AboutMeImg} alt="About Me" className="aboutimg" />
     <h2>{textos.titulo}</h2>
    
     <p>{textos.descripcion}</p>

     <div className="skills-container">
     <div>
       <h3>{textos.skills.titulo_blandas}</h3>
        <ul>
         {textos.skills.habilidades_blandas.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
         ))}
        </ul>
       </div>

      <div>
        <h3>{textos.skills.titulo_tecnicas}</h3>
        <ul>
          {textos.skills.habilidades_tecnicas.map((habilidad, index) => (
           <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </div>
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

  <button className='button' onClick={handleDownload}>{textos.button}</button>
</section>
        <section id="projects" ref={projectsRef} className={`projects ${projectsInView ? 'visible' : ''}`}>
          <img src={ProjectImg} alt="Projects" className="projectimg" />
          <h2>{textos.skills.tituloProyecto}</h2>
          <div className="projects-container">
        {proyectos.map((proyecto, index) => (
          <Tarjeta key={index} proyecto={proyecto} />
        ))}
      </div>
        </section>
        <section id="contact" ref={contactRef} className={`contact ${contactInView ? 'visible' : ''}`}>
          <img src={ContactImg} alt="Contact" className="contactimg" />
          <h2>{textos.skills.tituloContacto}</h2>
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
