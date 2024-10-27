import React, {useState} from "react";
import {MultiSelect} from "primereact/multiselect";
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import {isMobile} from "../Utility";
import img1 from '../Assests/3.1.png'
import img2 from '../Assests/3.2.png'
import img3 from '../Assests/3.3.png'
import img4 from '../Assests/3.4.png'
import img5 from '../Assests/3.5.png'
import img6 from '../Assests/3.6.png'
import img7 from '../Assests/3.8.png'
import img8 from '../Assests/3.9.png'
import img9 from '../Assests/3.10.png'
import img10 from '../Assests/3.10.png'
import img11 from '../Assests/3.11.png'
import img12 from '../Assests/3.12.png'
import img from '../Assests/img.png'
import {Carousel} from "react-responsive-carousel";

import {BsFacebook, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import {MenuItem, TextField} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { motion } from "framer-motion";

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
    } as any)
    function onSubmi(e : any){
        console.log(formFields)

        e.preventDefault();
        for (let i = 0; i < Object.keys(formFields).length; i++) {
            let data = Object.keys(formFields)[i]
            if (formFields[data] == "") {
                toast.error(data + " can't be empty", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return false;
            }

        }

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
            .then((result) => {
                toast.success('😉Thank you for reaching out! We\'ll get back to you shortly.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",

                });
            })
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
                    <motion.div className="schedule-appointment-container card"
                                initial={!isMobile() ? {
                                    opacity: 0,
                                    // if odd index card,slide from right instead of left
                                    x: -100
                                }:{}}
                                whileInView={{
                                    opacity: 1,
                                    x: 0, // Slide in to its original position
                                    transition: {
                                        duration: 1 // Animation duration
                                    }
                                }}
                                viewport={{ once: false }}
                    >
                        <div className="schedule-appointment" >
                            <img width="60%" src={img}/>

                            <p className="contact-info11 green">
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
                                                name: e.target.value
                                            })} value={formFields.name} className="effect-16" type="text" placeholder=""
                                                   required/>
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
                                                whatsapp: e.target.value
                                            })} value={formFields.whatsapp} className="effect-16" type="text"
                                                   placeholder="" required/>
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
                                                weight: e.target.value
                                            })} value={formFields.weight} className="effect-16" type="text"
                                                   placeholder="" required/>
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
                                                height: e.target.value
                                            })} value={formFields.height} className="effect-16" type="text"
                                                   placeholder="" required/>
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
                                                category: e.target.value
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
                                                issues: e.value
                                            })} value={formFields.issues} options={options} optionLabel="name"
                                                         placeholder="Select issues you face?" maxSelectedLabels={3}
                                                         className="w-full md:w-20rem multi-select-react"/>
                                            <span className="focus-border"></span>

                                        </div>

                                        <div className="form-col-1 input-effect">
                                <textarea className="textarea-effect-16" onChange={(e) => setFormFields({
                                    ...formFields,
                                    concerns: e.target.value
                                })} value={formFields.concerns} name="concerns" id=""
                                          placeholder="Your Health Goals & Concerns*"
                                ></textarea>
                                            <span className="focus-border"></span>
                                        </div>

                                    </div>
                                    <div className="contact-footer ">
                                        <button onClick={(e) => onSubmi(e)} type="submit"
                                                className="submit-button green-bg">Submit
                                        </button>
                                        <div className="col-md-51">
                                            <ul className="social-media-list">
                                                <li><a href="https://www.instagram.com/vm4fitness/"
                                                       target="_blank"><BsInstagram/></a></li>
                                                {/*<li><a href="#"><BsTwitterX /></a></li>*/}
                                                <li><a href="https://www.facebook.com/vm4fitness/"
                                                       target="_blank"><BsFacebook/></a>
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
                                                name: e.target.value
                                            })} value={formFields.name} className="effect-16" type="text" placeholder=""
                                                   required/>
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
                                            }} value={formFields.whatsapp} className="effect-16" type="text"
                                                   placeholder="" required/>
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
                                            }} value={formFields.weight} className="effect-16" type="text"
                                                   placeholder="" required/>
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
                                            }} value={formFields.height} className="effect-16" type="text"
                                                   placeholder="" required/>
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
                                                category: e.target.value
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
                                                issues: e.value
                                            })} value={formFields.issues} options={options} optionLabel="name"
                                                         placeholder="Select issues you face?" maxSelectedLabels={3}
                                                         className="w-full md:w-20rem multi-select-react"/>
                                            <span className="focus-border"></span>

                                        </div>

                                        <div className="form-col-1 input-effect">
                                <textarea className="textarea-effect-16" style={{width: "92%"}}
                                          onChange={(e) => setFormFields({
                                              ...formFields,
                                              concerns: e.target.value
                                          })} value={formFields.concerns} name="concerns" id=""
                                          placeholder="Your Health Goals & Concerns*"
                                ></textarea>
                                            <span className="focus-border"></span>
                                        </div>

                                    </div>
                                    <div className="contact-footer">
                                        <button onClick={(e) => onSubmi(e)} type="submit"
                                                className="submit-button green-bg">Submit
                                        </button>
                                        <div className="col-md-51 green">
                                            <ul className="social-media-list green">
                                                <li><a href="https://www.instagram.com/vm4fitness/"
                                                       target="_blank"><BsInstagram className="green"/></a></li>
                                                {/*<li><a href="#"><BsTwitterX /></a></li>*/}
                                                <li><a href="https://www.facebook.com/vm4fitness/"
                                                       target="_blank"><BsFacebook className="green"/></a>
                                                </li>
                                                <li><a href="https://www.linkedin.com/company/vm4fitness/"
                                                       target="_blank"><BsLinkedin className="green"/></a></li>
                                                <li><a href="https://www.linkedin.com/company/vm4fitness/"
                                                       target="_blank"><BsYoutube className="green"/></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                        }
                    </motion.div>
                    {
                        isMobile() ? <></> :
                            <motion.div id="testimonial" className="testimonial_seecccc"
                                        initial={!isMobile() ? {
                                            opacity: 0,
                                            // if odd index card,slide from right instead of left
                                            x: 100
                                        }:{}}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0, // Slide in to its original position
                                            transition: {
                                                duration: 1 // Animation duration
                                            }
                                        }}
                                        viewport={{ once: false }}
                            >
                                <div className="testimonial-slider">
                                    <h2 className="testi">What our clients say</h2>
                                    <Carousel showThumbs={false} useKeyboardArrows={true} autoPlay={true}
                                              infiniteLoop={true}
                                              interval={5000} showStatus={false} stopOnHover={false}>
                                        <div className="slide2">
                                            <img src={img1} alt="Client 1" style={{height: 357}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img2} alt="Client 2" style={{height: 369}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img3} alt="Client 3" style={{height: 369}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img4} alt="Client 4" style={{height: 369}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img5} alt="Client 5" style={{height: 369}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img6} alt="Client 6" style={{height: 369}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img7} alt="Client 7" style={{height: 369}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img8} alt="Client 8" style={{height: 369}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img9} alt="Client 9" style={{height: 369}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img10} alt="Client 10" style={{height: 369}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img11} alt="Client 11" style={{height: 369}}/>
                                        </div>
                                        <div className="slide2">
                                            <img src={img12} alt="Client 12" style={{height: 369}}/>
                                        </div>
                                    </Carousel>

                                </div>
                            </motion.div>

                    }
                </div>
            </section>
            {
                isMobile() ?
                    <div id="testimonial">
                        <div className="testimonial-slider">
                            <h2 className="testi">What our clients say</h2>
                            <Carousel showThumbs={false} useKeyboardArrows={true} autoPlay={true} infiniteLoop={true}
                                      interval={5000} showStatus={false} stopOnHover={false}>
                                <div className="slide2">
                                    <img src={img1} className="slide-height" alt="Client 1"/>
                                </div>
                                <div className="slide2">
                                    <img src={img2}  className="slide-height" alt="Client 2"/>
                                </div>
                                <div className="slide2">
                                    <img src={img4}  className="slide-height" alt="Client 5"/>
                                </div>
                                <div className="slide2">
                                    <img src={img5}  className="slide-height" alt="Client 5"/>
                                </div>
                                <div className="slide2">
                                    <img src={img6}  className="slide-height" alt="Client 5"/>
                                </div>
                                <div className="slide2">
                                    <img src={img7}  className="slide-height" alt="Client 5"/>
                                </div>
                                <div className="slide2">
                                    <img src={img8}  className="slide-height" alt="Client 5"/>
                                </div>
                                <div className="slide2">
                                    <img src={img9}  className="slide-height" alt="Client 5"/>
                                </div>
                                <div className="slide2">
                                    <img src={img10}  className="slide-height" alt="Client 5"/>
                                </div>
                                <div className="slide2">
                                    <img src={img11}  className="slide-height" alt="Client 5"/>
                                </div>
                                <div className="slide2">
                                    <img src={img12}  className="slide-height" alt="Client 5"/>
                                </div>

                            </Carousel>
                        </div>
                    </div> : <></>

            }

        </>
    );
}
