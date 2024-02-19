// import React, { useEffect, useRef } from 'react';

// import "./about.css";
// // import gsap from 'gsap';
// import gsap from 'gsap';
// // import ScrollTrigger from 'gsap/ScrollTrigger';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import gl1 from "../../../assets/gl1.png";

// import bg from "../../../assets/bg.png";

// gsap.config({
//     trialWarn: false
// });

// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.config({
//     ignoreMobileResize: true
// });

// const About = () => {

//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const section = sectionRef.current;

//         if (!section) return;

//         init();

//         function init() {
//             initAnimation();
//         }

//         function initAnimation() {
//             const verticalTextItems = section.querySelectorAll(".text-items .item");
//             const timeline = gsap.timeline();

//             verticalTextItems.forEach((item, index) => {
//                 gsap.set(item, {
//                     yPercent: index === 0 ? 0 : 100,
//                     opacity: index === 0 ? 1 : 0
//                 });

//                 if (verticalTextItems[index + 1]) {
//                     timeline
//                         .to(
//                             item,
//                             {
//                                 yPercent: -100,
//                                 opacity: 0
//                             },
//                             "+=0.5"
//                         )
//                         .to(
//                             verticalTextItems[index + 1],
//                             {
//                                 yPercent: 0,
//                                 opacity: 1
//                             },
//                             "<"
//                         );
//                 }
//             });

//             ScrollTrigger.create({
//                 animation: timeline,
//                 trigger: section,
//                 start: "bottom bottom",
//                 end: "+=300%",
//                 scrub: true,
//                 pin: true,
//                 markers: true
//             });
//         }
//     }, []);

//     return (
//         <>
//             <section style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "lightblue" }} class="section fullscreen">
//                 <h1 style={{ textAlign: "center" }}>First section</h1>
//             </section>

//             <section class="section no-padding-top no-padding-bottom" id="vertical_scroll_with_cards" ref={sectionRef}>
//                 <div class="container">
//                     <div class="vertical-scroll-section">
//                         <div class="text-items">
//                             <div class="item">
//                                 <div className='abt_Row'>
//                                     <div className='abt_gl-box'>
//                                         <div className='abt_gl-cnt'>
//                                             <div className='gl_ttl'>
//                                                 <h3>Lorem</h3>
//                                             </div>
//                                             <div className='gl_cn'>
//                                                 <div className='mn_ttl'>Ipsum</div>
//                                                 <div className='mn_Num'>01</div>
//                                             </div>
//                                             <div className='gl_img'>
//                                                 <img src={gl1} alt="" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='abt_txt'>
//                                         <h2>
//                                             About ProdServ<br></br>Technologies
//                                         </h2>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="item">
//                                 <div className='abt_Row'>
//                                     <div className='abt_txt'>
//                                         <p>
//                                             "Lorem ipsum dolor sit amet,
//                                             consectetur adipiscing elit,
//                                             sed do eiusmod tempor incididunt
//                                             ut labore et dolore magna aliqua."
//                                         </p>
//                                     </div>
//                                     <div className='abt_gl-box'>
//                                         <div className='abt_gl-cnt'>
//                                             <div className='gl_ttl'>
//                                                 <h3>Lorem</h3>
//                                             </div>
//                                             <div className='gl_cn'>
//                                                 <div className='mn_ttl'>Ipsum</div>
//                                                 <div className='mn_Num'>01</div>
//                                             </div>
//                                             <div className='gl_img'>
//                                                 <img src={gl1} alt="" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="item">
//                                 <div className='abt_Row'>
//                                     <div className='abt_gl-box'>
//                                         <div className='abt_gl-cnt'>
//                                             <div className='gl_ttl'>
//                                                 <h3>Lorem</h3>
//                                             </div>
//                                             <div className='gl_cn'>
//                                                 <div className='mn_ttl'>Ipsum</div>
//                                                 <div className='mn_Num'>01</div>
//                                             </div>
//                                             <div className='gl_img'>
//                                                 <img src={gl1} alt="" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='abt_txt'>
//                                         <p>
//                                             "Lorem ipsum dolor sit amet,
//                                             consectetur adipiscing elit,
//                                             sed do eiusmod tempor incididunt
//                                             ut labore et dolore magna aliqua."
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="cards-block">
//                             {/* <div class="card" style={{ zIndex: "2", transform: "translate(-10%, -74%) scale(0.8)", opacity: "1" }}>
//                                 <div class="scroll-vertical-asset">
//                                     <div class="asset-container">
//                                         <div class="asset-image">
//                                             <img src="https://klike.net/uploads/posts/2019-01/1547365376_1.jpg" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> */}
//                             {/* <div class="card" style={{ zIndex: "3", transform: "translate(-50%, -50%) scale(1)", opacity: "1" }}>
//                                 <div class="scroll-vertical-asset">
//                                     <div class="asset-container">
//                                         <div class="asset-image">
//                                             <img src="https://krot.info/uploads/posts/2021-12/thumbs/1638535329_49-krot-info-p-yarkie-peizazhi-prirodi-krasivie-foto-51.jpg" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> */}
//                             <div class="card">
//                                 <div class="scroll-vertical-asset">
//                                     <div class="asset-container">
//                                         <div class="asset-image">
//                                             <img src={bg} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* <div class="navigation">
//                             <div class="navigation-item active"></div>
//                             <div class="navigation-item"></div>
//                             <div class="navigation-item"></div>
//                         </div> */}
//                     </div>
//                 </div>
//             </section >

