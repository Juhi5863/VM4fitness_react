import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../Assests/blog1.webp'
import img2 from '../Assests/blog2.webp'
import img3 from '../Assests/blog3.webp'
import {isMobile} from "../Utility";
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

export function Blog() {
    return (
        <>
            <div className="blog-sec" style={{borderRadius: "5"}}>
            <div className="default-div">
                <h2 className="service-header" style={{color: "white"}}>Latest Buzz</h2>

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
                    <div className="blog-slide">
                        <div className="blog-box">
                            <div className="blog-image-content">
                                <span className="blog-overlay"></span>
                                <div className="blog-box-image">
                                    <img src={img1} alt=""/>
                                </div>
                            </div>
                            <div className="blog-img-content">
                                <p className="blog-description">
                                    Revitalize Your Body: The Emotional Journey of a 7-Day Weight Loss Diet Plan
                                </p>
                                <button className="blog-button" data-modal-id="1">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="blog-slide">
                        <div className="blog-box">
                            <div className="blog-image-content">
                                <span className="blog-overlay"></span>
                                <div className="blog-box-image">
                                    <img src={img2} alt=""></img>
                                </div>
                            </div>
                            <div className="blog-img-content">
                                <p className="blog-description">
                                    Embrace Your Journey: How a Life-Changing Diet Empowers Weight Loss

                                </p>
                                <button className="blog-button" data-modal-id="2">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="blog-slide">
                        <div className="blog-box">
                            <div className="blog-image-content">
                                <span className="blog-overlay"></span>
                                <div className="blog-box-image">
                                    <img src={img3} alt=""></img>
                                </div>
                            </div>
                            <div className="blog-img-content">
                                <p className="blog-description">
                                    Choosing Emotional Wellness Over Weight Loss Tablets and Drinks
                                </p>
                                <button className="blog-button" data-modal-id="3">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="blog-slide">
                        <div className="blog-box">
                            <div className="blog-image-content">
                                <span className="blog-overlay"></span>
                                <div className="blog-box-image">
                                    <img src="images/VM_Logo.webp" alt=""></img>
                                </div>
                            </div>
                            <div className="blog-img-content">
                                <p className="blog-description">
                                    Top 10 Emotional Triggers for Weight Gain and How to Overcome Them </p>
                                <button className="blog-button" data-modal-id="4">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="blog-slide">
                        <div className="blog-box">
                            <div className="blog-image-content">
                                <span className="blog-overlay"></span>
                                <div className="blog-box-image">
                                    <img src="images/VM_Logo.webp" alt=""></img>
                                </div>
                            </div>
                            <div className="blog-img-content">
                                <p className="blog-description">
                                    Discover 12 delicious homemade gut health drinks to maintain optimal gut health.
                                    Explore recipes for nourishing beverages packed with probiotics & nutrients.
                                </p>
                                <button className="blog-button" data-modal-id="5">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="blog-slide">
                        <div className="blog-box">
                            <div className="blog-image-content">
                                <span className="blog-overlay"></span>
                                <div className="blog-box-image">
                                    <img src="images/VM_Logo.webp" alt=""></img>
                                </div>
                            </div>
                            <div className="blog-img-content">
                                <p className="blog-description">
                                    Discover 12 delicious homemade gut health drinks to maintain optimal gut health.
                                    Explore recipes for nourishing beverages packed with probiotics & nutrients.
                                </p>
                                <button className="blog-button" data-modal-id="6">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="blog-slide">
                        <div className="blog-box">
                            <div className="blog-image-content">
                                <span className="blog-overlay"></span>
                                <div className="blog-box-image">
                                    <img src="images/VM_Logo.webp" alt=""></img>
                                </div>
                            </div>
                            <div className="blog-img-content">
                                <p className="blog-description">
                                    Discover 12 delicious homemade gut health drinks to maintain optimal gut health.
                                    Explore recipes for nourishing beverages packed with probiotics & nutrients.
                                </p>
                                <button className="blog-button" data-modal-id="7">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="blog-slide">
                        <div className="blog-box">
                            <div className="blog-image-content">
                                <span className="blog-overlay"></span>
                                <div className="blog-box-image">
                                    <img src="images/VM_Logo.webp" alt=""></img>
                                </div>
                            </div>
                            <div className="blog-img-content">
                                <p className="blog-description">
                                    Discover 12 delicious homemade gut health drinks to maintain optimal gut health.
                                    Explore recipes for nourishing beverages packed with probiotics & nutrients.
                                </p>
                                <button className="blog-button" data-modal-id="8">Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="blog-slide">
                        <div className="blog-box">
                            <div className="blog-image-content">
                                <span className="blog-overlay"></span>
                                <div className="blog-box-image">
                                    <img src="images/VM_Logo.webp" alt=""></img>
                                </div>
                            </div>
                            <div className="blog-img-content">
                                <p className="blog-description">
                                    Discover 12 delicious homemade gut health drinks to maintain optimal gut health.
                                    Explore recipes for nourishing beverages packed with probiotics & nutrients.
                                </p>
                                <button className="blog-button" data-modal-id="9">Read More</button>
                            </div>
                        </div>
                    </div>
                    

                </Carousel>
            </div>
            </div>
        </>
    )
}