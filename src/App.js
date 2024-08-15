// src/App.js
import React from 'react';
import { PatientProvider } from './contexts/PatientContext';
import PatientForm from './forms/PatientForm';

function App() {
  return (
    <PatientProvider>
      <div className="App">
        <h1>Cadastro de Pacientes</h1>
        <PatientForm />
      </div>
    </PatientProvider>
  );
}

export default App;
