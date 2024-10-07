import React from 'react';
import {Link} from 'react-router-dom';
import {isMobile} from "../Utility";
import img from '../Assests/VM4fitness3.webp'

const Navbar=()=>{
    return (
        <section className="nav-top1">
            <nav className="navbar fixed-top">
                <a href="#home" className="nav-branding"><img src={img} loading="lazy" alt="Logo"/>
                    <span className="heading">VM4fitness</span>
                </a>

                <ul className="nav-menu" >
                    {isMobile() ? <></>:
                        <>
                            <li className="nav-item"><a href="/" className="nav-link">HOME</a></li>
                            <li className="nav-item"><a href="/#user-testimonial-section" className="nav-link">TESTIMONIAL</a></li>
                            <li className="nav-item"><a href="/#service" className="nav-link">SERVICE</a></li>
                            <li className="nav-item"><a href="/#slide-section" className="nav-link">ABOUT US</a></li>
                            <li className="nav-item"><a href="/faq" className="nav-link">FAQ</a></li>
                        </>}

                    <li className="nav-item"><a href="https://calendly.com/vik4fitness/consultation-appointment"
                                                target="_blank" rel="noopener noreferrer" className="nav-link-bookapp">BOOK
                        AN APPOINTMENT</a></li>
                </ul>

            </nav>
        </section>
    )

}

export default Navbar;