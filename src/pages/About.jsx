import React from 'react';
import Hero from '../components/About/Hero';
import Technology from '../components/About/Technology';
import Cliente from "../components/Home/Cliente/Cliente";
import AboutVideo from '../components/About/AboutVideo';
// import Founder from '../components/About/Founder';

const About = () => {
    return (
        <>
            <Hero></Hero>
            <Technology></Technology>
            <AboutVideo></AboutVideo>
            {/* <Founder></Founder> */}
            <Cliente></Cliente>
        </>
    )
}

export default About