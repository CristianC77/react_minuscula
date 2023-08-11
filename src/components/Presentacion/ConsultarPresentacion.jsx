import React, { useEffect, useState } from 'react';

function ConsultaPresent({ dataUpdated }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dataUpdated]); // Agregar dataUpdated como dependencia

    const fetchData = () => {
        fetch('http://localhost/api_php/api.php?apicall=readpresentacion')
            .then(response => response.json())
            .then(data => setData(data.contenido))
            .catch(error => console.log(error));
    };

    return (
        <div className="consultar-container">
            <h2>Elementos</h2>
            <ul>
                {Array.isArray(data) ? (
                    data.map(item => (
                        <li key={item.id_presentacion}>
                            <p>Id presentación: {item.id_presentacion}</p>
                            <p>Nombre de la presentación: {item.nom_presentacion}</p>
                        </li>
                    ))
                ) : (
                    <p>No hay datos disponibles</p>
                )}
            </ul>
        </div>
    );


    
}

export default ConsultaPresent;