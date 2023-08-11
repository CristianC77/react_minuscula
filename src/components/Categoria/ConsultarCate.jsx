import React, { useEffect, useState } from 'react';

function ConsultarCate({ dataUpdated }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dataUpdated]); // Agregar dataUpdated como dependencia

    const fetchData = () => {
        fetch('http://localhost/api_php/api.php?apicall=readcategoria')
            .then(response => response.json())
            .then(data => setData(data.contenido))
            .catch(error => console.log(error));
    };

    return (
        <div className="consultar-container">
            <h2>Categorias</h2>
            <ul>
                {Array.isArray(data) ? (
                    data.map(item => (
                        <li key={item.id_categoria}>
                            <p>No categoria: {item.id_categoria}</p>
                            <p>Nombre de la categoria: {item.tipo_categoria}</p>
                        </li>
                    ))
                ) : (
                    <p>No hay datos disponibles</p>
                )}
            </ul>
        </div>
    );


    
}

export default ConsultarCate;