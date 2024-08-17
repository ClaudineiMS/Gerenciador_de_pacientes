import React, { createContext, useState } from 'react';

// Criação do contexto
const PatientContext = createContext();

// URL do endpoint da API
const API_URL = 'https://apipacientes-production.up.railway.app/api/pacientes/novo/';

// Componente provedor do contexto
export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  // Função para adicionar um paciente
  const addPatient = async (patient) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patient),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar paciente');
      }

      const data = await response.json();

      // Atualiza o estado local após o sucesso na criação
      setPatients([...patients, data]);

      console.log('Paciente cadastrado com sucesso:', data);
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error.message);
    }
  };

  return (
    <PatientContext.Provider value={{ patients, addPatient }}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientContext;
