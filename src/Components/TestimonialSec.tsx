import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../Assests/2.1.webp'
import img2 from '../Assests/2.2.webp'
import img3 from '../Assests/2.3.webp'
import img4 from '../Assests/2.4.webp'
import img5 from '../Assests/2.5.webp'
import img6 from '../Assests/2.6.webp'
import img7 from '../Assests/2.7.webp'
import img8 from '../Assests/2.8.webp'
import img9 from '../Assests/2.9.webp'
import {isMobile} from "../Utility";
import {BsInstagram} from "react-icons/bs";
import React from "react";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export function TestimonialSec (){
    return (
            <>
                <div className="" id="user-testimonial-section" style={{padding: 20}}>
                    <div className="default-div">
                        <h2 className="" style={{textAlign: "center", fontFamily: "cursive", fontSize: "-webkit-xxx-large", fontWeight: "bolder", paddingTop: 20}}>Testimonials</h2>

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
                            slidesToSlide={isMobile() ? 1 : 3}
                            swipeable

                        >
                            {/*<div className="flip-box">*/}
                            {/*    <div className="flip-box-inner">*/}
                            {/*        <div className="flip-box-front">*/}
                            {/*            <img src="img_paris.jpg" alt="Paris" style={{width: 300, height: 200}}/>*/}
                            {/*        </div>*/}
                            {/*        <div className="flip-box-back">*/}
                            {/*            <h2>Paris</h2>*/}
                            {/*            <p>What an amazing city</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className="flip-box">*/}
                            {/*    <div className="testimonial-slide flip-box-inner">*/}
                            {/*        <div className="testimonial-box flip-box-front">*/}
                            {/*            <img src={img1} alt="Testimonial Image" className="testimonial-img"*/}
                            {/*                 style={{color: "white"}}/>*/}
                            {/*            <h2 className="testimonial-name">Divya Tiwari From Bengalore</h2>*/}
                            {/*        </div>*/}
                            {/*        <div className="flip-box-back">*/}
                            {/*            <h2 style={{padding: 10}}>Divya Tiwari From Bengalore</h2>*/}
                            {/*            <button style={{borderRadius: 5}}><a href="https://www.instagram.com/vm4fitness/"*/}
                            {/*               target="_blank">Read More</a> </button>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}




                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img2} alt="Testimonial Image" className="testimonial-img"/>
                                    {
                                        isMobile() ? <></> :
                                            <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                    }

                                    <h2 className="testimonial-name">Kamla From Delhi</h2>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img3} alt="Testimonial Image" className="testimonial-img"/>
                                    {
                                        isMobile() ? <></> :
                                            <button className="testimonial-img-button testimonial-btn fourth">Read More
                                            </button>
                                    }
                                    <h2 className="testimonial-name">Mayank Agarwal form Prayagraj</h2>
                                    </div>
                                </div>
                            <div className="testimonial-slide">
                                    <div className="testimonial-box">
                                        <img src={img4} alt="Testimonial Image" className="testimonial-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                        <h2 className="testimonial-name">Sahil Kamran From Aligarh</h2>
                                    </div>
                                </div>
                            <div className="testimonial-slide">
                                    <div className="testimonial-box">
                                        <img src={img5} alt="Testimonial Image" className="testimonial-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                        <h2 className="testimonial-name">Surbhi Purwar From Bengalore</h2>
                                    </div>
                                </div>
                            <div className="testimonial-slide">
                                    <div className="testimonial-box">
                                        <img src={img6} alt="Testimonial Image" className="testimonial-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                        <h2 className="testimonial-name">Saikat Sinha From Kolkata</h2>
                                    </div>
                                </div>
                            <div className="testimonial-slide">
                                    <div className="testimonial-box">
                                        <img src={img7} alt="Testimonial Image" className="testimonial-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                        <h2 className="testimonial-name">Shakti Pandey From Dehradun</h2>
                                    </div>
                                </div>
                            <div className="testimonial-slide">
                                    <div className="testimonial-box">
                                        <img src={img8} alt="Testimonial Image" className="testimonial-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                        <h2 className="testimonial-name">Shrey Pahwa From Haryana</h2>
                                    </div>
                                </div>
                            <div className="testimonial-slide">
                                    <div className="testimonial-box">
                                        <img src={img9} alt="Testimonial Image" className="testimonial-img"/>
                                        {
                                            isMobile() ? <></> :
                                                <button onClick={() => window.open('https://calendly.com/vik4fitness/consultation-appointment', 'mywindow')} className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                        <h2 className="testimonial-name">Deepti From Dhanbad</h2>
                                    </div>
                                </div>


                        </Carousel>
                    </div>
                </div>
            </>
    )
}