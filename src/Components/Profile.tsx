import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  slide1 from '../Assests/slide1.webp'
import  slide2 from '../Assests/slide2.webp'
import  slide3 from '../Assests/slide3.webp'
import mimansa from '../Assests/Mimansa.webp'
import vikaram from '../Assests/Vikram.webp'
import {MdLens} from "react-icons/md";
import {isMobile} from "../Utility";
import { motion } from "framer-motion";


function  Profile(){
    return <div  style={{background: "white"}} id="user-profile">
        <Carousel showIndicators={false} showThumbs={false} useKeyboardArrows={true} autoPlay={true} infiniteLoop={true} interval={6000}
                  showStatus={false} stopOnHover={false} swipeable={isMobile() ? false : true} className="slide-section">
            <div className="slide-about">
                <motion.div className="slide-profile"
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
                    <img src={mimansa} className="slide-img" alt="Profile Image"/>
                </motion.div>
                <motion.div className="profile-contant"
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
                    <h2 className="profile-heading">Mimansa - Nutritionist</h2>
                    <ul className="profile-details">
                        <li><i className="fa-solid fa-circle"></i><MdLens />
                            A passionate Nutritionist, Mimansa has helped
                            countless individuals achieve lasting health by addressing weight loss and reversing
                            conditions like PCOD, Thyroid, and Fatty Liver.
                        </li>
                        <li><i className="fa-solid fa-circle"></i><MdLens />
                            She believes in a holistic, compassionate approach
                            that focuses on fixing the root cause of weight gain for lifelong wellness and no rebound.
                        </li>
                        <li><i className="fa-solid fa-circle"></i><MdLens />
                            At VM4Fitness, her mission is to empower people to
                            live healthier, happier lives by offering personalized guidance and unwavering support.
                        </li>
                    </ul>
                </motion.div>
            </div>

            <div className="slide-about">
                <motion.div className="slide-profile"
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
                    <img src={vikaram} className="slide-img" alt="Profile Image"/>
                </motion.div>
                <motion.div className="profile-contant"
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
                    <h2 className="profile-heading">Vikram- Body transformational coach</h2>
                    <ul className="profile-details">
                        <li><i className="fa-solid fa-circle"></i><MdLens />
                            A dedicated entrepreneur, Vikram ensures the smooth
                            operation and growth of VM4Fitness, focused on making fitness and wellness accessible to
                            all.
                        </li>
                        <li><i className="fa-solid fa-circle"></i><MdLens />
                            He is driven by a deep commitment to client success,
                            striving to create a supportive environment where people can achieve lasting transformation.
                        </li>
                        <li><i className="fa-solid fa-circle"></i><MdLens />
                            Vikram’s vision is to build a trusted brand that
                            uplifts and empowers everyone on their journey to better health.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </Carousel>

    </div>
}

export default Profile;
