import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
// import "./mobileCarousel.css";

// import Image from "next/image";

const MobileCarousel = () => {
    return (
        <div className="m_container">
            <HorizontalScrollCarousel />
        </div>
    );
};

export default MobileCarousel;

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="m_carousel">
            <div className="m_caro_list">
                <motion.div style={{ x }} className="m_caro_item">
                    {/* <div className="m_caro_Ttl">
                        <h2>
                            <span className="tt-clip d_S-xt1">D</span>
                            <span className="tt-clip d_S-xt2">Services</span>
                        </h2>
                    </div> */}
                    <div className="bl"></div>
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};


const Card = ({ card }) => {
    return (
        <div className="crd_rw">
            {/* <div className="m_card_icon-img">
                <Image src={card.icon} alt={card.alt} width={card.width} height={card.height} className={card.class}></Image>
            </div> */}
            <div
                key={card.id}
                className="m_crd_item"
            >
                <div
                    style={{
                        background: `${card.url}`,
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                    }}
                    className="m_card_itm-img"
                ></div>
                <div className="m_card__Content">
                    <h3 dangerouslySetInnerHTML={{ __html: card.title }} />
                    {/* <h3>{card.title}</h3> */}
                    <p dangerouslySetInnerHTML={{ __html: card.para }} />
                    {/* <p>{card.para}</p> */}
                </div>
            </div>
        </div>

    );
};

const cards = [
    {
        class: "smm",
        icon: "/assets/images/smm.png",
        width: "263",
        height: "256",
        alt: "smm",
        url: "linear-gradient(to left,#8d8a81, #10101000)",
        title: "Prosquad Consulting<br/>Ventures Into Legal Consulting.",
        para: "One Collaborative Team",
        id: 1,
    },
    {
        class: "seo",
        icon: "/assets/images/seo.png",
        width: "179",
        height: "339",
        alt: "seo",
        url: "linear-gradient(to left,#8d8a81, #10101000)",
        title: "Prosquad Consulting<br/>Ventures Into Legal Consulting.",
        para: "One Collaborative Team",
        id: 2,
    },
    {
        class: "aff",
        icon: "/assets/images/aff.png",
        width: "202",
        height: "205",
        alt: "affiliate",
        url: "linear-gradient(to left,#8d8a81, #10101000)",
        title: "Prosquad Consulting<br/>Ventures Into Legal Consulting.",
        para: "One Collaborative Team",
        id: 3,
    }
];


