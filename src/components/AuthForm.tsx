import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import { useAuth } from '../context/AuthContext'; // Asegúrate de que la ruta sea correcta
import '../styles/index.css';

function AuthForm() {
  const [username, setUsername] = useState<string>(''); // Anotación de tipo
  const [password, setPassword] = useState<string>(''); // Anotación de tipo
  const [error, setError] = useState<string>(''); // Anotación de tipo
  const auth = useAuth();
  const login = auth?.login;

  const handleSubmit = (e: React.FormEvent) => { // Anotación de tipo para el evento de formulario
    e.preventDefault();
    setError('');
    if (!username || !password) { // Simple validación básica
      setError('Por favor, ingresa usuario y contraseña.');
      return;
    }
    if (login) {
      login?.(username, password).catch(() => {
        setError('Error al iniciar sesión.');
      });
    } else {
      setError('No se pudo acceder al contexto de autenticación.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} // Anotación de tipo para el evento de cambio
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} // Anotación de tipo para el evento de cambio
          required
        />
      </div>
      <button type="submit" className="btn-primary">Entrar</button>
      <p className="signup-link">
        ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link> (no implementado en este ejemplo)
      </p>
    </form>
  );
}

export default AuthForm;
