import React, { useState } from 'react';
// import logo from './assets/logo.svg';
import './styles/App.css';
import Consultar from './components/Categoria/Consultar.jsx';
import Ingresar from './components/Categoria/Ingresar.jsx';
import ConsultaPresent from './components/Presentacion/ConsultarPresentacion';
import IngresoPresent from './components/Presentacion/IngresarPresentacion';
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
            <h1>Ejemplo con React</h1>
            {/* <div>
                <Ingresar onDataUpdate={handleDataUpdate} />
            </div>
            <div>
                <Consultar dataUpdated={dataUpdated} />
            </div>

            <div>
                <IngresoPresent dataUpdated={handleDataUpdate} />
            </div>
            <div>
                <ConsultaPresent dataUpdated={dataUpdated} />
            </div> */}
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
            </div>
        </div>
    );   
}

export default App;
