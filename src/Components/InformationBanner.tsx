import { MdCall } from "react-icons/md";
import {useState} from "react";
import {isMobile} from "../Utility";


function  InformationBanner(){


    return (
        <>
            <section className="nav-top">
                <nav className="top-navbar fixed-top">
                    <ul className="contact-info">
                        <li className="left"><a href="tel:+918396952909" className="nav1-link">
                            <MdCall className="fa-regular fa-envelope"/>
                            +91-8396952909</a></li>
                        {
                            isMobile() ?

                                <div className="hamburger">
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>
                                :
                                <>
                        <li className="middle"><a href="mailto:mimansa@vm4fitness.com" className="nav1-link"><i
                            className="fa-regular fa-envelope"></i> mimansa@vm4fitness.com</a></li>

                        <li className="right"><a href="https://calendly.com/vik4fitness/consultation-appointment"
                                                 target="_blank" rel="noopener noreferrer" className="nav1-link"><i
                            className="fa-regular fa-clock"></i> 10:00 AM – 10:00 PM IST</a></li>
                                </>
                        }

                    </ul>
                </nav>


            </section>
        </>
    )
}

export default InformationBanner;