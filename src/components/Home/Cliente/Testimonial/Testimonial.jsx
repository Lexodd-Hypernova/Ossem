import React, { useEffect } from 'react';
import "./Testimonial.css";

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const Testimonial = () => {

  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container.testimonial_sw', {
      slidesPerView: 1,
      speed: 500,
      grabCursor: true,
      freeMode: false,
      loop: true,
      mousewheel: false,
      keyboard: {
        enabled: true,
      },
      // effect: 'fade',
      // fadeEffect: {
      //     crossFade: true
      // },
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination.test_pg",
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <>
      <div className='testimonial__Sec'>
        <div className='tst_Swp-cnt'>
          <div className='tst__Ttl-txt'>
            <h3>
              Testimonials
            </h3>
          </div>
          <div className="swiper-container testimonial_sw">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className='tst__Sl'>
                  <div className='tst_Txt'>
                    {/* <h3>Testimonial1</h3> */}
                    <div className='test__Para'>
                      <p>
                        "Implementing Ossem's management solutions transformed our school's administrative efficiency. Tasks that used to take hours are now completed with a few clicks. Highly recommend their services!"
                      </p>
                      <p>
                        "As a school principal, I've tried several management systems, but Ossem 's solution stands out. It's user-friendly, comprehensive, and tailored perfectly for educational institutions."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className='tst__Sl'>
                  <div className='tst_Txt'>
                    {/* <h3>Testimonial2</h3> */}
                    <div className='test__Para'>
                      <p>
                        "We've been using Ossem's management software for a year now, and it has simplified everything from admissions to grading. Our teachers and staff are more organized and focused on student success."
                      </p>
                      <p>
                        "The support team at Ossem is exceptional! Whenever we have a question or need assistance, they are quick to respond and resolve any issues. Great customer service!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className='tst__Sl'>
                  <div className='tst_Txt'>
                    {/* <h3>Testimonial3</h3> */}
                    <div className='test__Para'>
                      <p>
                        "Thanks to Ossem's management solutions, our school's enrollment process is seamless. Parents and students appreciate the easy online registration, and we've seen an increase in enrollments since we started using their services."
                      </p>
                      <p>
                        "I cannot imagine managing our university without Ossem's software. It's a game-changer for student records, scheduling, and financial management. Thank you for making our jobs easier!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more slides as needed */}
            </div>

            {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-scrollbar"></div> */}
          </div>
        </div>
        <div className="swiper-pagination test_pg"></div>
      </div>
    </>
  );
}

export default Testimonial;
