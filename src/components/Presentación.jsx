import React from "react";
import Imagenes from "../assets/Imagenes";

const Presentación = () => {
    return (

        <div className="container-fluid-2">
            <div>
                <img src={Imagenes.img1} className="img-p" alt="imagen de restaurante" />
                <div>
                    <h1>Alejandro&apos;s</h1>
                    <p className="párrafo">Alojado en el centro de La Plata, <b>Alejandro&apos;s</b> brinda un espacio agradable, tanto en el interior como el exterior del local, usted podrá hallar el lugar perfecto para difrutar su velada.<br/>
                    Lorem ipsum duis irure ullamco Lorem enim aute minim est id. Veniam id ullamco nostrud voluptate mollit dolore labore veniam consectetur. Reprehenderit consequat dolor et adipisicing consequat mollit qui culpa ex ipsum velit.</p>
                </div>
            </div>
        </div>
    );
}

export default Presentación; 