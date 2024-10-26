import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  slide1 from '../Assests/Slidee1.png'
import  slide2 from '../Assests/Slidee2.webp'
import  slide3 from '../Assests/slide3.webp'

import {Testimonial} from "../Components/Testimonial";
import Profile from "../Components/Profile";
import {Understand} from "../Components/Understand";
import {Service} from "../Components/Service";
import { Blog } from "../Components/Blog";
import {Achievment} from "../Components/Achievment";
import {Youtube} from "../Components/Youtube";
import {Contact} from "../Components/Contact";
import {Frequent} from "../Components/Frequent";
import {FooterOne} from "../Components/FooterOne";
import {TestimonialSec} from "../Components/TestimonialSec";
import {Helmet} from "react-helmet";
import React from "react";
import { motion } from "framer-motion";
import {isMobile} from "../Utility";



function  Home(){
    return <div style={{marginTop: 100}}>
        <Helmet>
            <title>VM4fitness</title>
            <meta name="description"
                  content="VM4fitness offers personalized fitness training, nutrition guidance, and wellness programs to help you achieve your health goals, With expert trainers, tailored workout plans, and a supportive community, VM4fitness is your go-to destination for sustainable fitness and well-being."/>
            <meta name="keywords"
                  content="vm4fitness,fitness,training,nutrition,guidance,wellness-programs,sustainable,fitness,Healthly weight-loss,Diabetes-Reversal,Fatty-Liver Reversal,Gut Health,Cholesterol control,High BP Regulation,PCOD Reversal,Thyroid Reversal,Uric Acid Reversal"/>
        </Helmet>
        <Carousel showThumbs={false} useKeyboardArrows={true} autoPlay={true} infiniteLoop={true} interval={3000}
                  showStatus={false} stopOnHover={false}>
            <div>
                <img src={slide1}/>
                <motion.h2 className="slide-imgTitle1"
                           initial={!isMobile() ? {
                               opacity: 0,
                               // if odd index card,slide from right instead of left
                               x: -100
                           }: {}}
                           whileInView={!isMobile() ? {
                               opacity: 1,
                               x: 0, // Slide in to its original position
                               transition: {
                                   duration: 1 // Animation duration
                               }
                           } : {}}
                           viewport={!isMobile() ? { once: false } : {}}
                >
                    Loss <span className="green"> weight</span> not to  <span className="yellow">Regain</span>

                </motion.h2>
            </div>
            <div>
                <img src={slide2}/>
                <motion.h2 className="slide-imgTitle"
                    initial={!isMobile() ? {
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        x: 100
                    }:{}}
                    whileInView={!isMobile() ? {
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 1 // Animation duration
                        }
                    }:{}}
                    viewport={{ once: false }}
                >
                    <span className="green">Food</span> Your <span
                    className="yellow">medicine</span></motion.h2>

            </div>
            {/*<div>*/}
            {/*    <img src={slide3}/>*/}

            {/*</div>*/}
        </Carousel>
        <Testimonial></Testimonial>

        <TestimonialSec></TestimonialSec>
        <Understand></Understand>
        <Profile></Profile>

        <Service></Service>
        <Achievment></Achievment>
        <Youtube></Youtube>
        <Blog></Blog>

    </div>
}

export default Home;
