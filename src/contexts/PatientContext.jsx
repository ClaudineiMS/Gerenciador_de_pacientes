import React, { createContext, useState } from 'react';

// Criação do contexto
const PatientContext = createContext();

// Componente provedor do contexto
export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  // Função para adicionar um paciente
  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };
  console.log(patients)
  return (
    <PatientContext.Provider value={{ patients, addPatient }}>
      {children}
    </PatientContext.Provider>
  );
};

export default PatientContext;