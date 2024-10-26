import { MdCall } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { GoClockFill } from "react-icons/go";


import React, {useState} from "react";
import {isMobile} from "../Utility";


function  InformationBanner(){

    const [menu, setMenu] = useState(false);
    function openHamburger() {
        setMenu(!menu);
    }

    return (
        <>
            {
                menu && isMobile()?
                <div className="hamburger-menu">
                    <ul className="nav-menu" >

                                <li className="nav-item"><a href="/" onClick={() => {setMenu(!menu)}} className="nav-link">HOME</a></li>
                        <hr style={{margin:0}}/>
                                <li className="nav-item"><a href="/#testimonial" onClick={() => {setMenu(!menu)}} className="nav-link">TESTIMONIAL</a></li>
                        <hr style={{margin:0}}/>

                        <li className="nav-item"><a href="/#user-service" onClick={() => {setMenu(!menu)}} className="nav-link">SERVICE</a></li>
                        <hr style={{margin:0}}/>

                        <li className="nav-item"><a href="/#user-blogSec" onClick={() => {setMenu(!menu)}} className="nav-link">BLOG</a></li>
                        <hr style={{margin:0}}/>

                        <li className="nav-item"><a href="/contact" onClick={() => {setMenu(!menu)}} target="_blank" className="nav-link">CONTACT US</a></li>
                    </ul>
                </div>
                : <></>
            }

            <section className="nav-top">
                <nav className="top-navbar fixed-top">
                    <div className="contact-info">
                        <li className="left"><a href="tel:+918396952909" className="nav1-link">
                            <div className="fa-regular fa-envelope"><MdCall className="fa-regular fa-clock" style={{padding: 3}}/></div>
                            +91-8396952909</a></li>
                        {
                            isMobile() ?

                                <div className="hamburger" onClick={() => {openHamburger()}}>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>
                                :
                                <>
                        <li className="middle"><a href="mailto:mimansa@vm4fitness.com" className="nav1-link">
                            <div className="fa-regular fa-envelope"><GoMail className="icon"/></div>
                            mimansa@vm4fitness.com</a></li>
                                    <li className="right"><a
                                        href="https://calendly.com/vik4fitness/consultation-appointment"
                                        target="_blank" rel="noopener noreferrer" className="nav1-link">
                                        <div className="fa-regular fa-envelope"><GoClockFill
                                            className="fa-regular fa-clock" /></div>
                                        10:00 AM – 10:00 PM IST</a></li>
                                </>
                        }

                    </div>
                </nav>


            </section>
        </>
    )
}

export default InformationBanner;