import React, { useContext, useState } from 'react';
import InputMask from 'react-input-mask';
import PatientContext from '../contexts/PatientContext';
import './css/PatientForm.css';

function CadastrarForm() {
  const { addPatient } = useContext(PatientContext);
  const [nome, setnome] = useState('');
  const [cpf, setCpf] = useState('');
  const [data_nascimento, setdata_nascimento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !cpf || !data_nascimento) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    // Remove caracteres especiais para armazenar apenas os números do CPF
    const formattedCpf = cpf.replace(/\D/g, '');

    const newPatient = {
      nome,
      cpf: formattedCpf,
      data_nascimento,
    };

    addPatient(newPatient);
    setnome('');
    setCpf('');
    setdata_nascimento('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setnome(e.target.value)}
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
          value={data_nascimento}
          onChange={(e) => setdata_nascimento(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Paciente</button>
    </form>
  );
}

export default CadastrarForm;
