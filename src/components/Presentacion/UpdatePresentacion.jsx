import React, {useState} from "react";

function ActualizarPresent({ onDataUpdate }) {
    const [id_presentacion, setid_presentacion] = useState('');
    const [nom_presentacion, setnom_presentacion] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();

        const presentUpdate = {
            id_presentacion,
            nom_presentacion,
        };

        fetch(`http://localhost/api_php/api.php?apicall=updatepresentacion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(presentUpdate),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al actualizar la presentacion');
                } else {
                    setMessage('presentacion actualizada correctamente');
                    onDataUpdate(); 
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="actualizar-container">
            <h2>Actualizar presentacion</h2>
            <form onSubmit={handleUpdate}>
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
                <div>
                    <label htmlFor="nom_presentacion">Tipo de presentacion:</label>
                    <input
                        type="text"
                        id="nom_presentacion"
                        value={nom_presentacion}
                        onChange={e => setnom_presentacion(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Actualizar presentacion</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ActualizarPresent;
