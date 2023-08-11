import React, { useState } from 'react';

function ActualizarCate({ onDataUpdate }) {
    const [id_categoria, setid_categoria] = useState('');
    const [tipo_categoria, settipo_categoria] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();

        const personaUpdate = {
            id_categoria,
            tipo_categoria,
        };

        fetch(`http://localhost/api_php/api.php?apicall=updatecategoria`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(personaUpdate),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al actualizar la categoria');
                } else {
                    setMessage('categoria actualizada correctamente');
                    onDataUpdate(); 
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="ingresar-container">
            <h2>Actualizar categoria</h2>
            <form onSubmit={handleUpdate}>
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
                <div>
                    <label htmlFor="tipo_categoria">Tipo de categoria:</label>
                    <input
                        type="text"
                        id="tipo_categoria"
                        value={tipo_categoria}
                        onChange={e => settipo_categoria(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Actualizar categoria</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ActualizarCate;
