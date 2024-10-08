import React, {useState} from "react";
import {MultiSelect} from "primereact/multiselect";
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import {isMobile} from "../Utility";
import  facebook from "../Assests/facebook.webp"
import  linkdin from "../Assests/linkdin.webp"
import  twitter from "../Assests/twitter.webp"
import  instagram from "../Assests/insta.svg"
    import img1 from '../Assests/2.1.webp'
    import img2 from '../Assests/2.2.webp'
    import img3 from '../Assests/2.3.webp'
    import img4 from '../Assests/2.4.webp'
    import img5 from '../Assests/2.5.webp'
    import img6 from '../Assests/2.6.webp'
    import img7 from '../Assests/2.7.webp'
    import img8 from '../Assests/2.8.webp'
    import img9 from '../Assests/2.9.webp'
import {Carousel} from "react-responsive-carousel";
import slide1 from "../Assests/slide1.webp";
import slide2 from "../Assests/slide2.webp";
import slide3 from "../Assests/slide3.webp";
import {BsFacebook, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import {MenuItem, TextField} from "@mui/material";


export function Testimonial (){
    const [options, setOptions] = useState([{name: 'Other'},{name: 'Diabetes', id: 1},{name: 'Digestion Issues', id: 2},{name: 'Digestion Issues', id: 3},{name: 'Fatty Liver', id: 4},{name: 'Gall Bladder Issues', id: 5},{name: 'High BP', id: 6},{name: 'Kidney Stones', id: 7},{name: 'Low BP', id: 8},{name: 'PCOD', id: 9},{name: 'Uric Acid', id: 10},{name: 'Thyroid Issues', id: 11}]);
    const [selectedValue, setSelectedValues] = useState([]);

    const [formFields, setFormFields] = useState({
        name : "",
        whatsapp : "",
        height : "",
        weight : "",
        category : "",
        issues : [],
        concerns : ""
    })
    function onSubmi(e : any){
        console.log(formFields)
        e.preventDefault();
        const urlencoded = new URLSearchParams();
        urlencoded.append("name", formFields.name);
        urlencoded.append("whatsapp", formFields.whatsapp);
        urlencoded.append("weight", formFields.weight);
        urlencoded.append("height", formFields.height);
        urlencoded.append("category", formFields.category);

        formFields.issues.forEach((data:any) => {
            urlencoded.append("issues[]", data.name);
        })
        urlencoded.append("concerns", formFields.concerns);

        const requestOptions:any = {
            method: "POST",
            body: urlencoded,
            redirect: "follow"
        };
        fetch("https://vm4fitness.com/send_mail.php", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }
    function isNumeric(value: string) {
        if (value == "") return true
        return /^-?\d+$/.test(value);
    }
    return (
        <>
        <section className="section3">
            {/* eslint-disable-next-line react/jsx-no-undef */}

                {/*<TextField id="standard-basic" label="Standard" variant="standard" />*/}


            <div className="contact-testimonial-section">
                <div className="schedule-appointment-container">
                    <div className="schedule-appointment">
                        <div className="schedule-header">
                            <h2 className="appointment">Schedule An Appointment</h2>
                        </div>

                        <p className="contact-info11" >
                            We'd love to hear from you! Fill out the form below, and one of our fitness experts will
                            reach
                            out to you within 24 hrs.
                        </p>
                    </div>
                    {
                        isMobile() ?

                            <div className="appointment-form">
                                <div className="row">
                                    <div className="form-col-3 input-effect">
                                        <input onChange={(e) => setFormFields({
                                            ...formFields,
                                            name:e.target.value
                                        })} value={formFields.name} className="effect-16" type="text" placeholder="" required/>
                                        {
                                            formFields.name == "" ? <label>Name</label> : <></>
                                        }

                                        <span className="focus-border"></span>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="form-col-3 input-effect">
                                        <input onChange={(e) => setFormFields({
                                            ...formFields,
                                            whatsapp:e.target.value
                                        })} value={formFields.whatsapp} className="effect-16" type="text" placeholder="" required/>
                                        {
                                            formFields.whatsapp == "" ? <label>Whatsapp Number</label> : <></>
                                        }
                                        <span className="focus-border"></span>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-col-3 input-effect">
                                        <input onChange={(e) => setFormFields({
                                            ...formFields,
                                            weight:e.target.value
                                        })} value={formFields.weight} className="effect-16" type="text" placeholder="" required/>
                                        {
                                            formFields.weight == "" ? <label>Weight (kg)</label> : <></>
                                        }
                                        <span className="focus-border"></span>
                                    </div>
                                </div>
                                <div className="row">

                                <div className="form-col-3 input-effect">
                                        <input onChange={(e) => setFormFields({
                                            ...formFields,
                                            height:e.target.value
                                        })} value={formFields.height} className="effect-16" type="text" placeholder="" required/>
                                        {
                                            formFields.height == "" ? <label>Height (cm)</label> : <></>
                                        }
                                        <span className="focus-border"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-col-3 input-effect">
                                        <select onChange={(e) => setFormFields({
                                            ...formFields,
                                            category:e.target.value
                                        })} value={formFields.category} className="select-effect-16" required>
                                            <option value="" disabled selected>Select Gender</option>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                        </select>
                                        <span className="focus-border"></span>
                                    </div>
                                </div>
                                <div className="row">

                                <div className="form-col-3 input-effect">
                                        <MultiSelect onChange={(e) => setFormFields({
                                            ...formFields,
                                            issues:e.value
                                        })} value={formFields.issues} options={options} optionLabel="name"
                                                     placeholder="Select issues you face?" maxSelectedLabels={3} className="w-full md:w-20rem multi-select-react"/>
                                        <span className="focus-border"></span>

                                    </div>

                                    <div className="form-col-1 input-effect">
                                <textarea className="textarea-effect-16" onChange={(e) => setFormFields({
                                    ...formFields,
                                    concerns:e.target.value
                                })} value={formFields.concerns} name="concerns" id="" placeholder="Your Health Goals & Concerns*"
                                ></textarea>
                                        <span className="focus-border"></span>
                                    </div>

                                </div>
                                <div className="contact-footer">
                                    <button onClick={(e) => onSubmi(e)} type="submit" className="submit-button">Submit</button>
                                    <div className="col-md-51">
                                        <ul className="social-media-list">
                                            <li><a href="https://www.instagram.com/vm4fitness/"
                                                   target="_blank"><BsInstagram/></a></li>
                                            {/*<li><a href="#"><BsTwitterX /></a></li>*/}
                                            <li><a href="https://www.facebook.com/vm4fitness/" target="_blank"><BsFacebook/></a>
                                            </li>
                                            <li><a href="https://www.linkedin.com/company/vm4fitness/"
                                                   target="_blank"><BsLinkedin/></a></li>
                                            <li><a href="https://www.linkedin.com/company/vm4fitness/"
                                                   target="_blank"><BsYoutube/></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            :

                            <div className="appointment-form">
                                <div className="row">
                                    <div className="form-col-3 input-effect">
                                        <input onChange={(e) => setFormFields({
                                            ...formFields,
                                            name:e.target.value
                                        })} value={formFields.name} className="effect-16" type="text" placeholder="" required/>
                                        {
                                            formFields.name == "" ? <label>Name*</label> : <></>
                                        }

                                        <span className="focus-border"></span>
                                    </div>
                                    <div className="form-col-3 input-effect">

                                        <input onChange={(e) => {
                                            if (isNumeric(e.target.value)) {
                                                setFormFields({
                                                    ...formFields,
                                                    whatsapp: e.target.value
                                                })
                                            }
                                        }} value={formFields.whatsapp} className="effect-16" type="text" placeholder="" required/>
                                        {
                                            formFields.whatsapp == "" ? <label>Whatsapp Number*</label> : <></>
                                        }
                                        <span className="focus-border"></span>



                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-col-3 input-effect">
                                        <input onChange={(e) => {
                                            if (isNumeric(e.target.value)) {
                                                setFormFields({
                                                    ...formFields,
                                                    weight: e.target.value
                                                })
                                            }
                                        }} value={formFields.weight} className="effect-16" type="text" placeholder="" required/>
                                        {
                                            formFields.weight == "" ? <label>Weight (kg)*</label> : <></>
                                        }
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className="form-col-3 input-effect">
                                        <input onChange={(e) => {
                                            if (isNumeric(e.target.value)) {
                                                setFormFields({
                                                    ...formFields,
                                                    height: e.target.value
                                                })
                                            }
                                        }} value={formFields.height} className="effect-16" type="text" placeholder="" required/>
                                        {
                                            formFields.height == "" ? <label>Height (cm)*</label> : <></>
                                        }
                                        <span className="focus-border"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-col-3 input-effect">
                                        <select onChange={(e) => setFormFields({
                                            ...formFields,
                                            category:e.target.value
                                        })} value={formFields.category} className="select-effect-16" required>
                                            <option value="" disabled selected>Select Gender</option>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                        </select>
                                        <span className="focus-border"></span>
                                    </div>
                                    <div className="form-col-3 input-effect">
                                        <MultiSelect onChange={(e) => setFormFields({
                                            ...formFields,
                                            issues:e.value
                                        })} value={formFields.issues} options={options} optionLabel="name"
                                                     placeholder="Select issues you face?" maxSelectedLabels={3} className="w-full md:w-20rem multi-select-react"/>
                                        <span className="focus-border"></span>

                                    </div>

                                    <div className="form-col-1 input-effect">
                                <textarea className="textarea-effect-16" style={{width: "92%"}} onChange={(e) => setFormFields({
                                    ...formFields,
                                    concerns:e.target.value
                                })} value={formFields.concerns} name="concerns" id="" placeholder="Your Health Goals & Concerns*"
                                ></textarea>
                                        <span className="focus-border"></span>
                                    </div>

                                </div>
                                <div className="contact-footer">
                                    <button onClick={(e) => onSubmi(e)} type="submit" className="submit-button">Submit</button>
                                    <div className="col-md-51">
                                        <ul className="social-media-list">
                                            <li><a href="https://www.instagram.com/vm4fitness/"
                                                   target="_blank"><BsInstagram/></a></li>
                                            {/*<li><a href="#"><BsTwitterX /></a></li>*/}
                                            <li><a href="https://www.facebook.com/vm4fitness/" target="_blank"><BsFacebook/></a>
                                            </li>
                                            <li><a href="https://www.linkedin.com/company/vm4fitness/"
                                                   target="_blank"><BsLinkedin/></a></li>
                                            <li><a href="https://www.linkedin.com/company/vm4fitness/"
                                                   target="_blank"><BsYoutube/></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                    }
                </div>
                {
                    isMobile() ? <></> :
                        <div id="testimonial">
                            <div className="testimonial-slider">
                                <h2 className="testi">What our clients say</h2>
                                <Carousel showThumbs={false} useKeyboardArrows={true} autoPlay={true}
                                          infiniteLoop={true}
                                          interval={3000} showStatus={false} stopOnHover={false}>
                                   <div className="slide2">
                                       <img src={img1} alt="Client 1"/>
                                       <p className="paragraph">Great service, highly recommend!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img2} alt="Client 2"/>
                                       <p className="paragraph">Fantastic experience, will come back again!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img3} alt="Client 4"/>
                                       <p className="paragraph">Excellent service and support!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img4} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img5} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img6} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img7} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img8} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                                   <div className="slide2">
                                       <img src={img9} alt="Client 5"/>
                                       <p className="paragraph">Highly professional and reliable!</p>
                                   </div>
                               </Carousel>

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
                            <Carousel showThumbs={false} useKeyboardArrows={true} autoPlay={true} infiniteLoop={true}
                                      interval={3000} showStatus={false} stopOnHover={false}>
                                <div className="slide2">
                                    <img src={img1} alt="Client 1"/>
                                    <p className="paragraph">Great service, highly recommend!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img2} alt="Client 2"/>
                                    <p className="paragraph">Fantastic experience, will come back again!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img3} alt="Client 4"/>
                                    <p className="paragraph">Excellent service and support!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img4} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img5} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img6} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img7} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img8} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                                <div className="slide2">
                                    <img src={img9} alt="Client 5"/>
                                    <p className="paragraph">Highly professional and reliable!</p>
                                </div>
                            </Carousel>
                        </div>
                    </div> : <></>

            }

        </>
    );
}