import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../Assests/Healthy Weightloss.webp'
import img2 from '../Assests/Diabetes Reversal.webp'
import img3 from '../Assests/Fatty Liver Reversal.webp'
import img4 from '../Assests/Gut Health.webp'
import img5 from '../Assests/Cholesterol Health.webp'
import img6 from '../Assests/High BP Issues.webp'
import img7 from '../Assests/PCOD Reversal.webp'
import img8 from '../Assests/Thyroid Reversal.webp'
import img9 from '../Assests/Uric Acid Reversal.webp'
import {isMobile} from "../Utility";
import React from "react";



export function Service() {
    return (
        <>
            <div style={{background: "#003220"}} id="user-service">
            <div className="default-div" style={{background: "#003220", paddingTop: 40, fontFamily: "cursive",fontWeight: "bolder",fontSize: 51}}>
                <h2 className="service-header">Our Service </h2>

                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={isMobile() ? 1 : 3 }
                    swipeable

                >
                    <div className="service-slide" >
                        <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="box-image">
                                        <img src={img1} alt="" className="box-img "/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                    </div>
                                    <div className="img-content">
                                        <h2 className="h2-name">Healthy Weightloss</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="service-slide">
                        <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="box-image">
                                        <img src={img2} alt="" className="box-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                    </div>
                                    <div className="img-content">
                                        <h2 className="h2-name">Diabetes Reversal</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="service-slide">
                        <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="box-image">
                                        <img src={img3} alt="" className="box-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                    </div>
                                    <div className="img-content">
                                        <h2 className="h2-name">Fatty Liver Reversal</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="service-slide">
                        <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="box-image">
                                        <img src={img4} alt="" className="box-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                    </div>
                                    <div className="img-content">
                                        <h2 className="h2-name">Gut Health</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="service-slide">
                        <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="box-image">
                                        <img src={img5} alt="" className="box-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                    </div>
                                    <div className="img-content">
                                        <h2 className="h2-name">Cholesterol control</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="service-slide">
                        <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="box-image">
                                        <img src={img6} alt="" className="box-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                    </div>
                                    <div className="img-content">
                                        <h2 className="h2-name">High BP Regulation</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="service-slide">
                        <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="box-image">
                                        <img src={img7} alt="" className="box-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                    </div>
                                    <div className="img-content">
                                        <h2 className="h2-name">PCOD Reversal</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="service-slide">
                        <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="box-image">
                                        <img src={img8} alt="" className="box-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                    </div>
                                    <div className="img-content">
                                        <h2 className="h2-name">Thyroid Reversal</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="service-slide">
                        <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="box-image">
                                        <img src={img9} alt="" className="box-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                    </div>
                                    <div className="img-content">
                                        <h2 className="h2-name">Uric Acid Reversal</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </Carousel>
            </div>

            </div>
        </>
    )
}