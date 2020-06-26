import React from "react";
import "../assets/css/App.css";

import Doctora from "../assets/images/doctora.jpg";

function App() {
  return (
    <section className="App">
      <div className="container">
        <div className="row1">
          <img className="avatar" src={Doctora} alt="" />
          <h2>Dra. María José Domínguez</h2>
          <p>Especialista en Pediatría</p>
          <p>Cl. 123 #7-60 Edificio Medical Center</p>
        </div>
        <div className="row2">
          <h2 className="mobile">Perfil profesional</h2>
          <p className="mobile">
            El doctor Juan Pablo Riveros tiene más de 25 años de experiencia
            como Cardiólogo e Internista, su énfasis ha sido la prevención y el
            tratamiento de todo tipo de enfermedades cardiovasculares y
            metabólicas como la diabetes, el sobrepeso y los factores de riesgo
            asociados.
          </p>
          <h2 className="mobile">Especialidades</h2>
          <ul className="mobile">
            <li>Cirugía cardiovascular</li>
            <li>Electrocardiograma</li>
            <li>Hipertensión</li>
            <li>Insuficiencia cardíaca</li>
          </ul>

          <div className="footer">
            <p className="desktop">
              <span>Disponible hoy:</span> Martes, 11 de septiembre
            </p>
            <p className="mobilex">
              <span>Hoy:</span> Mar, 11 de sep
            </p>
            <button>Pedir cita</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
