import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Nosotros = () => {

    const { ref: ref3, inView: inView3 } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        console.log("use effect hook, inView = ", inView3);
        if (inView3) {
            animation.start({
                x: 0,
                y: 0,
                opacity: 1,
                transition: { type: 'spring',duration: 4, delay: 0.25, ease: 'ease' }
            });
        }

    }, [inView3]);


    return (
        <div ref={ref3} className="nosotros">
            <h3 className="titulos">Nosotros</h3>
            <div className="nosotros-imagen">
                <motion.img initial={{ x: -20, y: -20, opacity: 0 }} animate={animation}
                    src="chef1.jpg" className="nosotros-img" alt="imagen de chef y sus asistentes cocinando"></motion.img>
 
                <motion.img initial={{ x: 20, y: -20, opacity: 0 }} animate={{x: 0, y: 0, opacity: 1,
                    transition: { type: 'spring', duration: 4, delay: 0.50, ease: 'ease' }}}
                    src="grupo.jpg" className="nosotros-img-2" alt="imagen de chef y sus asistentes cocinando"></motion.img>

                <motion.img initial={{ x: 20, y: 20, opacity: 0 }} animate={{x: 0, y: 0, opacity: 1,
                    transition: { type: 'spring',duration: 4, delay: 0.75, ease: 'ease' }}}
                    src="cocineros.jpg" className="nosotros-img-3" alt="imagen de chef y sus asistentes cocinando"></motion.img>
            
                <motion.img initial={{ x: 20, y: 20, opacity: 0 }} animate={{x: 0, y: 0, opacity: 1,
                    transition: { type: 'spring', duration: 4, delay: 1, ease: 'ease' }}}
                    src="amigos.jpg" className="nosotros-img-4" alt="imagen de chef y sus asistentes cocinando"></motion.img>

            </div>

            <h3 className="titulos-2">Nuestra historia</h3>
            <p className="nosotros-p">
                Lorem ipsum esse occaecat aliquip anim fugiat ea laborum consequat aute proident. Elit sint ad tempor aliqua consectetur dolore exercitation. Sit velit cillum ad proident laborum eiusmod laborum ipsum. Mollit officia commodo sit consequat anim proident.

                Officia dolor irure qui amet laborum labore ad pariatur et. Amet ipsum aliquip duis culpa non elit deserunt. Reprehenderit consectetur ipsum minim do qui id aliquip est nulla magna et tempor.

                Ea aute est officia incididunt laborum aliqua excepteur. Cupidatat labore voluptate elit magna quis nisi reprehenderit Lorem anim Lorem amet. Laborum pariatur aute ut est cillum incididunt voluptate laborum enim deserunt ullamco eu amet ut. Velit duis dolore reprehenderit Lorem ex velit quis excepteur. Reprehenderit qui sunt in nisi do reprehenderit fugiat sint in pariatur aliquip minim anim. Ipsum pariatur ea occaecat dolore sit ad do voluptate. Proident tempor eu est ut dolor aliquip do incididunt.

                Nulla dolore proident laborum incididunt dolore mollit ea culpa dolor quis sunt cupidatat in elit. Officia veniam cillum velit est excepteur nostrud non laboris ipsum nulla enim cupidatat nostrud. Culpa commodo adipisicing non ullamco nostrud culpa do ex ut incididunt minim elit enim elit. Reprehenderit labore laborum ipsum duis officia adipisicing deserunt eu in laboris. Lorem aliqua nulla sint qui aute do. Eu cillum commodo dolor aliqua aute elit eu irure amet esse ea. Id ea consectetur ad laborum dolore sint esse dolor.
            </p>
        </div >
    );
}


export default Nosotros; 