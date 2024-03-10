
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

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
      <label htmlFor="to_name">Nombre</label>
      <input type="text" name="to_name" id="to_name" required />

      <label htmlFor="from_name">Email</label>
      <input type="email" name="from_name" id="from_name" required />

      <label htmlFor="message">Mensaje</label>
      <textarea name="message" id="message" required />

      <input type="submit" value="Send" />
    </form>
  );
};

