import React, { useEffect, useState, useRef } from 'react';
import "./hero.css";
// import ScrollingText from '../ScrollingText';

// const title = ""






const Hero = () => {
    // const text = "crafted to empower our educational organizations"
    // const words = text.split(' ');
    // const [color, setColor] = useState(Array(words.length).fill('black'));
    // const [started, setStarted] = useState(false);
    // const sectionRef = useRef(null);


    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sectionHeight = sectionRef.current.offsetHeight;
    //         const sectionTop = sectionRef.current.offsetTop;
    //         const scrollPosition = window.scrollY;

    //         if (scrollPosition === 0 && !started) {
    //             setStarted(true);
    //             setColor(Array(words.length).fill('white'));
    //         } else if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
    //             const scrollPercentage = (scrollPosition - sectionTop) / sectionHeight;
    //             const numWordsToChange = Math.ceil(scrollPercentage * (words.length + 1));

    //             setColor(prevColor => prevColor.map((_, index) => index < numWordsToChange ? 'white' : 'black'));
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [started]);


    return (
        <div className='abt__Hero-wrap'>
            <div className='abt_Hero-sec'>
                <div className='abt_Hero-txt'>
                    <h1>
                        A digital<br></br>
                        platform<br></br>
                        crafted to<br></br>
                        empower our<br></br>
                        educational<br></br>
                        organizations
                    </h1>
                    {/* <div ref={sectionRef} id="paragraph">
                        {words.map((word, index) => (
                            <span key={index} style={{ color: color[index] }}>
                                {word}{' '}
                            </span>
                        ))}
                    </div> */}
                </div>
                <div className='abt__Hero-img'>
                    <img src="assets/img/about.png" alt="about" />
                </div>
            </div>
        </div>
    )
}

export default Hero