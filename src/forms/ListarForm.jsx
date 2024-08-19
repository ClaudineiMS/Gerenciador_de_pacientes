import React from "react";
import { useState, useEffect } from "react";
import EditPatientForm from "./EditarForm";
import './css/PatientForm.css';
import { Button } from "../buttons/Button";

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

 // Função para salvar as alterações feitas no paciente
  const handleSave = (updatedPatient) => {
    const updatedPatientsList = patients.map((patient) => {
      if (patient.id === editingPatient.id) {
        // Se o ID do paciente atual corresponder ao ID do paciente em edição
        return { ...patient, ...updatedPatient };
      }
      
      return patient;
    });

    // Atualiza o estado com a lista de pacientes atualizada
    setPatients(updatedPatientsList);

    // Limpa o estado de edição do paciente
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
            <Button title={"Editar"} onClick={() => setEditingPatient(patient)} className={"edit-button"} type={"button"}/>
            <Button title={"Deletar"} onClick={() => deletePatient(patient.id)} className={"delete-button"} type={"button"}/>
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