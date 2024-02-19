import React, { useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

// import LocomotiveScroll from "locomotive-scroll";
// import dynamic from 'next/dynamic';
// import "./example.css";
// import "./horizontal.css";
// import { preloadImages, clamp, map } from '../../../../public/assets/js/horizontal.js';
// import Image from "next/image";

import MobileCarousel from './MobileCarousel';



const HorizontalCarousel = () => {

    return (
        <div className="container__Wrap">
            <div className='news__Sec-vid'>
                <div className='nw_vid-inner'>
                    <video loop playsInline autoPlay muted className='m_vd'>
                        <source src="assets/videos/Orb.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="con__Sec-wrap">
                <div className="con__Mob-wrap">
                    <MobileCarousel></MobileCarousel>
                </div>
            </div>
        </div>

    );
};



const Card = ({ card }) => {
    return (

        <div className="crd_item">
            <div className="card_itm-img">
                <div className="card__Content">
                    <h3 dangerouslySetInnerHTML={{ __html: card.title }} />
                    {/* <h3>{card.title}</h3> */}
                    <p dangerouslySetInnerHTML={{ __html: card.para }} />
                    {/* <p>{card.para}</p> */}
                </div>

                <div
                    style={{
                        background: `${card.url}`,
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                    }}

                    className="crd__inner"
                    data-scroll data-scroll-speed="-0.8"
                >
                </div>
            </div>
            {/* <div className="card_icon-img">
                <Image src={card.icon} alt={card.alt} width={card.width} height={card.height} data-scroll data-scroll-speed="1.5" className={card.class}></Image>
            </div> */}
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
    },
    // {
    //     class: "digi",
    //     icon: "/assets/images/adv.png",
    //     width: "222",
    //     height: "232",
    //     alt: "Digital advertising",
    //     url: "linear-gradient(180deg, #413022, #10101000)",
    //     title: "Digital<br/>Advertising",
    //     para: "Running online ad campaigns on <br/> platforms like programmatic (ott, <br/> ctv, youtube, Story telling and<br/>video) and also run interstitial, In <br/> app Ads to reach a specific <br/> audience and drive conversions.",
    //     id: 4,
    // },
    // {
    //     class: "brand",
    //     icon: "/assets/images/branding.png",
    //     width: "150",
    //     height: "216",
    //     alt: "branding",
    //     url: "linear-gradient(180deg, #0090A1, #10101000)",
    //     title: "Branding",
    //     para: "Helping businesses define <br/> their brand identity, <br/> positioning and messaging <br/> for a cohesive online presence",
    //     id: 5,
    // },
    // {
    //     class: "meta",
    //     icon: "/assets/images/meta.png",
    //     width: "263",
    //     height: "199",
    //     alt: "meta marketing",
    //     url: "linear-gradient(180deg, #303EAB, #10101000)",
    //     title: "META<br/>Marketing",
    //     para: "Running online ad campaigns <br/> on instagram and facebook",
    //     id: 6,
    // },
    // {
    //     class: "email",
    //     icon: "/assets/images/email.png",
    //     width: "211",
    //     height: "224",
    //     alt: "email marketing",
    //     url: "linear-gradient(180deg, #4C4C4C, #10101000)",
    //     title: "Email<br/>Marketing",
    //     para: "Design and implement <br/> campaigns to nurture leads <br/> retain customers and drive <br/> sales",
    //     id: 7,
    // },
    // {
    //     class: "inf",
    //     icon: "/assets/images/influencer.png",
    //     width: "212",
    //     height: "212",
    //     alt: "influencer marketing",
    //     url: "linear-gradient(180deg, #B734AB, #10101000)",
    //     title: "Influencer</br>Marketing",
    //     para: "Collaborating with influencers <br/> to promote products/services <br/> and reach a wider audience",
    //     id: 8,
    // },
    // {
    //     class: "gads",
    //     icon: "/assets/images/gads.png",
    //     width: "215",
    //     height: "216",
    //     alt: "google ads",
    //     url: "linear-gradient(180deg, #468734, #10101000)",
    //     title: "Google Ads",
    //     para: "PPC (Search Ads, Display <br/> Ads), GMB Optimisation",
    //     id: 9,
    // },
    // {
    //     class: "web",
    //     icon: "/assets/images/web.png",
    //     width: "267",
    //     height: "205",
    //     alt: "web application",
    //     url: "linear-gradient(180deg, #EAD177, #10101000)",
    //     title: "Web/<br/>Application",
    //     para: "Creating and developing <br/> websites that are visually <br/> appealing, user-friendly, and <br/> responsive across various <br/> devices",
    //     id: 10,
    // }
];

export default HorizontalCarousel;
