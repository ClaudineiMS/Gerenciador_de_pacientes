import React from "react";
import { useState, useEffect } from "react";
import './css/PatientForm.css';
import EditPatientForm from "./EditarForm";

const ListPatients = () => {
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);

  // Função para buscar pacientes da API
  const fetchPatients = async () => {
    try {
      const response = await fetch('https://apipacientes-production.up.railway.app/api/pacientes/');
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
    }
  };

  // Função para deletar um paciente
  const deletePatient = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar este paciente?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://apipacientes-production.up.railway.app/api/pacientes/${id}/deletar/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setPatients(patients.filter(patient => patient.id !== id));
        alert("Paciente deletado com sucesso!");
      } else {
        alert("Erro ao deletar o paciente.");
      }
    } catch (error) {
      console.error('Erro ao deletar paciente:', error);
      alert("Erro ao deletar o paciente.");
    }
  };

  // Função para atualizar o estado do paciente após a edição
  const handleSave = (updatedPatient) => {
    setPatients(
      patients.map((patient) =>
        patient.id === editingPatient.id ? { ...patient, ...updatedPatient } : patient
      )
    );
    setEditingPatient(null);
  };

  // useEffect para buscar os pacientes quando o componente é montado
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
            <button 
              className="edit-button"
              onClick={() => setEditingPatient(patient)}
            >
              Editar
            </button>
            <button 
              className="delete-button"
              onClick={() => deletePatient(patient.id)}
            >
              Deletar
            </button>
          </div>
        ))}
      </div>
      {editingPatient && (
        <EditPatientForm 
          patient={editingPatient} 
          onCancel={() => setEditingPatient(null)} 
          onSave={handleSave} 
        />
      )}
    </div>
  );
};

  
  export default ListPatients;