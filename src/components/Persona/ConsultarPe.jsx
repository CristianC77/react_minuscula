import React, { useEffect, useState } from 'react';

function ConsultarPer({ dataUpdated }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dataUpdated]); // Agregar dataUpdated como dependencia

    const fetchData = () => {
        fetch('http://localhost/api_php/api.php?apicall=readpersona') 
            .then(response => response.json())
            .then(data => setData(data.contenido))
            .catch(error => console.log(error));
    };

    return (
        <div className="consultar-container">
            <h2>Personas</h2>
            <ul>
                {Array.isArray(data) ? (
                    data.map(persona => (
                        <li key={persona.num_id}>
                            <p>Número de ID: {persona.num_id}</p>
                            <p>Tipo de ID: {persona.tipo_id}</p>
                            <p>Nombre: {persona.prim_nombre} {persona.segun_nombre}</p>
                            <p>Apellido: {persona.prim_apellido} {persona.segun_apellido}</p>
                            <p>Teléfono: {persona.telefono}</p>
                            <p>Dirección: {persona.direccion}</p>
                            <p>Nombre de Usuario: {persona.nom_usuario}</p>
                            <p>Contraseña de Usuario: {persona.contra_usuario}</p>
                        </li>
                    ))
                ) : (
                    <p>No hay datos disponibles</p>
                )}
            </ul>
        </div>
    );
}

export default ConsultarPer;
