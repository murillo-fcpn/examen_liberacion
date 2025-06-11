import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // No usamos Navigate aquí, ya que PrivateRoute lo hace
import { AuthProvider, useAuth } from "./context/AuthContext.tsx"; // Importa el contexto
import LoginPage from "./pages/LoginPage.tsx";
import DashboardPage from "./pages/DashboasrdPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute.tsx"; // Componente para rutas protegidas

const InitialRedirect: React.FC = () => {
  const auth = useAuth(); // Obtén el estado de autenticación

  // Si está autenticado, redirige al dashboard.
  // De lo contrario, redirige a la página de login.
  if (auth?.isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<InitialRedirect />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
