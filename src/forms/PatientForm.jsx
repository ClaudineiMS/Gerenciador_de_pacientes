// src/forms/PatientForm.js
import React, { useContext, useState } from 'react';
import InputMask from 'react-input-mask';
import PatientContext from '../contexts/PatientContext';
import './PatientForm.css';

function PatientForm() {
  const { addPatient } = useContext(PatientContext);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !cpf || !birthDate) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    // Remove caracteres especiais para armazenar apenas os números do CPF
    const formattedCpf = cpf.replace(/\D/g, '');

    const newPatient = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      cpf: formattedCpf,
      birthDate,
    };

    addPatient(newPatient);
    setName('');
    setCpf('');
    setBirthDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>CPF:</label>
        <InputMask
          mask="999.999.999-99" // Máscara do CPF
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        >
          {(inputProps) => <input {...inputProps} type="text" />}
        </InputMask>
      </div>
      <div>
        <label>Data de Nascimento:</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Paciente</button>
    </form>
  );
}

export default PatientForm;
