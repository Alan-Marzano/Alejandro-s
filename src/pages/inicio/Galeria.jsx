import React from "react";
import Imagenes from "../../assets/Imagenes";

const Galeria = () => {
    return (
        <div className="container-fluid-6">
            <h3 className="titulos">Galeria</h3>
            <div className="container-img">
                <div className="box-img">
                    <img src={Imagenes.img5} alt="imagen de la galeria" />
                </div>

                <div className="box-img">
                    <img src={Imagenes.img6} alt="imagen de la galeria" />
                </div>

                <div className="box-img"> 
                    <img src={Imagenes.img7} alt="imagen de la galeria" />
                </div>

                <div className="box-img">
                    <img src={Imagenes.img8} alt="imagen de la galeria" />
                </div>

                <div className="box-img">
                    <img src={Imagenes.img9} alt="imagen de la galeria" />
                </div>

                <div className="box-img">
                    <img src={Imagenes.img10} alt="imagen de la galeria" />
                </div>

                <div className="box-img">
                    <img src={Imagenes.img11} alt="imagen de la galeria" />
                </div>

                <div className="box-img">
                    <img src={Imagenes.img12} alt="imagen de la galeria" />
                </div>

                <div className="box-img">
                    <img src={Imagenes.img13} alt="imagen de la galeria" />
                </div>

                <div className="box-img">
                    <img src={Imagenes.img14} alt="imagen de la galeria" />
                </div>

                <div className="box-img">
                    <img src={Imagenes.img15} alt="imagen de la galeria" />
                </div>

                <div className="box-img">
                    <img src={Imagenes.img16} alt="imagen de la galeria" />
                </div>

            </div>
        </div>
    )
}

export default Galeria;