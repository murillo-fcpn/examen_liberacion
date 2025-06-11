import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx"; // Asegúrate de que la ruta sea correcta

interface  PrivateRouteProps {
    children: React.ReactNode;  
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    // Si el usuario no está autenticado, redirige a la página de inicio
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Si está autenticado, renderiza los hijos (la página protegida)
    return <>{children}</>;
};

export default PrivateRoute;