import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import "./technology.css";

import { Fade } from "react-awesome-reveal";

const Technology = () => {
    return (
        <div className="abt__Sec">
            <div className="abt__Wrap">
                {/* <div className="abt_Bg-wrap">
                    <div className="abt_bg-cnt">
                        <img src="assets/img/bg.png" alt="" />
                    </div>
                </div> */}
                <div className="abt_carousel">
                    <HorizontalScrollCarousel />
                </div>
                <div className="abt__Mob">
                    <MobScroll></MobScroll>
                </div>
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    // const targetRef = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: targetRef,
    // });

    // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const y = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <>

            <section ref={targetRef} className="scroll__Cnt">
                <div className="scl__Wrap">
                    <motion.div style={{ y }} className="crd__Item">
                        {/* {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })} */}

                        <div className="card_abt">
                            <div className="card__In">
                                <Fade direction="up" triggerOnce>
                                    <div className='abt_Row abt_Row1'>
                                        <div className='abt_gl-box'>
                                            <div className='abt_gl-cnt'>
                                                <div className='gl_ttl'>
                                                    <h3>ESSENCE</h3>
                                                </div>
                                                <div className='gl_cn'>
                                                    <div className='mn_ttl'>Expertise</div>
                                                    <div className='mn_Num'>01</div>
                                                </div>
                                                <div className='gl_img'>
                                                    <img src="assets/img/gl1.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='abt_txt'>
                                            <h2>
                                                About ProdServ<br></br><span>Technologies</span>
                                            </h2>
                                        </div>

                                    </div>
                                </Fade>

                            </div>
                        </div>
                        <div className="card_abt">
                            <div className="card__In">
                                <Fade direction="up" triggerOnce>
                                    <div className='abt_Row abt_Row2'>
                                        <div className='abt_txt'>
                                            <p>
                                                At ProdServ Technology,
                                                we lead with innovation,
                                                crafting solutions that
                                                push boundaries. Rooted
                                                in creativity and driven
                                                by progress, our software
                                                anticipates and meets
                                                tomorrow's needs, showcasing
                                                our commitment to excellence.
                                            </p>
                                        </div>
                                        <div className='abt_gl-box'>
                                            <div className='abt_gl-cnt'>
                                                <div className='gl_ttl'>
                                                    <h3>INNOVATION</h3>
                                                </div>
                                                <div className='gl_cn'>
                                                    <div className='mn_ttl'>Ambitious</div>
                                                    <div className='mn_Num'>02</div>
                                                </div>
                                                <div className='gl_img'>
                                                    <img src="assets/img/gl2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>

                            </div>
                        </div>
                        <div className="card_abt">
                            <div className="card__In">
                                <Fade direction="up" triggerOnce>
                                    <div className='abt_Row abt_Row3'>
                                        <div className='abt_gl-box'>
                                            <div className='abt_gl-cnt'>
                                                <div className='gl_ttl'>
                                                    <h3>EMBRACE</h3>
                                                </div>
                                                <div className='gl_cn'>
                                                    <div className='mn_ttl'>The Future</div>
                                                    <div className='mn_Num'>03</div>
                                                </div>
                                                <div className='gl_img'>
                                                    <img src="assets/img/gl3.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='abt_txt'>
                                            <p>
                                                We empower through technology,
                                                simplifying complexity and achieving
                                                the impossible. Join us in redefining
                                                possibilities, experiencing the future
                                                today with ProdServ Technology.
                                            </p>
                                        </div>
                                    </div>
                                </Fade>

                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>
        </>
    );
};


const MobScroll = () => {
    return (
        <div className="mob__Cards">
            <div className="card_mob">
                <Fade direction="up" triggerOnce>
                    <div className='abt_Row abt_Row1'>
                        <div className='abt_gl-box'>
                            <div className='abt_gl-cnt'>
                                <div className='gl_ttl'>
                                    <h3>ESSENCE</h3>
                                </div>
                                <div className='gl_cn'>
                                    <div className='mn_ttl'>Expertisem</div>
                                    <div className='mn_Num'>01</div>
                                </div>
                                <div className='gl_img'>
                                    <img src="assets/img/gl1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='abt_txt'>
                            <h2>
                                About ProdServ<br></br><span>Technologies</span>
                            </h2>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="card_mob">
                <Fade direction="up" triggerOnce>
                    <div className='abt_Row abt_Row1'>
                        <div className='abt_gl-box'>
                            <div className='abt_gl-cnt'>
                                <div className='gl_ttl'>
                                    <h3>INNOVATION</h3>
                                </div>
                                <div className='gl_cn'>
                                    <div className='mn_ttl'>Ambitious</div>
                                    <div className='mn_Num'>02</div>
                                </div>
                                <div className='gl_img'>
                                    <img src="assets/img/gl2.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='abt_txt'>
                            <p>
                                At ProdServ Technology, we lead with innovation,
                                crafting solutions that push boundaries. Rooted
                                in creativity and driven by progress, our software
                                anticipates and meets tomorrow's needs, showcasing
                                our commitment to excellence.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="card_mob">
                <Fade direction="up" triggerOnce>
                    <div className='abt_Row abt_Row1'>
                        <div className='abt_gl-box'>
                            <div className='abt_gl-cnt'>
                                <div className='gl_ttl'>
                                    <h3>EMBRACE</h3>
                                </div>
                                <div className='gl_cn'>
                                    <div className='mn_ttl'>The Future</div>
                                    <div className='mn_Num'>03</div>
                                </div>
                                <div className='gl_img'>
                                    <img src="assets/img/gl3.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='abt_txt'>
                            <p>
                                We empower through technology,
                                simplifying complexity and achieving
                                the impossible. Join us in redefining
                                possibilities, experiencing the future
                                today with ProdServ Technology.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}



export default Technology;





