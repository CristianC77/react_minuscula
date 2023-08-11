import React, { useState } from 'react';

function DeletePersona({ onDataUpdate }) {
    const [num_id, setnum_id] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const persona = {
            num_id,
        };

        fetch('http://localhost/api_php/api.php?apicall=deletepersona', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(persona),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al eliminar la persona');
                } else {
                    setMessage('Persona eliminada correctamente');
                    setnum_id('');
                    onDataUpdate(); 
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="Delete-container">
            <h2>Eliminar persona</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="num_id">Número de Identificación:</label>
                    <input
                        type="text"
                        id="num_id"
                        value={num_id}
                        onChange={e => setnum_id(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Eliminar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default DeletePersona;


