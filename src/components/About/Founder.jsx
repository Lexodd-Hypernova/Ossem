import React, { useState, useRef, useEffect } from 'react';
import "./founder.css";

function Card({ dataImage }) {
    const [state, setState] = useState({
        width: 0,
        height: 0,
        mouseX: 0,
        mouseY: 0,
        mouseLeaveDelay: null,
    });

    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        setState((prevState) => ({
            ...prevState,
            mouseX: e.pageX - cardRef.current.offsetLeft - prevState.width / 2,
            mouseY: e.pageY - cardRef.current.offsetTop - prevState.height / 2,
        }));
    };

    const handleMouseEnter = () => {
        clearTimeout(state.mouseLeaveDelay);
    };

    const handleMouseLeave = () => {
        setState((prevState) => ({
            ...prevState,
            mouseLeaveDelay: setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    mouseX: 0,
                    mouseY: 0,
                }));
            }, 1000),
        }));
    };

    const cardStyle = {
        transform: `rotateY(${state.mouseX / state.width * 30}deg) rotateX(${state.mouseY / state.height * -30}deg)`,
    };

    const cardBgTransform = {
        transform: `translateX(${state.mouseX / state.width * -40}px) translateY(${state.mouseY / state.height * -40}px)`,
    };

    const cardBgImage = {
        backgroundImage: `url(${dataImage})`,
    };

    return (
        <div
            className="card-wrap"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <div className="card" style={{ ...cardStyle, ...cardBgTransform, ...cardBgImage }}>
                <div className="card-info">
                    <slot name="header"></slot>
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    );
}


const Founder = () => {
    return (
        <div className="container">
            <h1 className="title">Hover over the cards</h1>
            <Card dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
                <h1 className="header">Canyons</h1>
                <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Card>
            <Card dataImage="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
                <h1 className="header">Beaches</h1>
                <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Card>
        </div>
    );
}

export default Founder;
