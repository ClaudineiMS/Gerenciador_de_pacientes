import React from "react";
import { useState, useEffect } from "react";
import './css/PatientForm.css';

const ListarForm =() => {

  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const response = await fetch('https://apipacientes-production.up.railway.app/api/pacientes/');
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
    }
  };

 
  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className="patient-list">
      <h2>Pacientes Cadastrados</h2>
      <div className="cards-container">
        {patients.map((patient) => (
          <div key={patient.id} className="patient-card">
            <h3>{patient.nome}</h3>
            <p><strong>CPF:</strong> {patient.cpf}</p>
            <p><strong>Data de Nascimento:</strong> {patient.data_nascimento}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListarForm