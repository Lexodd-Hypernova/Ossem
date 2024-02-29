import React from 'react';
import Hero from '../components/About/Hero';
import Technology from '../components/About/Technology';
import Cliente from "../components/Home/Cliente/Cliente";
import Founder from '../components/About/Founder';
import AboutVideoFile from '../components/About/AboutVideoFile';

const About = () => {
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