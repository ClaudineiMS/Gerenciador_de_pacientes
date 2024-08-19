import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { PatientProvider } from './contexts/PatientContext';
import CadastrarForm from './forms/CadastrarForm';
import ListarForm from './forms/ListarForm';
import LoginForm from './forms/LoginForm';
import Sidebar from './sidebar/Sidebar';
import PrivateRoute from './route/PrivateRoute';

const App = () => {
  return (
    <PatientProvider>
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/cadastrar" element={<PrivateRoute element={<CadastrarForm />} />} />
              <Route path="/listar" element={<PrivateRoute element={<ListarForm />} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </PatientProvider>
  );
};

export default App;
