import React from "react";
import './css/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><Link to="/cadastrar">Cadastro de Pacientes</Link></li>
          <li><Link to="/listar">Listar Pacientes</Link></li>
          <li><Link to="/editar">Editar Pacientes</Link></li>
          <li><Link to="/deletar">Deletar Pacientes</Link></li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;