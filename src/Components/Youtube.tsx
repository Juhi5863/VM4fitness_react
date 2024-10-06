export function Youtube(){
    return (
        <>
            <section id="trending-section">
                <div className="youtube-container">
                    <h2 className="youtube-head">Trending on YouTube</h2>
                    <div className="trending-container">
                        <div className="video-card">
                            <iframe width="300" height="205" src="https://www.youtube.com/embed/rkeg27zFcfw"
                                    title="Saikat Client Interview" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <h3 className="video-title">Saikat Client Interview</h3>
                        </div>
                        <div className="video-card">
                            <iframe width="300" height="205" src="https://www.youtube.com/embed/fsD0Sjtb-9w"
                                    title="Testimonial ( Surbhi Purwar)" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <h3 className="video-title">Surbhi Purwar Client Interview</h3>
                        </div>
                        <div className="video-card">
                            <iframe width="300" height="205" src="https://www.youtube.com/embed/ShVe0T4rF-4"
                                    title="Transformation (Mayank Agrawal)" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <h3 className="video-title">Mayank Agrawal Client Interview</h3>
                        </div>

                    </div>
                    <a href="https://www.youtube.com/@vm4fitness" target="_blank" rel="noopener noreferrer">
                        <button className="youtube-button">View More Video</button>
                    </a>
                </div>

            </section>
        </>
    )
}