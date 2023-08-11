import React, { useState } from 'react';
// import logo from './assets/logo.svg';
import './styles/App.css';
import ConsultarCate from './components/Categoria/ConsultarCate';
import IngresarCate from './components/Categoria/IngresarCate';
import ActualizarCate from './components/Categoria/ActualizarCate';
import EliminarCate from './components/Categoria/EliminarCate';
import ConsultaPresent from './components/Presentacion/ConsultarPresentacion';
import IngresoPresent from './components/Presentacion/IngresarPresentacion';
import ActualizarPresent from './components/Presentacion/UpdatePresentacion';
import EliminarPresent from './components/Presentacion/DeletePresentacion';
import IngresarPe from "./components/Persona/IngresarPe";
import ConsultaPe from "./components/Persona/ConsultarPe";
import ModificarPe from './components/Persona/ModificarPe';
import Delete from './components/Persona/EliminarPe';



function App() {
    const [dataUpdated, setDataUpdated] = useState(false);

    const handleDataUpdate = () => {
        setDataUpdated(true);
    };

    return (
        <div className="App">
            {/* <header className="App-header">
              
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Editar el archivo <code>src/App.js</code> y guardar para recargar.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
            <h1>Ejemplo con React (CRUD)</h1>
            <div>
                <IngresarCate onDataUpdate={handleDataUpdate} />
            </div>
            <div>
                <ConsultarCate dataUpdated={dataUpdated} />
            </div>
            <div>
                <ActualizarCate dataUpdated={handleDataUpdate} />
            </div>
            <div>
                <EliminarCate onDataUpdate={handleDataUpdate}/>
            </div>
            {/* <div>
                <IngresoPresent onDataUpdate={handleDataUpdate} />
            </div>
            <div>
                <ConsultaPresent dataUpdated={dataUpdated} />
            </div>
            <div>
                <ActualizarPresent dataUpdated={handleDataUpdate} />
            </div>
            <div>
                <EliminarPresent onDataUpdate={handleDataUpdate}/>
            </div>
            <div>
                <IngresarPe onDataUpdate={handleDataUpdate} />
            </div>
            <div>
                <ConsultaPe dataUpdated={dataUpdated} />
            </div>
            <div>
                <ModificarPe dataUpdated={handleDataUpdate} />
            </div>
            <div>
                <Delete onDataUpdate={handleDataUpdate}/>
            </div> */}
        </div>
    );   
}

export default App;
