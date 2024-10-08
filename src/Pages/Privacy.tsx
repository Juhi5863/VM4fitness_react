import img from '../Assests/banner-Privacy-Policy-1.jpg';
import {Helmet} from "react-helmet";
import React from "react";
import {BsFacebook, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";
import {FaHeart} from "react-icons/fa";
export function Privacy(){
    return (
        <>

            <Helmet>
                <title>Privacy</title>
                <meta name="description"
                      content="At VM4Fitness, we value your privacy. This Privacy Policy explains how we collect, use, and
                            protect your personal information when you visit our website."/>
                <meta name="keywords"
                      content="vm4fitness,fitness,training,nutrition,guidance,wellness-programs,sustainable,fitness,Healthly weight-loss,Diabetes-Reversal,Fatty-Liver Reversal,Gut Health,Cholesterol control,High BP Regulation,PCOD Reversal,Thyroid Reversal,Uric Acid Reversal"/>
            </Helmet>
            <section id="home">
                <div className="privacy-slider">
                    <div className="slides-privacy">
                        <img src={img} className="privacy-slide-image" alt=""/>
                    </div>

                </div>
            </section>

            <div style={{}}>
                <div className="section">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12 col-md-4 col-lg-3 blog-sidebar">
                                <div className="sidebar-module">
                                    <h4>Archives</h4>
                                    <ol className="list-unstyled">
                                        <li><a href="#heading1">Info Gathering</a></li>
                                        <li><a href="#heading2">Usage Policy</a></li>
                                        <li><a href="#heading3">Information Sharing</a></li>
                                        <li><a href="#heading4">Data Security</a></li>
                                        {/*<li><a href="#">November 2013</a></li>*/}
                                        {/*<li><a href="#">October 2013</a></li>*/}
                                        {/*<li><a href="#">September 2013</a></li>*/}
                                        {/*<li><a href="#">August 2013</a></li>*/}
                                        {/*<li><a href="#">July 2013</a></li>*/}
                                        {/*<li><a href="#">June 2013</a></li>*/}
                                        {/*<li><a href="#">May 2013</a></li>*/}
                                        {/*<li><a href="#">April 2013</a></li>*/}
                                    </ol>
                                    <h4>Elsewhere</h4>
                                    <ol className="list-unstyled" style={{display: "inline-flex", gap: 20}}>
                                        <li><a href="https://www.instagram.com/vm4fitness/"
                                               target="_blank"><BsInstagram/></a></li>
                                        {/*<li><a href="#"><BsTwitterX /></a></li>*/}
                                        <li><a href="https://www.facebook.com/vm4fitness/" target="_blank"><BsFacebook/></a>
                                        </li>
                                        <li><a href="https://www.linkedin.com/company/vm4fitness/"
                                               target="_blank"><BsLinkedin/></a></li>
                                        <li><a href="https://www.linkedin.com/company/vm4fitness/"
                                               target="_blank"><BsYoutube/>
                                        </a></li>
                                    </ol>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-8 blog-main">
                                <div className="blog-post">
                                    <h2 className="blog-post-title">Introduction</h2>

                                    <p>
                                        At VM4Fitness, we value your privacy. This Privacy Policy explains how we
                                        collect, use, and protect your personal information when you visit our website
                                        www.vm4fitness.com. Please read this to understand how we handle your data. </p>
                                    <hr/>

                                    <h2 id="heading1">1. Information We Collect

                                    </h2>
                                    <p>
                                        <strong>Personal Information:</strong> This includes your name, email, phone
                                        number, and any
                                        other contact details you provide through forms, subscriptions, or inquiries on
                                        our Site.
                                    </p>
                                    <p>
                                        <strong>Technical Data:</strong> We collect data about your visit, like pages
                                        viewed, time spent, and how you navigate the Site.
                                    </p>
                                    <p>
                                        <strong>Cookies:</strong> We use cookies to track your activity on our Site. You
                                        can manage cookies through your browser settings.
                                    </p>

                                    <h2 id="heading2">2. How We Use Your Information

                                    </h2>
                                    <p>
                                        <strong>Provide Services: </strong> Respond to your inquiries, manage your
                                        account, and communicate with you.
                                    </p>
                                    <p>
                                        <strong>Improve Our Site:</strong> Understand how our Site is used and make it
                                        better.

                                    </p>
                                    <p>
                                        <strong>Send Marketing Information:</strong> Share updates or promotions about
                                        our services. You can opt out at any time.
                                    </p>
                                    <p>
                                        <strong>Meet Legal Obligations:</strong> Comply with legal and regulatory
                                        requirements.

                                    </p>

                                    <h2 id="heading3">3. Sharing Your Information Diet</h2>
                                    <p>
                                        <strong>Service Providers:</strong> Third parties that help us with services
                                        like payment processing, data analysis, or marketing.
                                    </p>
                                    <p>
                                        <strong>Legal Authorities:</strong> If required by law or in response to legal
                                        requests.

                                    </p>
                                    <p>
                                        <strong>Business Transactions:</strong> If our business is sold or merged, your
                                        data may be part of that transaction.
                                    </p>

                                    <h2 id="heading4">4. Security of Your Information


                                    </h2>
                                    <p>
                                        We take steps to protect your personal information, but please note that no online system is completely secure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<section className="information-contain">*/}
            {/*    <div className="container-privacy">*/}
            {/*        <div className="content-privacy">*/}
            {/*            <h2 className="heading-privacy">Introduction</h2>*/}
            {/*            <p className="para-privacy">*/}
            {/*                At VM4Fitness, we value your privacy. This Privacy Policy explains how we collect, use, and*/}
            {/*                protect your personal information when you visit our website.*/}
            {/*                <a href="/" target="_blank" rel="noopener noreferrer">www.vm4fitness.com</a>.*/}
            {/*                Please read this to understand how we handle your data.*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*        <div className="content-privacy">*/}
            {/*            <h3 className="heading-privacy">1. Information We Collect</h3>*/}
            {/*            <ul className="privacy-list">*/}
            {/*                <li><strong>Personal Information:</strong> This includes your name, email, phone number, and*/}
            {/*                    any other contact details you provide through forms, subscriptions, or inquiries on our*/}
            {/*                    Site.*/}
            {/*                </li>*/}
            {/*                <li><strong>Technical Data:</strong> We collect data about your visit, like pages viewed,*/}
            {/*                    time spent, and how you navigate the Site.*/}
            {/*                </li>*/}
            {/*                <li><strong>Cookies:</strong> We use cookies to track your activity on our Site. You can*/}
            {/*                    manage cookies through your browser settings.*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}

            {/*        <div className="content-privacy">*/}
            {/*            <h3 className="heading-privacy">2. How We Use Your Information</h3>*/}
            {/*            <ul className="privacy-list">*/}
            {/*                <li><strong>Provide Services:</strong> Respond to your inquiries, manage your account, and*/}
            {/*                    communicate with you.*/}
            {/*                </li>*/}
            {/*                <li><strong>Improve Our Site:</strong> Understand how our Site is used and make it better.*/}
            {/*                </li>*/}
            {/*                <li><strong>Send Marketing Information:</strong> Share updates or promotions about our*/}
            {/*                    services. You can opt out at any time.*/}
            {/*                </li>*/}
            {/*                <li><strong>Meet Legal Obligations:</strong> Comply with legal and regulatory requirements.*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}

            {/*        <div className="content-privacy">*/}
            {/*            <h3 className="heading-privacy">3. Sharing Your Information</h3>*/}
            {/*            <ul className="privacy-list">*/}
            {/*                <li><strong>Service Providers:</strong> Third parties that help us with services like*/}
            {/*                    payment processing, data analysis, or marketing.*/}
            {/*                </li>*/}
            {/*                <li><strong>Legal Authorities:</strong> If required by law or in response to legal requests.*/}
            {/*                </li>*/}
            {/*                <li><strong>Business Transactions:</strong> If our business is sold or merged, your data may*/}
            {/*                    be part of that transaction.*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}

            {/*        <div className="content-privacy">*/}
            {/*            <h3 className="heading-privacy">4. Security of Your Information</h3>*/}
            {/*            <p className="para-privacy">*/}
            {/*                We take steps to protect your personal information, but please note that no online system is*/}
            {/*                completely secure.*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</section>*/}

        </>
    )
}