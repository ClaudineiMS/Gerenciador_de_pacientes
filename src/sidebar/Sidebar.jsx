import React from "react";
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

const Sidebar = () => {
    return (
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><Link to="/cadastrar">Cadastrar Pacientes</Link></li>
          <li><Link to="/listar">Listar Pacientes</Link></li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;