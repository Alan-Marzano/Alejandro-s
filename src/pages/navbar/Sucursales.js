import React from "react";
import Imagenes from "../../assets/Imagenes";

const Sucursales = () => {
    return (
        <div className="sucursales">
            <h3 className="titulos">Sucursales</h3>
            <img src={Imagenes.img4} className="sucursales-img" alt="frente del restaurante con el logo del lugar" />
            <p className="sucursal">
                La Plata<br></br>
                Avenida 7, esquina 40<br />
                4123456 / 221 1234567 (solo Whatsapp)<br />
                -Lunes a Domingo de 19 a 01 am<br />

                <br />

                La Plata<br />
                Avenida 7, esquina 60<br />
                4234567 / 221 2345678 (solo Whatsapp)<br />
                -Lunes a Domingo de 19 a 01 am<br />
            </p>
        </div>
    );
}

export default Sucursales; 