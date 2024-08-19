import React, { useState } from 'react';
import './css/PatientForm.css';
import { Button } from '../buttons/Button';
import { Input } from '../Inputs/Input';

const EditPatientForm = ({ patient, onCancel, onSave }) => {
  const [nome, setNome] = useState(patient.nome);
  const [cpf, setCpf] = useState(patient.cpf);
  const [dataNascimento, setDataNascimento] = useState(patient.data_nascimento);

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPatient = {
      nome,
      cpf,
      data_nascimento: dataNascimento,
    };

    try {
      const response = await fetch(`https://apipacientes-production.up.railway.app/api/pacientes/${patient.id}/editar/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPatient),
      });

      if (response.ok) {
        onSave(updatedPatient);
        alert("Paciente atualizado com sucesso!");
      } else {
        alert("Erro ao atualizar o paciente.");
      }
    } catch (error) {
      console.error('Erro ao atualizar paciente:', error);
      alert("Erro ao atualizar o paciente.");
    }
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <h2>Editar Paciente</h2>
      <Input title={"Nome"} type={"text"} value={nome} onclick={(e) => setNome(e.target.value)}/>
      <Input title={"CPF"} type={"text"} value={cpf} onclick={(e) => setCpf(e.target.value)}/>
      <Input title={"Data de Nascimento"} type={"date"} value={dataNascimento} onclick={(e) => setDataNascimento(e.target.value)}/>
      <Button title={"Salvar"}  className={"save-button"} type={"submit"}/>
      <Button title={"Cancelar"}  className={"cancel-button"} type={"button"} onClick={onCancel}/>   
    </form>
  );
};

export default EditPatientForm;
