import React, { useState } from 'react';

function EliminarCate({ onDataUpdate }) {
    const [id_categoria, setid_categoria] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const persona = {
            id_categoria,
        };

        fetch('http://localhost/api_php/api.php?apicall=deletecategoria', {
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
                    setMessage('Presentacion eliminada correctamente');
                    setid_categoria('');
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
            <h2>Eliminar categoria</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id_categoria">Id de la categoria:</label>
                    <input
                        type="text"
                        id="id_categoria"
                        value={id_categoria}
                        onChange={e => setid_categoria(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Eliminar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default EliminarCate;


