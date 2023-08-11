import React, { useState } from 'react';

function IngresoPresent({ onDataUpdate }) {
    const [nom_presentacion, setnom_presentacion] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const presentacion = {
            nom_presentacion,
        };

        fetch('http://localhost/api_php/api.php?apicall=createpresentacion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(presentacion),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al crear la presentación');
                } else {
                    setMessage('Presentación creada correctamente');
                    setnom_presentacion('');
                    onDataUpdate(); // Llama a la función de actualización de datos en el componente padre
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="ingresar-container">
            <h2>Ingresar Presentación</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nom_presentacion">Nombre de la presentación:</label>
                    <input
                        type="text"
                        id="nom_presentacion"
                        value={nom_presentacion}
                        onChange={e => setnom_presentacion(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear Presentación</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default IngresoPresent;