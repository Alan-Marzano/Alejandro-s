import React from "react";
import { Link } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Espacios = () => {

    const { ref: ref2, inView: inView2 } = useInView();
    const animation = useAnimation(); 

    useEffect(() => {
        
        if (inView2) {
            animation.start({
                y: 0,
                opacity: 1,     
                transition: { type: 'spring', duration: 4, delay: 0.25, ease : 'ease'}
            });
        }
       
    }, [inView2]);

    return (
        
            <div className="container-fluid-3">

                <motion.div 
                initial={{y: 50, opacity: 0}} animate={animation}
                className="row-e">
                    <div className="left">
                        <img src="chef.jpg" alt="imagen. chef decorando plato" />
                    </div>
                    <div className="right">
                        <div className="content">
                            <h2 className="h2-titulo">Calidad y sabor</h2>
                            <p ref={ref2} className="párrafo">Nuestra casa de comidas gourmet, ofrece una gran variedad de platos, que lograran satisfacer sus espectativas; brindando a su vez un ambiente cálido y de confort para su mayor disfrute.<br />
                                Lorem ipsum duis irure ullamco Lorem enim aute minim est id. Veniam id ullamco nostrud voluptate mollit dolore labore veniam consectetur. enim aute minim est id consequat dolor.</p>

                            <Link type="button" className="btn btn-outline-danger galeria-btn" to="/Galeria">Ver galeria</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
    

    );
}

export default Espacios;