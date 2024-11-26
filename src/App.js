import React from 'react';
import './App.css';
import logo from './stactic/upra.jpeg';
import campesino from './stactic/campesino.webp'; // Asegúrate de tener una imagen llamada campesino.webp en tu carpeta static

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <div className="header-left">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="header-right">
            <div className="header-text">
              Herramienta analítica para la estimación de los precios de tierras rurales
            </div>
          </div>
        </div>
      </header>
      <main className="App-main">
        <div className="main-left">
          <img src={campesino} className="Main-image" alt="campesino" />
        </div>
        <div className="main-right">
          <div className="main-text">
            Seleccione las características de su predio
          </div>
          <form className="main-form">
            <input type="text" placeholder="Característica 1" />
            <input type="text" placeholder="Característica 2" />
            <input type="text" placeholder="Característica 3" />
            <button type="submit">Estimar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;