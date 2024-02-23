import React, { useEffect, useState, useRef } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css/bundle';

const ScrollableSection = () => {

    const sliderImagesRef = useRef(null);
    useEffect(() => {

        // Initialize the thumbnail slider
        const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
            direction: "vertical",
            slidesPerView: 4,
            spaceBetween: 0,
        });

        // Initialize the main image slider
        sliderImagesRef.current = new Swiper(".slider__images .swiper-container", {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: true,
            grabCursor: true,
            thumbs: {
                swiper: sliderThumbs
            },
            // breakpoints: {
            //   0: {
            //     direction: "horizontal"
            //   },
            //   768: {
            //     direction: "vertical"
            //   }
            // },
            on: {
                init: () => {
                    // The initial progress is set to 25%
                    updateProgressBarWidth(10);
                },
                slideChangeTransitionEnd: () => {
                    // Calculate progress based on the active slide
                    const progress = calculateProgress(sliderImagesRef.current);

                    // Update the progress bar width
                    updateProgressBarWidth(progress);
                },
            },
        });

        // Add click event listeners to thumbnail images
        const thumbnailImages = document.querySelectorAll('.thumb_txt');
        thumbnailImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                // Update the active slide of the main image slider
                sliderImagesRef.current.slideTo(index);

                // Calculate progress based on the active slide
                const progress = calculateProgress(sliderImagesRef.current);

                // Update the progress bar width
                updateProgressBarWidth(progress);
            });
        });
    }, []);

    // Helper function to calculate progress
    const calculateProgress = (swiper) => {
        if (swiper) {
            const activeSlide = swiper.activeIndex;
            const totalSlides = swiper.slides.length - 1; // Subtract 1 for 0-based index
            return ((activeSlide / totalSlides) * 100) + 3; // Add 25 to start at 25%
        }
        return 0;
    };

    // Helper function to update progress bar width
    const updateProgressBarWidth = (width) => {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.height = `${width}%`;
        }
    };

    return (
        <div className="slider__Wrap" id="products">
            <div className="slider">
                {/* <h2 className="prd__Ttl">Rhino AI Solves</h2> */}
                <div className="slider__flex">

                    {/* Progress bar */}
                    <div className="progress_Bar_cont"><div className="progress-bar" style={{ height: '0%' }}></div></div>

                    <div className="slider__col">
                        <div className="slider__thumbs">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <span className="thumb_txt">Application Re-Engineering</span>
                                    </div>
                                    <div className="swiper-slide">
                                        <span className="thumb_txt">Avoid Vendor Lock-In</span>
                                    </div>
                                    <div className="swiper-slide">
                                        <span className="thumb_txt">Scaled Platform Development</span>
                                    </div>
                                    <div className="swiper-slide">
                                        <span className="thumb_txt">Complex Legacy Migrations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider__images">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <Component1></Component1>
                                </div>
                                <div className="swiper-slide">
                                    <Component2></Component2>
                                </div>
                                <div className="swiper-slide">
                                    <Component3></Component3>
                                </div>
                                <div className="swiper-slide">
                                    <Component4></Component4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ScrollableSection;