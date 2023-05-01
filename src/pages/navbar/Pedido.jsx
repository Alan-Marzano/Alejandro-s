import React from "react";
import { Link } from "react-router-dom";

const Pedido = () => {
    return (
        <div className="container-fluid-13 pedidos">

            <p className="pedido-p">Tu lugar ideal para compartir</p>
            
            <Link type="button" className="btn btn-outline-light btn-lg pedido-aquí" to="/Reservas">Hacé tu reserva aqui</Link>
            
        </div>
    );
}

export default Pedido; 