import React from "react";
import SectionHeader from "./SectionHeader";
import bigWhy from './images/big-why.jpg'
import expertiseScaled from './images/expertise-scaled.jpg'
import removeLimits from './images/remove-limits.jpg'


function TrainingCoaching() {


    const flexWrap = [
        {
            headline: "Find and Fund Your Big Why",
            text: "We understand that activities dictate our results – not the market. Whether you’re new to the industry or already a top producer, Keller Williams brings laser focus to the activities that lead to results. This suite of interconnected value tools provides you an unprecedented view into your business so you know EXACTLY what needs to be accomplished in order to achieve all-new levels of production and profitability: the two factors that determine if your business can fund the life you envision for yourself and your family.",
            img: bigWhy,
        },
        {
            headline: "Build Expertise",
            text: "Keller Williams University provides the most advanced and comprehensive learning opportunities in real estate and empowers you to become the expert in your local market.",
            img: expertiseScaled,
        },
        {
            headline: "Remove Limits",
            text: "Your business grows to the extent that you do! Award-winning KW MAPS Coaching offers a breadth of high-accountability programs designed to turn your biggest goals into realty. Our coaches are experts on industry best practices, the models of MREA and Keller Williams systems, putting them in a unique position to guide you to the next level.",
            img: removeLimits,
        }
    ]


    return (
        <>
            <SectionHeader headline={"Training and Coaching"} background="trainingAndCoachingSectionHeader" />
            <div className="trainingWrapper">
                {flexWrap.map((x, i) => (
                    <div key={i} className={i % 2 === 0 ? "flexWrap" : "flexWrap flexWrapReverse"}>
                        <div>
                            <h1>{x.headline}</h1>
                            <p>{x.text}</p>
                        </div>
                        <img className="boxShadow" src={x.img} alt={x.headline} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default TrainingCoaching;