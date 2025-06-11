import React from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import '../styles/dashboard.css';

function Header() {
  const auth = useAuth();
  const isAuthenticated = auth?.isAuthenticated;

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h2>Dashboard</h2>
      </div>
      <div className="header-right">
        {isAuthenticated && <p>Bienvenido, Usuario!</p>}
      </div>
    </header>
  );
}

export default Header;