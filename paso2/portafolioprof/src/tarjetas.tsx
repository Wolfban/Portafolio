import React from 'react';


interface Proyecto {
    title: string;
    description: string;
    image: string;
}
interface tarjetas {
    proyecto: Proyecto; 
}
const Tarjeta: React.FC<tarjetas> = ({proyecto}) => {
    return (
        <div className="project-card">
          <h2>{proyecto.title}</h2>
          <p>{proyecto.description}</p>  
          <img src={proyecto.image} alt={proyecto.title} />
        </div>
      );    
};
export default Tarjeta;