//             <section style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "lightblue" }} class="section fullscreen">
//                 <h1 style={{ textAlign: "center" }}>Last section</h1>
//             </section>
//         </>
//     )
// }

// export default About;

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import gl1 from "../../../assets/gl1.png";
import gl2 from "../../../assets/gl2.png";
import gl3 from "../../../assets/gl3.png";
import "./about.css";

import bg from "../../../assets/bg.png";
import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
        <div className="abt__Sec">
            <div className="abt__Wrap">
                <div className="abt_Bg-wrap">
                    <div className="abt_bg-cnt">
                        <img src={bg} alt="" />
                    </div>
                </div>
                <div className="abt_carousel">
                    <HorizontalScrollCarousel />
                </div>
            </div>

            <div className="abt_Ext-p">
                <p>
                    <Fade direction="up" triggerOnce>
                        Lorem ipsum dolor sit  amet, consectetur adipiscing elit, sed do
                    </Fade>

                </p>
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
                                                <h3>Lorem</h3>
                                            </div>
                                            <div className='gl_cn'>
                                                <div className='mn_ttl'>Ipsum</div>
                                                <div className='mn_Num'>01</div>
                                            </div>
                                            <div className='gl_img'>
                                                <img src={gl1} alt="" />
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
                                            "Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua."
                                        </p>
                                    </div>
                                    <div className='abt_gl-box'>
                                        <div className='abt_gl-cnt'>
                                            <div className='gl_ttl'>
                                                <h3>Lorem</h3>
                                            </div>
                                            <div className='gl_cn'>
                                                <div className='mn_ttl'>Ipsum</div>
                                                <div className='mn_Num'>01</div>
                                            </div>
                                            <div className='gl_img'>
                                                <img src={gl2} alt="" />
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
                                                <h3>Lorem</h3>
                                            </div>
                                            <div className='gl_cn'>
                                                <div className='mn_ttl'>Ipsum</div>
                                                <div className='mn_Num'>01</div>
                                            </div>
                                            <div className='gl_img'>
                                                <img src={gl3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='abt_txt'>
                                        <p>
                                            "Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua."
                                        </p>
                                    </div>
                                </div>
                            </Fade>

                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

// const Card = ({ card }) => {
//     return (
//         <div
//             key={card.id}
//             className="card_abt"
//         >
//             <div
//                 style={{
//                     backgroundImage: `url(${card.url})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//                 className="card__In"
//             ></div>
//             <div className="card__Txt">
//                 <p>
//                     {card.title}
//                 </p>
//             </div>
//         </div>
//     );
// };

export default About;

const cards = [
    {
        url: bg,
        title: "Title 1",
        id: 1,
    },
    {
        url: bg,
        title: "Title 2",
        id: 2,
    },
    {
        url: bg,
        title: "Title 3",
        id: 3,
    },
    {
        url: bg,
        title: "Title 4",
        id: 4,
    },
    {
        url: bg,
        title: "Title 5",
        id: 5,
    },
    {
        url: bg,
        title: "Title 6",
        id: 6,
    },
    {
        url: bg,
        title: "Title 7",
        id: 7,
    },
];




