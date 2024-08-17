import React from 'react';
import { PatientProvider } from './contexts/PatientContext';
import CadastrarForm from './forms/CadastrarForm';
import ListarForm from  './forms/ListarForm';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <PatientProvider>
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
            <Routes>
              <Route path="/cadastrar" element={<CadastrarForm />} />
              <Route path="/listar" element={<ListarForm />} />
              {/* <Route path="/editar" element={<EditPatient />} />
              <Route path="/deletar" element={<DeletePatient />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </PatientProvider>
  );
}

export default App;
