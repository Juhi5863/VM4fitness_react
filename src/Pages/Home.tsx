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




function  Home(){
    return <div style={{marginTop: 100}}>
        <Carousel showThumbs={false} useKeyboardArrows={true} autoPlay={true} infiniteLoop={true} interval={3000} showStatus={false} stopOnHover={false}>
            <div>
                <img src={slide1} />

            </div>
            <div>
                <img src={slide2} />

            </div>
            <div>
                <img src={slide3} />

            </div>
        </Carousel>
        <Testimonial></Testimonial>
        <Profile></Profile>
        <Understand></Understand>
        <Service></Service>
        <Blog></Blog>
        <Achievment></Achievment>
        <Youtube></Youtube>
        <Contact></Contact>
        <Frequent></Frequent>
        <TestimonialSec></TestimonialSec>
        <FooterOne></FooterOne>

    </div>
}

export default Home;