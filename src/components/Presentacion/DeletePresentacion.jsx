import React, { useState } from 'react';

function EliminarPresent({ onDataUpdate }) {
    const [id_presentacion, setid_presentacion] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const present = {
            id_presentacion,
        };

        fetch('http://localhost/api_php/api.php?apicall=deletepresentacion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(present),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al eliminar la presentacion');
                } else {
                    setMessage('presentacion eliminada correctamente');
                    setid_presentacion('');
                    onDataUpdate(); 
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="eliminar-container">
            <h2>Eliminar presentacion</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id_presentacion">Id de la presentacion:</label>
                    <input
                        type="text"
                        id="id_presentacion"
                        value={id_presentacion}
                        onChange={e => setid_presentacion(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Eliminar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default EliminarPresent;


