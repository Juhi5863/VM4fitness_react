import img1 from '../Assests/30.webp'
import img2 from '../Assests/31.webp'
import img3 from '../Assests/33.webp'
import img4 from '../Assests/34.webp'
import {isMobile, isTablet} from "../Utility";

export function Achievment(){
    return (
        <>
            <section className="achive-sec">
                <div className="achive-container">
                    <h2 className="achive-header">Our Achivements</h2>
                    {isMobile() || isTablet() ?
                        <div className="">

                            <div className="">
                                <div className="achive-container-mobile">
                                    <img src={img1} className="weight-loss-icon" alt=""/>
                                </div>

                                <div className="achive-headings pt10">
                                    <h3 className="h3-heading" data-target="5">5+</h3>
                                    <p className="p-para">Year of Experience</p>
                                </div>
                            </div>
                            <div style={{height: 40}}></div>
                            <div className="">
                                    <div className="achive-container-mobile">
                                        <img src={img2} className="weight-loss-icon" alt=""/>
                                    </div>

                                    <div className="achive-headings pt10">
                                        <h3 className="h3-heading" data-target="3000">3000+</h3>
                                        <p className="p-para">Satisfied Customers</p>
                                    </div>
                                </div>

                            <div style={{height: 40}}></div>
                            <div className="">
                                    <div className="achive-container-mobile">
                                        <img src={img3} className="weight-loss-icon" alt=""/>
                                    </div>

                                    <div className="achive-headings pt10">
                                        <h3 className="h3-heading" data-target="15000">15000+</h3>
                                        <p className="p-para">Number of Kgs lost </p>
                                    </div>
                                </div>

                            <div style={{height: 40}}></div>
                            <div className="">
                                <div className="achive-container-mobile">
                                    <img src={img4} className="weight-loss-icon" alt=""/>
                                </div>
                                <div className="achive-headings pt10">
                                    <h3 className="h3-heading" data-target="9">9+</h3>
                                    <p className="p-para">Country</p>
                                </div>
                            </div>


                        </div>:
                        <div className="achive-content">

                        <div className="achive-wrapper">
                            <div className="achive-box">
                                <div className="achive-icon">
                                    <img src={img1} className="weight-loss-icon" alt=""/>
                                </div>

                                <div className="achive-headings">
                                    <h3 className="h3-heading" data-target="5">5+</h3>
                                    <p className="p-para">Year of Experience</p>
                                </div>
                            </div>

                            <div className="achive-box">
                                <div className="achive-icon">
                                    <img src={img2} className="weight-loss-icon" alt=""/>
                                </div>

                                <div className="achive-headings">
                                    <h3 className="h3-heading" data-target="3000">3000+</h3>
                                    <p className="p-para">Satisfied Customers</p>
                                </div>
                            </div>

                            <div className="achive-box">
                                <div className="achive-icon">
                                    <img src={img3} className="weight-loss-icon" alt=""/>
                                </div>

                                <div className="achive-headings">
                                    <h3 className="h3-heading" data-target="15000">15000+</h3>
                                    <p className="p-para">Number of Kgs lost </p>
                                </div>
                            </div>

                            <div className="achive-box">
                                <div className="achive-icon">
                                    <img src={img4} className="weight-loss-icon" alt=""/>
                                </div>
                                <div className="achive-headings">
                                    <h3 className="h3-heading" data-target="9">9+</h3>
                                    <p className="p-para">Country</p>
                                </div>
                            </div>
                        </div>

                    </div>}

                </div>

            </section>

        </>
    )
}