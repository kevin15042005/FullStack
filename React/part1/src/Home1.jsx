import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import App from './App';
import Ejercicios from './Ejercicios'; // Asegúrate de que este componente esté creado correctamente
import Etapa2  from './Etapa2';

// Componente Navbar


// Componente Home1
const Home1 = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path = "Etapa2" element={<Etapa2/>}/>
      </Routes>
    </Router>
  );
};

export default Home1;

