import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  slide1 from '../Assests/slide1.webp'
import  slide2 from '../Assests/slide2.webp'
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

            </div>
            <div>
                <img src={slide2}/>

            </div>
            <div>
                <img src={slide3}/>

            </div>
        </Carousel>
        <Testimonial></Testimonial>

        <TestimonialSec></TestimonialSec>
        <Profile></Profile>
        <Understand></Understand>
        <Service></Service>
        <Achievment></Achievment>
        <Youtube></Youtube>
        <Blog></Blog>

    </div>
}

export default Home;