import React from "react";

function Carrusel() {
    return (

        <div className="titulo">

            <div>
                <div id="SlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
                    <div className="carousel-inner">
                    
                        <div className="carousel-item active carousel-image bg-img-1 portada">
                            <h4 className="portada-h4">Alejandro&apos;s</h4>
                            <p className="portada-p">10 años brindando la mejor calidad</p>  
                        </div>
                        <div className="carousel-item carousel-image bg-img-2 portada">
                            <h4 className="portada-h4">Alejandro&apos;s</h4>
                            <p className="portada-p">10 años brindando la mejor calidad</p>
                        </div>
                        <div className="carousel-item carousel-image bg-img-3 portada">
                            <h4 className="portada-h4">Alejandro&apos;s</h4>
                            <p className="portada-p">10 años brindando la mejor calidad</p>
                        </div>

                        <div className="carousel-item carousel-image bg-img-4 portada">
                            <h4 className="portada-h4">Alejandro&apos;s</h4>
                            <p className="portada-p">10 años brindando la mejor calidad</p>
                        </div>

                        <div className="carousel-item carousel-image bg-img-5 portada">
                            <h4 className="portada-h4">Alejandro&apos;s</h4>
                            <p className="portada-p">10 años brindando la mejor calidad</p>
                        </div>

                    </div>

                    <button className="carousel-control-prev" href="#SlidesOnly" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button className="carousel-control-next" href="#SlidesOnly" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Carrusel; 