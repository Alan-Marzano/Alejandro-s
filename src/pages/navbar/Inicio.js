import React from "react";
import Carrusel from "../../components/Carrusel";
import Presentación from "../../components/Presentación";
import Espacios from "../../components/Espacios";
import Pedido from "./Pedido";


const Inicio = () => {
    return (
        <div>
            <Carrusel />
            <Presentación />
            <Espacios />
            <Pedido />
        </div>

    );
}

export default Inicio; 