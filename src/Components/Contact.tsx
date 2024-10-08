import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { GoMail } from "react-icons/go";
import img1 from '../Assests/logo.webp'
import  img2 from '../Assests/contact_banner.jpg'
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { LuPartyPopper } from "react-icons/lu";



import img from "../Assests/banner-Privacy-Policy-1.jpg";
export function Contact(){
    return (
        <>
            {/*<section id="home">*/}
            {/*    <div className="slider" style={{paddingTop: 0}}>*/}
            {/*        <div className="slides">*/}
            {/*            <img src={img2} className="slide" style={{width: "-webkit-fill-available"}} alt=""/>*/}
            {/*        </div>*/}

            {/*    </div>*/}


            {/*</section>*/}

            <div className="default-div" style={{margin:"auto", textAlign: "center" , padding: 30}}>
            <h1 className="contact-header"><LuPartyPopper  color="red"/>
                 Choose the plan that fits you, and only you.</h1>
            <p className="des-heading">
                Dreaming about your websites coming to life in seconds? Now they can be.
            </p>
            </div>

            <div className="wrapper-contact default-div" style={{margin: "auto"}}>
                <div className="pricing-table">
                    <div className="head">
                        <h4 className="title">Basic</h4>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h1><i className="fa-solid fa-euro-sign"></i>₹ 15</h1>
                        </div>

                        <ul>
                            <li><IoIosCheckmarkCircle  className="fa-solid fa-circle-check"/>
                                One Selected Template</li>
                            <li><IoIosCheckmarkCircle  className="fa-solid fa-circle-check"/>100% Responsive Design</li>
                            <li><IoIosCheckmarkCircle  className="fa-solid fa-circle-check"/>Free Cancelation</li>
                            <li><IoIosCheckmarkCircle  className="fa-solid fa-circle-check"/>0 accounts</li>
                            <li><IoIosCheckmarkCircle  className="fa-solid fa-circle-check"/>24/7 Support</li>
                            <li><IoIosCheckmarkCircle  className="fa-solid fa-circle-check"/>Lifetime Template Updates</li>
                        </ul>

                        <div className="buy-now">
                            <a href="#" className="btn round">Purchase Now</a>
                        </div>
                    </div>
                </div>

                <div className="pricing-table">
                    <div className="head">
                        <span className="spam-popular">Popular</span>
                        <h4 className="title">Standard</h4>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h1><i className="fa-solid fa-euro-sign"></i>₹ 30</h1>
                        </div>

                        <ul>
                            <li><FaCircleXmark className="a-solid fa-circle-xmark" />
                                One Selected Template</li>
                            <li><i className="fa-solid fa-circle-check"></i>100% Responsive Design</li>
                            <li><i className="fa-solid fa-circle-check"></i>Free Cancelation</li>
                            <li><i className="fa-solid fa-circle-check"></i>10 accounts</li>
                            <li><i className="fa-solid fa-circle-check"></i>24/7 Support</li>
                            <li><i className="fa-solid fa-circle-xmark"></i>Lifetime Template Updates</li>
                        </ul>

                        <div className="buy-now">
                            <a href="#" className="btn round">Purchase Now</a>
                        </div>
                    </div>
                </div>

                <div className="pricing-table">
                    <div className="head">

                        <h4 className="title">Premium</h4>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h1 className="pricing-amount" ><i className="fa-solid fa-euro-sign "></i>₹ 50</h1>
                        </div>

                        <ul>
                            <li><i className="fa-solid fa-circle-check"></i>One Selected Template</li>
                            <li><i className="fa-solid fa-circle-check"></i>100% Responsive Design</li>
                            <li><i className="fa-solid fa-circle-check"></i>Free Cancelation</li>
                            <li><i className="fa-solid fa-circle-check"></i>10 accounts</li>
                            <li><i className="fa-solid fa-circle-check"></i>24/7 Support</li>
                            <li><i className="fa-solid fa-circle-check"></i>Lifetime Template Updates</li>
                        </ul>

                        <div className="buy-now">
                            <a href="#" className="btn round">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>


            <section id="contact" className="contact-sec" style={{marginTop: 20}}>
                <div className="contact-items">
                    <div className="container-contact">
                        <div className="contactInfo">
                            <div className="contant-box">
                                <div className="icon-contact">
                                    <FaLocationDot className="fa-solid fa-location-dot"/>

                                </div>
                                <div className="text">
                                    <a href="tel:+918396952909">
                                        <h3 className="contact-head2">Headquarter</h3>
                                        <p>Bangalore, India</p>
                                    </a>
                                </div>
                            </div>

                            <div className="contant-box">
                                <div className="icon-contact">
                                    <MdLocalPhone className="fa-solid fa-phone phone"/>
                                </div>
                                <div className="text">
                                    <a href="tel:+918396952909">
                                        <h3 className="contact-head2">Phone No.</h3>
                                        <p>8396952909</p>
                                    </a>
                                </div>
                            </div>

                            <div className="contant-box">
                                <div className="icon-contact">
                                    {/*<i className="fa-solid fa-envelope email1"></i>*/}
                                    <GoMail className="fa-regular fa-envelope"/>
                                </div>
                                <div className="text">
                                    <a href="mailto:mimansa@vm4fitness.com">
                                        <h3 className="contact-head2">Email</h3>
                                        <p>mimansa@vm4fitness.com</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            onClick={() => window.open('https://calendly.com/vik4fitness/consultation-appointment', 'mywindow')}

                            rel="noopener noreferrer" className="contact-link">
                            <div className="contactForm">
                                <h2 className="contact-heading">Let's Connect and Achieve Your Fitness Goals
                                    Together!</h2>
                                <p className="contact-para">
                                    At VM4Fitness, we're here to support you every step of the way. Whether you have
                                    questions, need
                                    guidance, or want to learn more about our programs, our team is ready to help.
                                </p>
                                <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                                   rel="noopener noreferrer"><p className="contact-para cont-paraa">Get in touch
                                    with us
                                    today <i className="fa-solid fa-arrow-right"></i></p>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}