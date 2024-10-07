import {Frequent} from "../Components/Frequent";
import {Helmet} from "react-helmet";
import React from "react";

function  FAQ(){
    return (
        <>
            <Helmet>
                <title>FAQ</title>
                <meta name="description"
                      content="VM4fitness offers personalized fitness training, nutrition guidance, and wellness programs to help you achieve your health goals, With expert trainers, tailored workout plans, and a supportive community, VM4fitness is your go-to destination for sustainable fitness and well-being."/>
                <meta name="keywords"
                      content="vm4fitness,fitness,training,nutrition,guidance,wellness-programs,sustainable,fitness,Healthly weight-loss,Diabetes-Reversal,Fatty-Liver Reversal,Gut Health,Cholesterol control,High BP Regulation,PCOD Reversal,Thyroid Reversal,Uric Acid Reversal"/>
            </Helmet>
            <div style={{marginTop: 100}}>
                <Frequent/>
            </div>
        </>

    )
}

export default FAQ;