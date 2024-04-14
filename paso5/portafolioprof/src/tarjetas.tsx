import React from 'react';

interface Proyecto {
    title: string;
    description: string;
    lenguajeTit: string;
    lenguajes: string;
}

interface TarjetaProps {
    proyecto: Proyecto;
}

const Tarjeta: React.FC<TarjetaProps> = ({proyecto}) => {
    return (
        <div className="project-card">
            <h2>{proyecto.title}</h2>
            <p>{proyecto.description}</p>
            <h2>{proyecto.lenguajeTit}</h2>
            <p>{proyecto.lenguajes}</p>
        </div>
    );
};

export default Tarjeta;