import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';
import '../styles/dashboard.css';

function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>NETFLIX</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/movies" className={({ isActive }) => (isActive ? 'active' : '')}>
              Películas
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/series" className={({ isActive }) => (isActive ? 'active' : '')}>
              Series
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
              Mi Perfil
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button onClick={logout} className="logout-btn">Cerrar Sesión</button>
      </div>
    </aside>
  );
}

export default Sidebar;