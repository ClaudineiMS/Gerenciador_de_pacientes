import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Inputs/Input';
import { Button } from '../buttons/Button';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Checa se é o usuário padrão
    if (username === 'admin' && password === 'admin') {
      // Faz login com o usuário padrão
      sessionStorage.setItem('access_token', 'fake-token');
      navigate('/listar');
    } 
  };

  return (
    <form onSubmit={handleLogin}>
        <Input title={"Usuário"} type={"text"} value={username} onclick={(e) => setUsername(e.target.value)}/>
        <Input title={"Senha"} type={"password"} value={password} onclick={(e) => setPassword(e.target.value)}/>
        <Button title={"Login"}  type={"submit"}/>   
    </form>
  );
};

export default LoginForm;
