import img1 from '../Assests/30.webp'
import img2 from '../Assests/31.webp'
import img3 from '../Assests/33.webp'
import img4 from '../Assests/34.webp'
import {isMobile, isTablet} from "../Utility";
import CountUp from "react-countup";
import img0 from '../Assests/our_Achiv.png'
import img from "../Assests/img.png";
import React from "react";
export function Achievment(){
    return (
        <>
            <section className="achive-sec">
                <div className="achive-container">
                    {/*<h2 className="achive-header">Our Achivements</h2>*/}
                    <img width="30%" src={img0}/>

                    {isMobile() ?
                        <div className="">

                            <div className="">
                                <div className="achive-container-mobile">
                                    <img src={img1} className="weight-loss-icon" alt=""/>
                                </div>

                                <div className="achive-headings pt10">
                                    <h3 className="h3-heading" data-target="5"><CountUp end={5} duration={5}/>+</h3>
                                    <p className="p-para">Year of Experience</p>
                                </div>
                            </div>
                            <div style={{height: 40}}></div>
                            <div className="">
                                <div className="achive-container-mobile">
                                    <img src={img2} className="weight-loss-icon" alt=""/>
                                </div>

                                <div className="achive-headings pt10">
                                    <h3 className="h3-heading" data-target="3000"><CountUp end={3000} duration={4}/>+
                                    </h3>
                                    <p className="p-para">Satisfied Customers</p>
                                </div>
                            </div>

                            <div style={{height: 40}}></div>
                            <div className="">
                                <div className="achive-container-mobile">
                                    <img src={img3} className="weight-loss-icon" alt=""/>
                                </div>

                                <div className="achive-headings pt10">
                                    <h3 className="h3-heading" data-target="15000"><CountUp end={15000} duration={6}/>+
                                    </h3>
                                    <p className="p-para">Number of Kgs lost </p>
                                </div>
                            </div>

                            <div style={{height: 40}}></div>
                            <div className="">
                                <div className="achive-container-mobile">
                                    <img src={img4} className="weight-loss-icon" alt=""/>
                                </div>
                                <div className="achive-headings pt10">
                                    <h3 className="h3-heading" data-target="9"><CountUp end={9} duration={5}/>+</h3>
                                    <p className="p-para">Country</p>
                                </div>
                            </div>


                        </div> : isTablet() ?
                            <div className="achive-content">

                                <div className="achive-wrapper">

                                    <div className="achive-box">
                                        <div className="achive-icon">
                                            <img src={img2} className="weight-loss-icon" alt=""/>
                                        </div>

                                        <div className="achive-headings">
                                            <h3 className="h3-heading" data-target="3000"><CountUp end={3000}
                                                                                                   duration={4}/>+</h3>
                                            <p className="p-para">Satisfied Customers</p>
                                        </div>
                                    </div>
                                    <div className="achive-box">
                                        <div className="achive-icon">
                                            <img src={img1} className="weight-loss-icon" alt=""/>
                                        </div>

                                        <div className="achive-headings">
                                            <h3 className="h3-heading" data-target="5"><CountUp end={5} duration={5}/>+
                                            </h3>
                                            <p className="p-para">Year of Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="achive-wrapper">
                                    <div className="achive-box">
                                        <div className="achive-icon">
                                            <img src={img4} className="weight-loss-icon" alt=""/>
                                        </div>
                                        <div className="achive-headings">
                                            <h3 className="h3-heading" data-target="9"><CountUp end={9} duration={5}/>+
                                            </h3>
                                            <p className="p-para">Country</p>
                                        </div>
                                    </div>
                                    <div className="achive-box">
                                        <div className="achive-icon">
                                            <img src={img3} className="weight-loss-icon" alt=""/>
                                        </div>

                                        <div className="achive-headings">
                                            <h3 className="h3-heading" data-target="15000"><CountUp end={15000}
                                                                                                    duration={6}/>+</h3>
                                            <p className="p-para">Number of Kgs lost </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            :
                            <div className="achive-content">

                                <div className="achive-wrapper">
                                    <div className="achive-box">
                                        <div className="achive-icon">
                                            <img src={img1} className="weight-loss-icon" alt=""/>
                                        </div>

                                        <div className="achive-headings">
                                            <h3 className="h3-heading" data-target="5"><CountUp end={5} duration={5}/>+
                                            </h3>
                                            <p className="p-para">Year of Experience</p>
                                        </div>
                                    </div>

                                    <div className="achive-box">
                                        <div className="achive-icon">
                                            <img src={img2} className="weight-loss-icon" alt=""/>
                                        </div>

                                        <div className="achive-headings">
                                            <h3 className="h3-heading" data-target="3000"><CountUp end={3000}
                                                                                                   duration={4}/>+</h3>
                                            <p className="p-para">Satisfied Customers</p>
                                        </div>
                                    </div>

                                    <div className="achive-box">
                                        <div className="achive-icon">
                                            <img src={img3} className="weight-loss-icon" alt=""/>
                                        </div>

                                        <div className="achive-headings">
                                            <h3 className="h3-heading" data-target="15000"><CountUp end={15000}
                                                                                                    duration={6}/>+</h3>
                                            <p className="p-para">Number of Kgs lost </p>
                                        </div>
                                    </div>

                                    <div className="achive-box">
                                        <div className="achive-icon">
                                            <img src={img4} className="weight-loss-icon" alt=""/>
                                        </div>
                                        <div className="achive-headings">
                                            <h3 className="h3-heading" data-target="9"><CountUp end={9} duration={5}/>+
                                            </h3>
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
