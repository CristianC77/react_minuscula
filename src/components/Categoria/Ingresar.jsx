import React, { useState } from 'react';

function Ingresar({ onDataUpdate }) {
    const [tipo_categoria, settipo_categoria] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const categoria = {
            tipo_categoria,
        };

        fetch('http://localhost/api_php/api.php?apicall=createcategoria', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoria),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al crear la categoria');
                } else {
                    setMessage('Categoria creado correctamente');
                    settipo_categoria('');
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
            <h2>Ingresar Categorias</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="tipo_categoria">Nombre de la categoria:</label>
                    <input
                        type="text"
                        id="tipo_categoria"
                        value={tipo_categoria}
                        onChange={e => settipo_categoria(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear Categoria</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Ingresar;