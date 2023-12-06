import React from "react";
import { motion, useAnimation, animation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Carrusel() {

    const { ref: ref1, inView: inView1 } = useInView();
    const animation = useAnimation(); 

    useEffect(() => {
        console.log("use effect hook, inView = ", inView1);
        if (inView1) {
            animation.start({
                
                opacity: 1,     
                transition: { type: 'spring', duration: 4, delay: 0.25, ease : 'ease'}
            });
        }
       
    }, [inView1]);

    return (
        
        <div ref={ref1} id="SlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
            <div className="carousel-inner">

                <div className="carousel-item active carousel-image bg-img-1 portada">
                <motion.h4 
                    initial={{opacity: 0}} animate={animation}
                    className="portada-h4">Alejandro&apos;s</motion.h4>
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
    );
}

export default Carrusel; 