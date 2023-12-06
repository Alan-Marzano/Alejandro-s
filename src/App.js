import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

import Inicio from "./pages/navbar/Inicio";
import Nosotros from "./pages/navbar/Nosotros";
import Menú from "./pages/navbar/Menú";
import Sucursales from "./pages/navbar/Sucursales"; 
import Reservas from "./pages/navbar/Reservas";
import Galeria from "./pages/inicio/Galeria";

function App () {

        return (
                <div className="App">
                        <ScrollToTop />
                        <Navbar />
                        <Routes>                                
                                <Route path="/" exact element={<Inicio />} />                              
                                <Route path="/Inicio"  element={<Inicio />} />
                                <Route path="/Nosotros"  element={<Nosotros />} />
                                <Route path="/Menú"  element={<Menú />} />
                                <Route path="/Sucursales"  element={<Sucursales />} />
                                <Route path="/Reservas"  element={<Reservas />} />
                                <Route path="/Galeria"  element={<Galeria />} />   

                                <Route path="*"  element={<Navigate replace to="/" />} />                 
                        </Routes>
                        <Footer />
                </div>
        )
}

export default App;