import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import App from './App';
import Ejercicios from './Ejercicios'; // Asegúrate de que este componente esté creado correctamente
import Etapa2  from './Etapa2';

// Componente Navbar
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            App
          </NavLink>
        </li>
        <li>
          <NavLink to="/ejercicios" className={({ isActive }) => (isActive ? "active" : "")}>
            Ejercicios
          </NavLink>
        </li>
        <li>
            <NavLink to ="/Etapa2"className={({isActive})=>(isActive?"active":"")}
            >Etapa2</NavLink>
        </li>
      </ul>
    </nav>
  );
};

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

