import {isMobile} from "../Utility";
import img from '../Assests/youtube.png'
import React from "react";
import img0 from "../Assests/blog.png";
export function Youtube(){
    return (
        <>
            <section id="trending-section">
                <div className="youtube-container"style={{
                    textAlign: "center"
                }}>
                    {/*<h2  style={{color: "black", textAlign: "center", paddingTop: 20, fontFamily: "cursive", fontSize: 50, fontWeight: "bolder"}}>Latest Buzz</h2>*/}
                    {
                        isMobile() ? <img width="250px" style={{marginBottom: 20}} src={img}/> : <img width="28%" style={{marginBottom: 20}} src={img}/>
                    }
                    {/*<h2 className="youtube-head">Trending on YouTube</h2>*/}
                    {/*<img width="28%" src={img}/>*/}

                    <div className="trending-container">
                        <div className="video-card">
                            <iframe style={{width: "100%", height: "200px"}}
                                    src="https://www.youtube.com/embed/rkeg27zFcfw"
                                    title="Saikat Client Interview" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <h3 className="video-title">Saikat Client Interview</h3>
                        </div>
                        <div className="video-card">
                            <iframe style={{width: "100%", height: "200px"}}
                                    src="https://www.youtube.com/embed/fsD0Sjtb-9w"
                                    title="Testimonial ( Surbhi Purwar)" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <h3 className="video-title">Surbhi Purwar Client Interview</h3>
                        </div>
                        <div className="video-card">
                            <iframe style={{width: "100%", height: "200px"}}
                                    src="https://www.youtube.com/embed/ShVe0T4rF-4"
                                    title="Transformation (Mayank Agrawal)" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <h3 className="video-title">Mayank Agrawal Client Interview</h3>
                        </div>

                    </div>

                    <a href="https://www.youtube.com/@vm4fitness" target="_blank" rel="noopener noreferrer"
                       className="view-more-video">
                        <button className="youtube-button">View More Video</button>
                    </a>
                </div>

            </section>
        </>
    )
}
