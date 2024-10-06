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
                <div className="">
                    <div  style={{width: '60%', margin: "auto", padding: '1%'}}>
                        <h2 className="service-header">Testimonial</h2>

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
                            slidesToSlide={3}
                            swipeable

                        >
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img1} alt="Testimonial Image" className="testimonial-img" style={{color: "white"}}/>
                                    <h2 className="testimonial-name">Divya Tiwari From Bengalore</h2>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img2} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Kamla From Delhi</h2>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img3} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Mayank Agarwal form Prayagraj</h2>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img4} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Sahil Kamran From Aligarh</h2>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img5} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Surbhi Purwar From Bengalore</h2>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img6} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Saikat Sinha From Kolkata</h2>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img7} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Shakti Pandey From Dehradun</h2>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img8} alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Shrey Pahwa From Haryana</h2>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-box">
                                    <img src={img9}alt="Testimonial Image" className="testimonial-img"/>
                                    <h2 className="testimonial-name">Deepti From Dhanbad</h2>
                                </div>
                            </div>


                        </Carousel>
                    </div>
                </div>
            </>
    )
}