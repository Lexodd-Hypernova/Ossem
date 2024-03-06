import React, { useEffect, useState } from "react";
import "./Footer.css";
import FooterVector from "../../assets/FooterVector.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
import ContactModal from "../contact/contactModal";
const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };
  // useEffect(() => {
  //   const blobContainer = document.getElementById("blob-container");

  //   // Default background position
  //   let xPercent = 50;
  //   let yPercent = 50;

  //   // Default animation for the gradient blob using GSAP
  //   const tl = gsap.timeline({ repeat: -1, yoyo: true, paused: true });
  //   tl.to(blobContainer, {
  //     duration: 2,
  //     ease: "power1.inOut",
  //     background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(245,183,66,1) 9%, rgba(254,248,122,1) 91%)`,
  //   });

  //   // Function to update the gradient position on mouse move
  //   function moveGradient(event) {
  //     // Calculate the mouse position from 0 to 100 within the container
  //     xPercent = (event.clientX / window.innerWidth) * 100;
  //     yPercent = (event.clientY / window.innerHeight) * 100;

  //     // Update the gradient position
  //     updateGradient(xPercent, yPercent);

  //     // Pause the default animation
  //     tl.pause();
  //   }

  //   // Function to update the gradient background
  //   function updateGradient(x, y) {
  //     // Use GSAP to animate the background change
  //     gsap.to(blobContainer, {
  //       background: `radial-gradient(circle at ${x}% ${y}%, rgba(245,183,66,1) 9%, rgba(254,248,122,1) 91%)`,
  //       duration: 0.5,
  //       ease: "none",
  //     });
  //   }

  //   // Add mouse move event listener
  //   document.addEventListener("mousemove", moveGradient);

  //   // Optional: Restart the default animation when mouse leaves the container
  //   blobContainer.addEventListener("mouseleave", () => {
  //     tl.restart();
  //   });

  //   // Optional: Restart the default animation after a period of inactivity
  //   let inactivityTimeout;

  //   document.addEventListener("mousemove", () => {
  //     clearTimeout(inactivityTimeout);
  //     inactivityTimeout = setTimeout(() => {
  //       tl.restart();
  //     }, 200000);
  //   });
  // }, []);

  return (
    <div className="foot__Sec" id="blob-container">
      <div className="Footer-container">
        <div className="ft_fst-Sec">
          <h2>We Are Ossem</h2>
          <div className="ft_arw-img">
            <img src={FooterVector} alt="Footervector" />
          </div>
        </div>
        <div className="Footer-second-section">
          <div className="ft_sc-Row1">

            <button onClick={openContactModal}>
              Let's Connect
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
          <div className="ft_sc-Row2">
            <p>
              Empower your educational organizations with our management services like EMS or ERP systems.
            </p>
          </div>
        </div>
        <div className="Footer-third-section">
          <div className="Footer-third-first-section">
            <a href="mailto:info@prodservtechnologies.com" className="address">email: info@prodservtechnologies.com</a><br></br>
            <a href="tel:+919154367608" className="address">+91 9154367608</a>
            <h5>
              <span>Prodserv Technologies LLP</span><br></br>
              P No. 30/A, MLA Colony, Road No. 12,<br></br>
              Banjara Hills, Hyderabad, Telangana<br></br>
              500034.
            </h5>
          </div>
          <div className="Footer-social-networks">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <a href="https://www.linkedin.com/company/ossem-by-prodserv-technologies/" target="_blank"><FaLinkedinIn /></a>

          </div>
        </div>
        <div className="ft_frth-sec">
          <div className="copyright">Copyright@ossem2024</div>
          <div className="btm_lnks">
            <a href="">Privacy Policy</a>
          </div>
          <div className="pwr_by">
            Powered by :<a href="">Lexodd Hypernova Pvt. Ltd</a>
          </div>
        </div>
        <div className="sc__Top-sec">
          <ScrollToTopButton></ScrollToTopButton>
        </div>
      </div>
      {isContactModalOpen && (
        <ContactModal onClose={closeContactModal} isOpen={openContactModal} />
      )}
    </div>
  );
};

export default Footer;
