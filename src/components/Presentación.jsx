import React from "react";
import { motion, useAnimation, animation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Presentación = () => {
    

    const { ref, inView } = useInView();
    const animation = useAnimation(); 

    useEffect(() => {
        if (inView) {
            console.log("use effect hook, inView = ", inView);                                                                                                                
            animation.start({
                y: 0,
                opacity: 1,     
                transition: { type: 'spring', duration: 4, delay: 0.25, ease : 'ease'}
            });
        }
       
    }, [inView]);


    return (

        <div className="container-fluid-2">
            <motion.div 
            initial={{y: 50, opacity: 0}} animate={animation}
            className="row-p">
                <div className="left-p">
                    <div className="content-p">
                        <h1 className="h1-p">Alejandro&apos;s</h1>
                        <p ref={ref} className="párrafo">Alojado en el centro de La Plata, <b>Alejandro&apos;s</b> brinda un espacio agradable, tanto en el interior como el exterior del local, usted podrá hallar el lugar perfecto para difrutar su velada.<br />
                            Lorem ipsum duis irure ullamco Lorem enim aute minim est id. Veniam id ullamco nostrud voluptate mollit dolore labore veniam consectetur. Reprehenderit consequat dolor et adipisicing consequat mollit qui culpa ex ipsum velit.</p>
                    </div>
                </div>
                <div className="right-p">
                    <img src="restaurante.jpg" alt="imagen, mesa de restaurante" />
                </div>
            </motion.div>
        </div>
    );
}

export default Presentación; 