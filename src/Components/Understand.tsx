import img1 from '../Assests/32.webp'
import img2 from '../Assests/2.webp'
import img3 from '../Assests/3.webp'
import img4 from '../Assests/1.4.webp'
import img5 from '../Assests/5.webp'
import img6 from '../Assests/6.webp'
import img from '../Assests/under_img.png'
import { motion } from "framer-motion";
import React from "react";
import {isMobile} from "../Utility";
export function Understand (){
    return (
        <>
            <section className="und-sec">
                <div className="und-container">
                    {
                        isMobile() ? <img width="250px" style={{marginBottom: 20}} src={img}/> : <img width="18%" style={{marginBottom: 20}} src={img}/>
                    }

                    {/*<h2 className="und-heading" style={{margin: 0}}>Understand Our Program</h2>*/}
                    <div className="und-content">
                        <motion.div className="und-column"
                                    initial={!isMobile() ? {
                                        opacity: 0,
                                        // if odd index card,slide from right instead of left
                                        x: -100
                                    }:{}}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0, // Slide in to its original position
                                        transition: {
                                            duration: 1 // Animation duration
                                        }
                                    }}
                                    viewport={{once: false}}
                        >
                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img1} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">1. Schedule A <a
                                        href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                                        rel="noopener noreferrer"> Free Pre-Consultation
                                    </a></h3>
                                    <p>Learn how we can help achieve your fitness goals.
                                    </p>
                                </div>
                            </div>

                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img2} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">2. Complete <a
                                        href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                                        rel="noopener noreferrer">Lifestyle Assessment Form</a>
                                    </h3>
                                    <p>Fill the Form by sharing your Lifestyle details and medical history.
                                    </p>
                                </div>
                            </div>

                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img3} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">3. Personalized One-on-One Consultation </h3>
                                    <p>Understand the root causes of your weight gain.
                                    </p>
                                </div>
                            </div>

                        </motion.div>

                        <motion.div className="und-column"
                                    initial={!isMobile() ? {
                                        opacity: 0,
                                        // if odd index card,slide from right instead of left
                                        x: 100
                                    }:{}}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0, // Slide in to its original position
                                        transition: {
                                            duration: 1 // Animation duration
                                        }
                                    }}
                                    viewport={{once: false}}
                        >

                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img4} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">4. ⁠Receive plan designed for your body & lifestyle
                                    </h3>
                                    <p>Receive a plan specifically designed for your lifestyle.
                                    </p>
                                </div>
                            </div>

                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img5} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">5. Weekly Tracking & Ongoing Support</h3>
                                    <p>Whatsapp Group is created for regular tracking and guidance from our coaches.
                                    </p>
                                </div>
                            </div>

                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img6} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">6. No Rebound
                                    </h3>
                                    <p>Long lasting results with maintenance diet plan.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
