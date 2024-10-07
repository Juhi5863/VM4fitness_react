import img from '../Assests/banner-Privacy-Policy-1.jpg';
import {Helmet} from "react-helmet";
import React from "react";
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
                        <img src={img}  className="privacy-slide-image" alt=""/>
                    </div>

                </div>
            </section>


            <section className="information-contain" >
                <div className="container-privacy">
                    <div className="content-privacy">
                        <h2 className="heading-privacy">Introduction</h2>
                        <p className="para-privacy">
                            At VM4Fitness, we value your privacy. This Privacy Policy explains how we collect, use, and
                            protect your personal information when you visit our website.
                            <a href="/" target="_blank" rel="noopener noreferrer">www.vm4fitness.com</a>.
                            Please read this to understand how we handle your data.
                        </p>
                    </div>

                    <div className="content-privacy">
                        <h3 className="heading-privacy">1. Information We Collect</h3>
                        <ul className="privacy-list">
                            <li><strong>Personal Information:</strong> This includes your name, email, phone number, and
                                any other contact details you provide through forms, subscriptions, or inquiries on our
                                Site.
                            </li>
                            <li><strong>Technical Data:</strong> We collect data about your visit, like pages viewed,
                                time spent, and how you navigate the Site.
                            </li>
                            <li><strong>Cookies:</strong> We use cookies to track your activity on our Site. You can
                                manage cookies through your browser settings.
                            </li>
                        </ul>
                    </div>

                    <div className="content-privacy">
                        <h3 className="heading-privacy">2. How We Use Your Information</h3>
                        <ul className="privacy-list">
                            <li><strong>Provide Services:</strong> Respond to your inquiries, manage your account, and
                                communicate with you.
                            </li>
                            <li><strong>Improve Our Site:</strong> Understand how our Site is used and make it better.
                            </li>
                            <li><strong>Send Marketing Information:</strong> Share updates or promotions about our
                                services. You can opt out at any time.
                            </li>
                            <li><strong>Meet Legal Obligations:</strong> Comply with legal and regulatory requirements.
                            </li>
                        </ul>
                    </div>

                    <div className="content-privacy">
                        <h3 className="heading-privacy">3. Sharing Your Information</h3>
                        <ul className="privacy-list">
                            <li><strong>Service Providers:</strong> Third parties that help us with services like
                                payment processing, data analysis, or marketing.
                            </li>
                            <li><strong>Legal Authorities:</strong> If required by law or in response to legal requests.
                            </li>
                            <li><strong>Business Transactions:</strong> If our business is sold or merged, your data may
                                be part of that transaction.
                            </li>
                        </ul>
                    </div>

                    <div className="content-privacy">
                        <h3 className="heading-privacy">4. Security of Your Information</h3>
                        <p className="para-privacy">
                            We take steps to protect your personal information, but please note that no online system is
                            completely secure.
                        </p>
                    </div>

                </div>
            </section>

        </>
    )
}