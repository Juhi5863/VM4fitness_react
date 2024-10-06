import img1 from '../Assests/facebook.webp'
import img2 from '../Assests/insta.svg'
import img3 from '../Assests/linkdin.webp'
import img4 from '../Assests/twitter.webp'
export function FooterOne(){
    return (
        <>
            <section id="footer-sect1" className="footer-sec1">
                <div className="container1">
                    <h2 className="footer-heading1">
                        Disclaimer: The outcomes of our programs may vary depending on individual factors such as
                        gender, age,
                        genetics, lifestyle, and adherence to dietary and training instructions.

                    </h2>
                </div>
            </section>

            <footer id="footer2-sec">
                <div className="footer2-container">
                    <div className="contact-footer2">
                        <a href="#contact">CONTACT US</a>
                    </div>

                    <div className="footer2-privacy">
                        <a href="privacy.html" target="_blank" rel="noopener noreferrer">PRIVACY POLICY</a>
                    </div>

                    <div className="col-md-51">
                        <ul className="social-media-list">
                            <li>
                                <a href="https://www.facebook.com/vm4fitness/" target="_blank"
                                   rel="noopener noreferrer"><img src={img1} alt="facebook"/></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/vm4fitness/" target="_blank"
                                   rel="noopener noreferrer"><img src={img2}  alt="insta"/></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/vm4fitness/" target="_blank"
                                   rel="noopener noreferrer"><img src={img3}  alt="linkdin"/></a>
                            </li>
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer"><img src={img4}
                                                                                          alt="twitter"/></a>
                            </li>

                        </ul>
                    </div>

                </div>
            </footer>

            <section className="footer3">
                <p>© Copyright 2024. All Rights Reserved</p>
            </section>
        </>
    )
}