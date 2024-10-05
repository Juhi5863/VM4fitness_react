import {useState} from "react";
import {MultiSelect} from "primereact/multiselect";
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import {isMobile} from "../Utility";

export function Testimonial (){
    const [options, setOptions] = useState([{name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}]);
    const [selectedValue, setSelectedValues] = useState([]);

    function onSelect() {

    }
    function onRemove() {

    }

    return (
        <>
        <section className="section3">
            <div className="contact-testimonial-section">
                <div className="schedule-appointment-container">
                    <div className="schedule-appointment">
                        <div className="schedule-header">
                            <h2 className="appointment">Schedule An Appointment</h2>
                        </div>

                        <p className="contact-info1">
                            We'd love to hear from you! Fill out the form below, and one of our fitness experts will
                            reach
                            out to you within 24 hrs.
                        </p>
                    </div>

                    <form className="appointment-form" method="post" action="send_mail.php">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name *" required/>
                            <input type="tel" name="whatsapp" placeholder="WhatsApp Number *" required/>
                            <input type="number" name="weight" placeholder="Enter Weight (kg) *" required/>
                            <input type="number" name="height" placeholder="Enter Height (cm) *" required/>
                        </div>

                        <div className="form-group">
                            <select name="category" id="">
                                <option value="" disabled selected>Select Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>


                            {/*<div className="multi-container">*/}
                            {/*    <div className="select-btn">*/}
                            {/*        <span className="btn-text">Any of the below issues you face?</span>*/}
                            {/*        <span className="arrow-down">*/}
                            {/*                <i className="fa-solid fa-chevron-down"></i>*/}
                            {/*            </span>*/}
                            {/*    </div>*/}

                            {/*    <ul className="list-items">*/}
                            {/*        <li className="item-list">*/}
                            {/*            <label className="checkbox-container">*/}
                            {/*                /!*<input type="checkbox" name="issues[]" value="Diabetes" onChange={selectIssue("Dibates")}/>*!/*/}
                            {/*                <span className="checkbox"></span>*/}
                            {/*                <span className="item-text">Diabetes</span>*/}
                            {/*            </label>*/}
                            {/*        </li>*/}
                            {/*        <li className="item-list">*/}
                            {/*            <label className="checkbox-container">*/}
                            {/*                <input type="checkbox" name="issues[]" value="Digestion Issues"/>*/}
                            {/*                <span className="checkbox"></span>*/}
                            {/*                <span className="item-text">Digestion Issues</span>*/}
                            {/*            </label>*/}
                            {/*        </li>*/}
                            {/*        <li className="item-list">*/}
                            {/*            <label className="checkbox-container">*/}
                            {/*                <input type="checkbox" name="issues[]" value="Fatty Liver"/>*/}
                            {/*                <span className="checkbox"></span>*/}
                            {/*                <span className="item-text">Fatty Liver</span>*/}
                            {/*            </label>*/}
                            {/*        </li>*/}
                            {/*        <li className="item-list">*/}
                            {/*            <label className="checkbox-container">*/}
                            {/*                <input type="checkbox" name="issues[]" value="Gall Bladder Issues"/>*/}
                            {/*                <span className="checkbox"></span>*/}
                            {/*                <span className="item-text">Gall Bladder Issues</span>*/}
                            {/*            </label>*/}
                            {/*        </li>*/}
                            {/*        <li className="item-list">*/}
                            {/*            <label className="checkbox-container">*/}
                            {/*                <input type="checkbox" name="issues[]" value="High BP"/>*/}
                            {/*                <span className="checkbox"></span>*/}
                            {/*                <span className="item-text">High BP</span>*/}
                            {/*            </label>*/}
                            {/*        </li>*/}
                            {/*        <li className="item-list">*/}
                            {/*            <label className="checkbox-container">*/}
                            {/*                <input type="checkbox" name="issues[]" value="Kidney Stones"/>*/}
                            {/*                <span className="checkbox"></span>*/}
                            {/*                <span className="item-text">Kidney Stones</span>*/}
                            {/*            </label>*/}
                            {/*        </li>*/}
                            {/*        <li className="item-list">*/}
                            {/*            <label className="checkbox-container">*/}
                            {/*                <input type="checkbox" name="issues[]" value="Low BP"/>*/}
                            {/*                <span className="checkbox"></span>*/}
                            {/*                <span className="item-text">Low BP</span>*/}
                            {/*            </label>*/}
                            {/*        </li>*/}
                            {/*        <li className="item-list">*/}
                            {/*            <label className="checkbox-container">*/}
                            {/*                <input type="checkbox" name="issues[]" value="PCOD"/>*/}
                            {/*                <span className="checkbox"></span>*/}
                            {/*                <span className="item-text">PCOD</span>*/}
                            {/*            </label>*/}
                            {/*        </li>*/}
                            {/*        <li className="item-list">*/}
                            {/*            <label className="checkbox-container">*/}
                            {/*                <input type="checkbox" name="issues[]" value="Uric Acid"/>*/}
                            {/*                <span className="checkbox"></span>*/}
                            {/*                <span className="item-text">Uric Acid</span>*/}
                            {/*            </label>*/}
                            {/*        </li>*/}
                            {/*        <li className="item-list">*/}
                            {/*            <label className="checkbox-container">*/}
                            {/*                <input type="checkbox" name="issues[]" value="Thyroid Issues"/>*/}
                            {/*                <span className="checkbox"></span>*/}
                            {/*                <span className="item-text">Thyroid Issues</span>*/}
                            {/*            </label>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                            <MultiSelect value={selectedValue} onChange={(e) => setSelectedValues(e.value)} options={options} optionLabel="name"
                                         placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem"
                            style={{width: "46%", backgroundColor: "rgba(255, 255, 255, 0.1)", height: "38px",
                                lineHeight: "13px",border: "none"}}/>

                        </div>

                        <div className="form-group">
                            <textarea name="concerns" id="" placeholder="Your Health Goals & Concerns*"
                                      required></textarea>
                        </div>

                        <div className="contact-footer">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                    <div className="col-md-51">
                        <ul className="social-media-list">
                            <li>
                                <a href="https://www.facebook.com/vm4fitness/" target="_blank"
                                   rel="noopener noreferrer">
                                    <img src="images/facebook.webp" alt="facebook"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/vm4fitness/" target="_blank"
                                   rel="noopener noreferrer">
                                    <img src="images/insta.svg" alt="insta"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/vm4fitness/" target="_blank"
                                   rel="noopener noreferrer">
                                    <img src="images/linkdin.webp" alt="linkedin"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/vm4fitness" target="_blank" rel="noopener noreferrer">
                                    <img src="images/twitter.webp" alt="twitter"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                {
                   isMobile() ? <></> :
                       <div id="testimonial">
                           <div className="testimonial-slider">
                               <h2 className="testi">What our clients say</h2>
                               <div className="slider2">
                                   <div className="slides2">
                                       <div className="slide2">
                                           <img src="images/2.1.webp" alt="Client 1"/>
                                           <p className="paragraph">Great service, highly recommend!</p>
                                       </div>
                                       <div className="slide2">
                                           <img src="images/2.2.webp" alt="Client 2"/>
                                           <p className="paragraph">Fantastic experience, will come back again!</p>
                                       </div>
                                       <div className="slide2">
                                           <img src="images/2.3.webp" alt="Client 4"/>
                                           <p className="paragraph">Excellent service and support!</p>
                                       </div>
                                       <div className="slide2">
                                           <img src="images/2.4.webp" alt="Client 5"/>
                                           <p className="paragraph">Highly professional and reliable!</p>
                                       </div>
                                       <div className="slide2">
                                           <img src="images/2.5.webp" alt="Client 5"/>
                                           <p className="paragraph">Highly professional and reliable!</p>
                                       </div>
                                       <div className="slide2">
                                           <img src="images/2.6.webp" alt="Client 5"/>
                                           <p className="paragraph">Highly professional and reliable!</p>
                                       </div>
                                       <div className="slide2">
                                           <img src="images/2.7.webp" alt="Client 5"/>
                                           <p className="paragraph">Highly professional and reliable!</p>
                                       </div>
                                       <div className="slide2">
                                           <img src="images/2.8.webp" alt="Client 5"/>
                                           <p className="paragraph">Highly professional and reliable!</p>
                                       </div>
                                       <div className="slide2">
                                           <img src="images/2.9.webp" alt="Client 5"/>
                                           <p className="paragraph">Highly professional and reliable!</p>
                                       </div>

                                   </div>
                                   <button className="prev-button2"><i className="fa-solid fa-chevron-left"></i></button>
                                   <button className="next-button2"><i className="fa-solid fa-chevron-right"></i></button>
                               </div>
                           </div>
                       </div>

                }
            </div>
        </section>
            {
                isMobile() ?
                    <div id="">
                        <div className="testimonial-slider">
                            <h2 className="testi">What our clients say</h2>
                            <div className="slider2">
                                <div className="slides2">
                                    <div className="slide2">
                                        <img src="images/2.1.webp" alt="Client 1"/>
                                        <p className="paragraph">Great service, highly recommend!</p>
                                    </div>
                                    <div className="slide2">
                                        <img src="images/2.2.webp" alt="Client 2"/>
                                        <p className="paragraph">Fantastic experience, will come back again!</p>
                                    </div>
                                    <div className="slide2">
                                        <img src="images/2.3.webp" alt="Client 4"/>
                                        <p className="paragraph">Excellent service and support!</p>
                                    </div>
                                    <div className="slide2">
                                        <img src="images/2.4.webp" alt="Client 5"/>
                                        <p className="paragraph">Highly professional and reliable!</p>
                                    </div>
                                    <div className="slide2">
                                        <img src="images/2.5.webp" alt="Client 5"/>
                                        <p className="paragraph">Highly professional and reliable!</p>
                                    </div>
                                    <div className="slide2">
                                        <img src="images/2.6.webp" alt="Client 5"/>
                                        <p className="paragraph">Highly professional and reliable!</p>
                                    </div>
                                    <div className="slide2">
                                        <img src="images/2.7.webp" alt="Client 5"/>
                                        <p className="paragraph">Highly professional and reliable!</p>
                                    </div>
                                    <div className="slide2">
                                        <img src="images/2.8.webp" alt="Client 5"/>
                                        <p className="paragraph">Highly professional and reliable!</p>
                                    </div>
                                    <div className="slide2">
                                        <img src="images/2.9.webp" alt="Client 5"/>
                                        <p className="paragraph">Highly professional and reliable!</p>
                                    </div>

                                </div>
                                <button className="prev-button2"><i className="fa-solid fa-chevron-left"></i></button>
                                <button className="next-button2"><i className="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div> : <></>

            }

        </>
    );
}