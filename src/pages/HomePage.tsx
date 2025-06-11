import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";


function HomePage() {
    return (
        <div className="home-page">
            <h1>Bienvenido a la Página de Inicio</h1>
            <p>Esta es la página principal de tu aplicación.</p>
            <Link to="/login" className="btn btn-primary">Iniciar Sesión</Link>
        </div>
    )
}

export default HomePage;