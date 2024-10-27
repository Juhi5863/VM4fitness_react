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

import img0 from '../Assests/testi.png'
import {BsInstagram} from "react-icons/bs";
import React from "react";
import img from "../Assests/youtube.png";
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
                    <div className="default-div" style={{
                        textAlign: "center"
                    }}>
                        {/*<h2 className="" style={{textAlign: "center", fontFamily: "cursive", fontSize: "-webkit-xxx-large", fontWeight: "bolder", paddingTop: 20}}>Testimonials</h2>*/}

                        {
                            isMobile() ? <img width="250px" style={{marginBottom: 20}} src={img0}/> : <img width="28%" style={{marginBottom: 20}} src={img0}/>
                        }

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





                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img2} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Kamla From Delhi</h2>
                                    {
                                        isMobile() ? <><a className="blog-button" target="_blank"
                                                          href="https://www.instagram.com/p/C2UC9livkD7/?img_index=1">
                                                <button style={{marginTop: 10}} className="blog-button"
                                                        data-modal-id="1">Read More
                                                </button>
                                            </a></> :
                                            <button
                                                onClick={() => window.open('https://www.instagram.com/p/C2UC9livkD7/?img_index=1', 'mywindow')}
                                                className="testimonial-img-button testimonial-btn fourth">Read More
                                            </button>
                                    }

                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img3} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Mayank Agarwal form Prayagraj</h2>
                                    {
                                        isMobile() ? <><a target="_blank"
                                                          href="https://www.instagram.com/p/CO-iuLkh3-v/">
                                                <button style={{marginTop: 10}} className="blog-button"
                                                        data-modal-id="1">Read More
                                                </button>
                                            </a></> :
                                            <button
                                                onClick={() => window.open('https://www.instagram.com/p/CO-iuLkh3-v/', 'mywindow')}
                                                className="testimonial-img-button testimonial-btn fourth">Read More
                                            </button>
                                    }
                                </div>
                            </div>
                            <div className="testimonial-slide">
                            <div className="testimonial-box">
                                    <img src={img4} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Sahil Kamran From Aligarh</h2>
                                    {
                                        isMobile() ? <><a target="_blank"
                                                          href="https://www.instagram.com/p/CnuLRY_AtmQ/?img_index=1">
                                                <button style={{marginTop: 10}} className="blog-button"
                                                        data-modal-id="1">Read More
                                                </button>
                                            </a></> :
                                            <button
                                                onClick={() => window.open('https://www.instagram.com/p/CnuLRY_AtmQ/', 'mywindow')}
                                                className="testimonial-img-button testimonial-btn fourth">Read More
                                            </button>
                                    }
                                </div>
                            </div>
                            <div className="testimonial-slide">
                            <div className="testimonial-box">
                                        <img src={img5} alt="Testimonial Image" className="testimonial-img"/>
                                        <h2 className="testimonial-name">Surbhi Purwar From Bengalore</h2>
                                        {
                                            isMobile() ? <><a target="_blank"
                                                              href="https://www.youtube.com/watch?v=fsD0Sjtb-9w&t=1s">
                                                    <button style={{marginTop: 10}} className="blog-button"
                                                            data-modal-id="1">Read More
                                                    </button>
                                                </a></> :
                                                <button
                                                    onClick={() => window.open('https://www.youtube.com/watch?v=fsD0Sjtb-9w&t=1s', 'mywindow')}
                                                    className="testimonial-img-button testimonial-btn fourth">Read More
                                                </button>
                                        }
                                    </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img6} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Saikat Sinha From Kolkata</h2>
                                    {
                                        isMobile() ? <><a target="_blank"
                                                          href="https://www.instagram.com/p/CPD855osPUg/?img_index=1">
                                                <button style={{marginTop: 10}} className="blog-button"
                                                        data-modal-id="1">Read More
                                                </button>
                                            </a></> :
                                            <button
                                                onClick={() => window.open('https://www.instagram.com/p/CPD855osPUg/', 'mywindow')}
                                                className="testimonial-img-button testimonial-btn fourth">Read More
                                            </button>
                                    }
                                </div>
                            </div>
                            <div className="testimonial-slide">
                            <div className="testimonial-box">
                                    <img src={img7} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Shakti Pandey From Dehradun</h2>

                                    {
                                        isMobile() ? <><a target="_blank"
                                                          href="https://www.instagram.com/p/DA8vftsPBFW/?img_index=1">
                                                <button style={{marginTop: 10}} className="blog-button"
                                                        data-modal-id="1">Read More
                                                </button>
                                            </a></> :
                                            <button
                                                onClick={() => window.open('https://www.instagram.com/p/DA8vftsPBFW/', 'mywindow')}
                                                className="testimonial-img-button testimonial-btn fourth">Read More
                                            </button>
                                    }
                                </div>
                            </div>
                            <div className="testimonial-slide">
                            <div className="testimonial-box">
                                    <img src={img8} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Shrey Pahwa From Haryana</h2>

                                    {
                                        isMobile() ? <><a target="_blank"
                                                          href="https://www.instagram.com/p/DA8vftsPBFW/?img_index=1">
                                                <button style={{marginTop: 10}} className="blog-button"
                                                        data-modal-id="1">Read More
                                                </button>
                                            </a></> :
                                            <button
                                                onClick={() => window.open('https://www.instagram.com/p/DA8vftsPBFW/', 'mywindow')}
                                                className="testimonial-img-button testimonial-btn fourth">Read More
                                            </button>
                                    }
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img9} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Deepti From Dhanbad</h2>

                                    {
                                        isMobile() ? <><a target="_blank"
                                                          href="https://www.instagram.com/p/DA8vftsPBFW/?img_index=1">
                                                <button style={{marginTop: 10}} className="blog-button"
                                                        data-modal-id="1">Read More
                                                </button>
                                            </a></> :
                                            <button
                                                onClick={() => window.open('https://www.instagram.com/p/DA8vftsPBFW/', 'mywindow')}
                                                className="testimonial-img-button testimonial-btn fourth">Read More
                                            </button>
                                    }
                                </div>
                            </div>


                        </Carousel>
                    </div>
                </div>
            </>
    )
}
