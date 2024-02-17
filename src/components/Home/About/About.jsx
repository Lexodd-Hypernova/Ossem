import React, { useEffect } from 'react';

import "./about.css";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".hero", {
            scrollTrigger: {
                trigger: ".hero",
                scrub: true,
                pin: true,
                start: "center center",
                end: "bottom -100%",
                toggleClass: "active",
                ease: "power2"
            }
        });

        gsap.to(".hero__image", {
            scrollTrigger: {
                trigger: ".hero",
                scrub: 0.5,
                start: "top bottom",
                end: "bottom -300%",
                ease: "power2"
            },
            y: "-30%"
        });

    }, []);

    return (
        <>
            <header class="container">
                <h2 class="container__headline">Wanna see something neat?</h2>
            </header>
            <section class="container hero">
                <div class="hero__inner">
                    <div class="hero__images">
                        <img class="hero__image" src="https://images.unsplash.com/photo-1508781197106-d8c535dcf276?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
                    </div>
                    <div class="hero__content">
                        <div class="hero__headline">
                            <span>How Neat is That?</span>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="container">
                <h2 class="container__headline">That's pretty neat.</h2>
            </footer>
        </>
    )
}

export default About