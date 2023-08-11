import React, { useState } from 'react';

function IngresarPe({ onDataUpdate }) {
    const [num_id, setnum_id] = useState('');
    const [tipo_id, settipo_id] = useState('');
    const [prim_nombre, setprim_nombre] = useState('');
    const [segun_nombre, setsegun_nombre] = useState('');
    const [prim_apellido, setprim_apellido] = useState('');
    const [segun_apellido, setsegun_apellido] = useState('');
    const [telefono, settelefono] = useState('');
    const [direccion, setdireccion] = useState('');
    const [nom_usuario, setnom_usuario] = useState('');
    const [contra_usuario, setcontra_usuario] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const persona = {
            num_id,
            tipo_id,
            prim_nombre,
            segun_nombre,
            prim_apellido,
            segun_apellido,
            telefono,
            direccion,
            nom_usuario,
            contra_usuario,
        };

        fetch('http://localhost/api_php/api.php?apicall=createpersona', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(persona),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al crear la persona');
                } else {
                    setMessage('Persona creada correctamente');
                    setnum_id('');
                    settipo_id('');
                    setprim_nombre('');
                    setsegun_nombre('');
                    setprim_apellido('');
                    setsegun_apellido('');
                    settelefono('');
                    setdireccion('');
                    setnom_usuario('');
                    setcontra_usuario('');
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
            <h2>Ingresar Persona</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="num_id">Numero de Identificacion:</label>
                    <input
                        type="text"
                        id="num_id"
                        value={num_id}
                        onChange={e => setnum_id(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tipo_id">Tipo de ID:</label>
                    <input
                        type="text"
                        id="tipo_id"
                        value={tipo_id}
                        onChange={e => settipo_id(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="prim_nombre">Primer Nombre:</label>
                    <input
                        type="text"
                        id="prim_nombre"
                        value={prim_nombre}
                        onChange={e => setprim_nombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="segun_nombre">Segundo Nombre:</label>
                    <input
                        type="text"
                        id="segun_nombre"
                        value={segun_nombre}
                        onChange={e => setsegun_nombre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="prim_apellido">Primer Apellido:</label>
                    <input
                        type="text"
                        id="prim_apellido"
                        value={prim_apellido}
                        onChange={e => setprim_apellido(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="segun_apellido">Segundo Apellido:</label>
                    <input
                        type="text"
                        id="segun_apellido"
                        value={segun_apellido}
                        onChange={e => setsegun_apellido(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="text"
                        id="telefono"
                        value={telefono}
                        onChange={e => settelefono(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        value={direccion}
                        onChange={e => setdireccion(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="nom_usuario">Nombre de Usuario:</label>
                    <input
                        type="text"
                        id="nom_usuario"
                        value={nom_usuario}
                        onChange={e => setnom_usuario(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contra_usuario">Contraseña de Usuario:</label>
                    <input
                        type="password"
                        id="contra_usuario"
                        value={contra_usuario}
                        onChange={e => setcontra_usuario(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear Persona</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default IngresarPe;
