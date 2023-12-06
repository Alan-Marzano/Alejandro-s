import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Sucursales = () => {

    const { ref: ref4, inView: inView4 } = useInView();
    const animation = useAnimation();     

    useEffect(() => {
        console.log("use effect hook, inView = ", inView4);
        if (inView4) {
            animation.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: { type: 'spring', duration: 4, delay: 0.25, ease: 'ease' }
            });
        }

    }, [inView4]);

    return (
        <div ref={ref4} className="sucursales">
            <h3 className="titulos">Sucursales</h3>

            <div className="y">
                <motion.div initial={{ x: 40, y: 0, opacity: 0 }} animate={animation}
                    className="sucursales-img">

                    <div className="left-s">
                        <img src="sucursal0.jpg" alt="frente del restaurante con el logo del lugar" />
                    </div>
                </motion.div>

                <motion.div initial={{ x: 40, y: 0, opacity: 0 }} animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: { type: 'spring', duration: 4, delay: 0.75, ease: 'ease' }
                }}
                    className="right-s">
                    <p>
                        La Plata<br />
                        Avenida 7, esquina 60<br />
                        4123456 / 221 1234567 (solo Whatsapp)<br />
                        -Lunes a Domingo de 19 a 01 am<br />
                    </p>
                </motion.div>
            </div>

            <div className="y-2">
                <motion.div initial={{ x: 40, y: 0, opacity: 0 }} animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: { type: 'spring', duration: 4, delay: 1.25, ease: 'ease' }
                }}
                    className="sucursales-img-2">

                    <div className="left-s-2">
                        <img src="12.jpg" alt="frente del restaurante con el logo del lugar" />
                    </div>
                </motion.div>

                <motion.div initial={{ x: 40, y: 0, opacity: 0 }} animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: { type: 'spring', duration: 4, delay: 1.75, ease: 'ease' }
                }}
                    className="right-s-2">
                    <p>
                        La Plata<br />
                        Avenida 7, esquina 40<br />
                        4234567 / 221 2345678 (solo Whatsapp)<br />
                        -Lunes a Domingo de 19 a 01 am<br />
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Sucursales; 