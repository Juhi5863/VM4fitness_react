import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

export function Service() {
    return (
        <>
            <div  style={{width: '60%', margin: "auto"}}>
                <h2 className="service-header">Our Services</h2>

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
                    <div className="service-slide">
                        <a href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                           rel="noopener noreferrer">
                            <div className="box">
                                <div className="image-content">
                                    <span className="overlay"></span>
                                    <div className="box-image">
                                        <img src="images/Healthy Weightloss.webp" alt="" className="box-img"/>

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
                                        <img src="images/Diabetes Reversal.webp" alt="" className="box-img"/>
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
                                        <img src="images/Fatty Liver Reversal.webp" alt="" className="box-img"/>
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
                                        <img src="images/Gut Health.webp" alt="" className="box-img"/>
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
                                        <img src="images/Cholesterol Health.webp" alt="" className="box-img"/>
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
                                        <img src="images/High BP Issues.webp" alt="" className="box-img"/>
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
                                        <img src="images/PCOD Reversal.webp" alt="" className="box-img"/>
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
                                        <img src="images/Thyroid Reversal.webp" alt="" className="box-img"/>
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
                                        <img src="images/Uric Acid Reversal.webp" alt="" className="box-img"/>
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


        </>
    )
}