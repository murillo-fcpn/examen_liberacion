import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Al cargar, verifica si hay un token. Si hay, asumimos que está autenticado.
    const storedToken = localStorage.getItem('authToken');
    return !!storedToken; // Convertimos a booleano: true si hay token, false si no
  });

  const [token, setToken] = useState<string | null>(() => {
    // Lee el token directamente de localStorage al inicio
    return localStorage.getItem('authToken');
  });

  const navigate = useNavigate();

  // No necesitamos un useEffect para 'isAuthenticated' si lo derivamos del 'token'
  // y lo manejamos directamente al setear el token.

  // Función de login simulada
  const login = async (username: string, password: string): Promise<boolean> => {
    // Simula una llamada a API
    return new Promise((resolve) => {
      setTimeout(() => { // Simula un retraso de red
        if (username === 'user' && password === 'password') {
          const simulatedToken = 'mi chave secreta'; // Token de ejemplo
          localStorage.setItem('authToken', simulatedToken); // Guarda el token
          setIsAuthenticated(true);
          setToken(simulatedToken);
          navigate('/dashboard');
          resolve(true);
        } else {
          localStorage.removeItem('authToken'); // Asegúrate de limpiar si el login falla
          setIsAuthenticated(false);
          setToken(null);
          resolve(false);
        }
      }, 500); // 500ms de retraso
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken'); // Elimina el token al cerrar sesión
    setIsAuthenticated(false);
    setToken(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};