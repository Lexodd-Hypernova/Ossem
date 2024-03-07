import React, { useEffect } from "react";
import "./mobileModal.css";

import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";



const MobileModal = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={`mob-modal ${isOpen ? "open" : ""}`}>
                <div className="mob-modal-content">

                    <div className="mob-menu_Md-wrap">
                        <div className="mob-mn_Cnt-bx">
                            <div className="mob-mn_Main-cnt">
                                <div className="mob-mn_Col1">
                                    <div className="mob-mn_Ttl-icn">

                                        {/* <Link href="/" onClick={onClose}><Image src="/assets/images/menu-logo.svg" alt='project-d' width={400} height={56}></Image></Link> */}
                                        <Link to="/" className="mob-menu_Modal-logo" onClick={onClose}>
                                            <img src="assets/img/logo.png" alt="logo"></img>
                                        </Link>

                                    </div>
                                </div>
                                <div className="mob-mn_Col2">
                                    <ul>
                                        <li><Link to="/" onClick={onClose}>Home</Link ></li>
                                        <li><Link to="/about" onClick={onClose}>About</Link></li>
                                        <li><Link to="/features" onClick={onClose}>Features</Link></li>
                                        <li>
                                            <a onClick={onClose}>
                                                Contact
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={onClose}>
                                                Login
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <button className="mob-mn_Cl-icn" onClick={onClose}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={`overlay ${isOpen ? "active" : ""}`} onClick={onClose}></div> */}
        </>
    );
};

export default MobileModal;
