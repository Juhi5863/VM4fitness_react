import img1 from '../Assests/32.webp'
import img2 from '../Assests/2.webp'
import img3 from '../Assests/3.webp'
import img4 from '../Assests/1.4.webp'
import img5 from '../Assests/5.webp'
import img6 from '../Assests/6.webp'
export function Understand (){
    return (
        <>
            <section className="und-sec">
                <div className="und-container">
                    <h2 className="und-heading">Understand Our Program</h2>
                    <div className="und-content">
                        <div className="und-column">
                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img1} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">1. Schedule A <a
                                        href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                                        rel="noopener noreferrer"> Free Pre-Consultation
                                    </a></h3>
                                    <p>Learn how we can help achieve your fitness goals.
                                    </p>
                                </div>
                            </div>

                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img2} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">2. Complete <a
                                        href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                                        rel="noopener noreferrer">Lifestyle Assessment Form</a>
                                    </h3>
                                    <p>Fill the Form by sharing your Lifestyle details and medical history.
                                    </p>
                                </div>
                            </div>

                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img3} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">3. Personalized <a
                                        href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                                        rel="noopener noreferrer">One-on-One Consultation </a></h3>
                                    <p>Understand the root causes of your weight gain.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="und-column">

                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img4} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">4. ⁠Receive plan designed for <a
                                        href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                                        rel="noopener noreferrer">your body & lifestyle</a>
                                    </h3>
                                    <p>Receive a plan specifically designed for your lifestyle.
                                    </p>
                                </div>
                            </div>

                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img5} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">5. <a
                                        href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                                        rel="noopener noreferrer">Weekly Tracking </a>& Ongoing Support</h3>
                                    <p>Whatsapp Group is created for regular tracking and guidance from our coaches.
                                    </p>
                                </div>
                            </div>

                            <div className="und-item">
                                <div className="und-icon">
                                    <img src={img6} alt=""/>
                                </div>
                                <div className="und-para">
                                    <h3 className="und-head">6. <a
                                        href="https://calendly.com/vik4fitness/consultation-appointment" target="_blank"
                                        rel="noopener noreferrer">No Rebound </a>
                                    </h3>
                                    <p>Long lasting results with maintenance diet plan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}