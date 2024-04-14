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

  const proyectos = [
      {
        title: textos.Proyecto1.titulo,
        description: textos.Proyecto1.descripcion,   
        lenguajeTit :textos.Proyecto1.lenguajeTit,
        lenguajes: textos.Proyecto1.lenguajes
      },
      {
        title: textos.Proyecto2.titulo,
        description: textos.Proyecto2.descripcion,   
        lenguajeTit :textos.Proyecto2.lenguajeTit,
        lenguajes: textos.Proyecto2.lenguajes

      },
      {
        title: textos.Proyecto3.titulo,
        description: textos.Proyecto3.descripcion,   
        lenguajeTit :textos.Proyecto3.lenguajeTit,
        lenguajes: textos.Proyecto3.lenguajes

      },
      {
        title: textos.Proyecto4.titulo,
        description: textos.Proyecto4.descripcion,   
        lenguajeTit :textos.Proyecto4.lenguajeTit,
        lenguajes: textos.Proyecto4.lenguajes

      }
    ];
    const header = [
      {
        cambiarId: textos.Proyecto1.titulo,
        aboutme: textos.Proyecto1.descripcion,   
        contact :textos.Proyecto1.lenguajeTit,
        projects: textos.Proyecto1.lenguajes
      },
    ]
   
  return (
  
    <div className="App">
     
     <Header cambiarIdioma={cambiarIdioma} textos={textos.header} />
     
      <div className='Logo'>
          
      
      </div>
      
       
        <section id="aboutme" ref={aboutMeRef} className={`aboutme ${aboutMeInView ? 'visible' : ''}`}>
       <img src={AboutMeImg} alt="About Me" className="aboutimg" />
     <h2>{textos.titulo}</h2>
     <p>{textos.descripcion}</p>
     <button className='button' onClick={handleDownload}>{textos.button}</button>

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
      <h1>{textos.redes}</h1>
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

 
</section>
        <section id="projects" ref={projectsRef} className={`projects ${projectsInView ? 'visible' : ''}`}>
          <img src={ProjectImg} alt="Projects" className="projectimg" />
          <h2>{textos.skills.tituloProyecto}</h2>
          <h1>{textos.descrProyectos}</h1>


          <div className="projects-container">
          {proyectos.map((proyecto, index) => (
          <Tarjeta key={index} proyecto={proyecto} />
        ))}
      </div>
        </section>
        <section id="contact" ref={contactRef} className={`contact ${contactInView ? 'visible' : ''}`}>
          <img src={ContactImg} alt="Contact" className="contactimg" />
          <h2>{textos.skills.tituloContacto}</h2>
          <h1>{textos.contactForm}</h1>
          <ContactForm idioma={idioma} />
        </section>
        <div className="scroll-to-top" onClick={scrollToTop}>
        <span>↑</span>
      </div>
      <Footer />
    </div>
  );
}

export default App;
