import React from "react";
import Imagenes from "../assets/Imagenes";
import { Link } from "react-router-dom";

const Espacios = () => {
    return (
        <div className="espacios">
            <div className="container-fluid-3 presentación-2">

                <div>
                    <img src={Imagenes.img2} className="colage" alt="imagen de galeria" />

                    <div>
                        <h2 className="h2-titulo">Calidad y sabor</h2>
                        <p className="párrafo">Nuestra casa de comidas gourmet, ofrece una gran variedad de platos, que lograran satisfacer sus espectativas; brindando a su vez un ambiente cálido y de confort para su mayor disfrute.<br />
                        Lorem ipsum duis irure ullamco Lorem enim aute minim est id. Veniam id ullamco nostrud voluptate mollit dolore labore veniam consectetur. enim aute minim est id consequat dolor.</p>

                    </div>
                    <Link type="button" className="btn btn-outline-dark galeria-btn" to="/Galeria">Ver galeria</Link>
                </div>

            </div>
        </div>

    );
}

export default Espacios;