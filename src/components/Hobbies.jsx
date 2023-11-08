import React from 'react';

function Hobbies() {
    // Datos ficticios de hobbies
    const hobbies = [
        {
            id: 1,
            nombre: 'Jugar computadora',
            descripcion: 'Jugar a juegos como League of legends, Cs Global ofensive y otros.',
        },
        {
            id: 2,
            nombre: 'Anime',
            descripcion: 'Visualizar anime tanto de la demografica seinen como shonen.',
        },
        {
            id: 3,
            nombre: 'Juntada con amigos',
            descripcion: 'Juntada con amigos a tomar una cerveza, compartir una pizza, etc.',
        },
    ];

    return (
        <div className="container">
            <h2>Mis Hobbies</h2>
            <ul className="list-group">
                {hobbies.map((hobby) => (
                    <li key={hobby.id} className="list-group-item">
                        <h3>{hobby.nombre}</h3>
                        <p>{hobby.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;

