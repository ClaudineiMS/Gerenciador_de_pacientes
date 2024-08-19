import React, { useContext, useState } from 'react';
import PatientContext from '../contexts/PatientContext';
import './css/PatientForm.css';
import { Button } from '../buttons/Button';
import { Input } from '../Inputs/Input';

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
    <form onSubmit={handleSubmit} className='form' >
      <div className='input'>
        <Input title={"Nome"} type={"text"} value={nome} onclick={(e) => setnome(e.target.value)}/>
        <Input title={"CPF"} type={"text"} value={cpf} onclick={(e) => setCpf(e.target.value)}/>
        <Input title={"Data de Nascimento"} type={"date"} value={data_nascimento} onclick={(e) => setdata_nascimento(e.target.value)}/>
      </div>
        <Button type={"submit"} title={"Cadastrar Paciente"}/>
    </form>
  );
}

export default CadastrarForm;
