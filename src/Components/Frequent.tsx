import Collapsible from "react-collapsible";
import img from '../Assests/faq-banner.jpg'
export function Frequent(){
    return (
        <>
            <section id="home">
                <div className="slider" style={{paddingTop:0}}>
                    <div className="slides">
                        <img src={img} className="slide faq-slide" alt=""/>

                    </div>

                </div>
            </section>
            <section className="faq-section" id="faq-section" style={{background:"white"}}>
                <div className="faq-div">
                    <div className="feq-conatiner ">
                        <Collapsible trigger="1. How does this program work?">
                            <p>
                                The Healthy Weight Loss Program has a holistic approach which takes care of the
                                different pillars of health. Firstly, we analyze your lifestyle and health parameters,
                                based
                                on which we custom-design the program for you.
                            </p>
                        </Collapsible>
                        <Collapsible trigger="2. Are there any recommended exercises for weight loss?">
                            <p>
                                Yes, we do recommend exercise or Yoga routines as per your body requirements and
                                schedule.

                            </p>
                        </Collapsible>
                        <Collapsible trigger="3. How can I stay motivated throughout my weight loss journey?">
                            <p>
                                We track your progress on a daily basis so that you get the best result. Our coaches
                                constantly
                                follow-up throughout your journey. A few tips for self-motivation -
                            </p>
                            <ul className="ul-item">
                                <li className="li-items"><i className="fa-solid fa-circle list-icon"></i> Set realistic
                                    goals
                                </li>
                                <li className="li-items"><i className="fa-solid fa-circle list-icon"></i> Celebrate
                                    progress in your
                                    journey, and
                                </li>
                                <li className="li-items"><i className="fa-solid fa-circle list-icon"></i> Remind
                                    yourself of your
                                    reasons for wanting to lose weight.
                                </li>
                            </ul>
                        </Collapsible>
                        <Collapsible trigger="4. What role does sleep play in weight loss?">
                            <p>
                                Adequate sleep is essential for weight management. Lack of sleep can affect hormones
                                that
                                regulate appetite and cravings. Its one of the important pillars of health.
                            </p>
                        </Collapsible>
                        <Collapsible trigger="5. Can breastfeeding moms pursue this Program?">
                            <p>
                                Absolutely! Once Your baby is 6 months old and have started solids, you can start this
                                program.
                                We have many women beneficiaries who completed the program while breastfeeding.
                            </p>
                        </Collapsible>
                        <Collapsible trigger="6. What are some healthy meal planning and cooking tips?">
                            <p>
                                All meal planning and cooking guidance will be provided by our Coaches. We recommend
                                Indian food
                                which you take on a normal basis but we ensure that you use the healthy cooking
                                practices while
                                preparing your meals.
                            </p>
                        </Collapsible>
                        <Collapsible trigger="7. What role does hydration play in weight loss?">
                            <p>
                                Adequate hydration is crucial to an effective weight loss. It boosts metabolism and also
                                promotes satiety. Without proper hydration, fat breakdown and elimination is likely to
                                get
                                compromised.

                            </p>
                        </Collapsible>
                        <Collapsible trigger="8. How can I track my progress effectively?">
                            <p>
                                You can track your progress most effectively by helping your Coach with your updates,
                                constantly
                                being in touch with him/her and making changes or implementing the inputs shared by
                                him/her. Our
                                process is so designed that both your Coach and you can simultaneously track your
                                progress.
                            </p>
                        </Collapsible>
                        <Collapsible trigger="9. How do I deal with emotional eating and cravings?">
                            <p>
                                When your body heals and gets the right nutrition, it does not crave. Since the program
                                is
                                focused on body healing, most of our clients don't face this issue.
                            </p>
                        </Collapsible>
                        <Collapsible
                            trigger="10. Can I still enjoy social events and dining out while trying to lose weight?">
                            <p>
                                Yes. Coaches will guide you on how to choose your food while dining out. Your
                                responsibility
                                would be to inform your coach and plan it out beforehand.
                            </p>
                        </Collapsible>
                        <Collapsible trigger="11. Are there any success stories or testimonials from people who have used
                        this program to achieve their weight loss goals?">
                            <p>
                                Yes, we have a plenty of testimonials and success stories published on our social media
                                handles.
                                You can check them out using the following links -
                            </p>
                            <a href="">Instagram</a>
                            <a href="">FaceBook</a>
                        </Collapsible>
                        <Collapsible trigger="12. How much weight can I expect to lose each week in this program?">
                            <p>
                                Weight loss per week in a weight loss program can vary significantly from person to
                                person.
                                Several factors like high-stress levels, inadequate sleep, and slower metabolic rate can
                                hinder
                                weight loss progress, hence affecting the rate of weight lost per week. It also depends
                                on how
                                well you are following the program.
                                However, the average weight lost through our program is 3-5 kg in Females and 4-6 kg in
                                Males
                                per month but it cannot be promised as every body is different.
                            </p>
                        </Collapsible>
                        <Collapsible trigger="13. How do I deal with weight loss plateaus?">
                            <p>
                                Weight loss plateaus are a normal part of the process. Remember that progress may not
                                always be
                                linear, and sometimes your body needs time to adjust. We will make the required changes
                                in the
                                plan and break your plateau. So stay committed to your goals and don't get discouraged.
                            </p>
                        </Collapsible>
                        <Collapsible trigger="14. How can I maintain my weight after reaching my goal??">
                            <p>
                                Maintaining your weight after reaching your goal is just as important as losing weight
                                in the
                                first place. We help you understand how to maintain your weight after the program by
                                continuing
                                to take care of different pillars of health. Once you start the program with us be
                                assured to
                                receive Post Program Weight Maintenance guidance and support.
                            </p>
                        </Collapsible>
                        <Collapsible
                            trigger="15. Is there a concept of daily calorie intake or measuring the food in this">
                            <p>
                                No. You don't need to measure your food.
                            </p>
                        </Collapsible>

                    </div>

                </div>

            </section>
        </>
    )
}
