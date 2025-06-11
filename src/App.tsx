import React from "react";
import { Routes, Route } from "react-router-dom"; // No usamos Navigate aquí, ya que PrivateRoute lo hace
import { AuthProvider } from "./context/AuthContext.tsx"; // Importa el contexto
import LoginPage from './pages/LoginPage.tsx';
import DashboardPage from './pages/DashboasrdPage.tsx';
import HomePage from './pages/HomePage.tsx';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute.tsx'; // Componente para rutas protegidas

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas protegidas (Dashboard y sus sub-rutas) */}
        <Route
          path="/dashboard/*" // Usa /* para rutas anidadas
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        {/* Ruta para cualquier otra cosa no encontrada */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
