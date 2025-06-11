import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'; // Cambiado a .tsx
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render( // Agregado '!' para asegurar que el elemento existe
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);