import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  return (
    <section>

      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark fondo fixed-top">
          <Link onClick={useEffect} className="navbar-brand" to="/"><img className="log" src="log.jpg" />Alejandro&apos;s</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">                
                <Link onClick={useEffect} className="nav-link" to="/">Inicio</Link>              
              </li>

              <li className="nav-item">
                <Link onClick={useEffect} className="nav-link" to="/Nosotros">Nosotros</Link>
              </li>

              <li className="nav-item">
                <Link onClick={useEffect} className="nav-link" to="/Menú">Menú</Link>
              </li>

              <li className="nav-item">
                <Link onClick={useEffect} className="nav-link" to="/Sucursales">Sucursales</Link>
              </li>

              <li className="nav-item">
                <Link onClick={useEffect} className="nav-link" to="/Reservas">Reservas</Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar; 