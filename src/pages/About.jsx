import React, { useEffect } from 'react';
import Hero from '../components/About/Hero';
import Technology from '../components/About/Technology';
import Cliente from "../components/Home/Cliente/Cliente";
import Founder from '../components/About/Founder';
import AboutVideoFile from '../components/About/AboutVideoFile';

import Lenis from '@studio-freight/lenis'

const About = () => {

    useEffect(() => {
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
            // console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <>
            <Hero></Hero>
            <Technology></Technology>
            <AboutVideoFile></AboutVideoFile>
            <Founder></Founder>
            <Cliente></Cliente>
        </>
    )
}

export default About