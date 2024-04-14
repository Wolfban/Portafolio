
import React, { useRef } from 'react';
import texto_es from './textos/textosEsp.json';
import texto_en from './textos/textosEng.json';
import emailjs from 'emailjs-com';
import './Form.css';

export const ContactForm = ({ idioma }: { idioma: string }) => {
  const form = useRef<HTMLFormElement>(null);
  const textos = idioma === 'es' ? texto_es : texto_en;

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   
      try {
        await emailjs.sendForm(
          'service_px05c85',
          'template_sp9hjsp',
          form.current!,
          'jV-YA7TFp6uQ-Yvqp'
        );

        console.log('Correo electrónico enviado exitosamente!');
      } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
      }
    
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="to_name">{textos.Contacto.nombre}</label>
      <input type="text" name="to_name" id="to_name" required />

      <label htmlFor="from_name">{textos.Contacto.Email}</label>
      <input type="email" name="from_name" id="from_name" required />

      <label htmlFor="message">{textos.Contacto.Mensaje}</label>
      <textarea name="message" id="message" required />

      <input type="submit" value="Send" />
    </form>
  );
};

