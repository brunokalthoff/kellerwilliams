import React from "react";
import { motion } from "framer-motion";

function TheDifference() {
    const animation =
    {
        span: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        bar: {
            hidden: {  x: "-100%" },
            visible: { x: 0 },

        }
    }

    const transition = { duration: 1 }

    const graph = [
        {
            h2: "KELLER WILLIAMS OUTPACES INDUSTRY IN TRANSACTION GROWTH BY MORE THAN 9X",
            title: "KELLER WILLIAMS",
            span: "9.7%",
            style: [{ width: '41%' }, { margin: "" }],
            class: "growthKeller",
        },
        {
            h2: "",
            title: "KELLER WILLIAMS",
            span: "1.1%",
            style: [{ width: '6%' }, { margin: "" }],
            class: "growthIndustry",
        },
        {
            h2: "KELLER WILLIAMS OUTPACES INDUSTRY ON CLOSED SALES VOLUME GROWTH BY MORE THAN 2X.",
            title: "KELLER WILLIAMS",
            span: "15%",
            style: [{ width: '70%' }, { marginTop: "2rem" }],
            class: "growthKeller",
        },
        {
            h2: "",
            title: "KELLER WILLIAMS",
            span: "7.2%",
            style: [{ width: '36%' }, { margin: "" }],
            class: "growthIndustry",
        },
    ]

    return (
        <div className="difference">
            <div className="differenceFlexWrap">
                <div className="differenceText">
                    <h1>The Keller Williams Difference</h1>
                    <p>As the largest real estate franchise in the world, our exponential growth is a result of our commitment to delivering value to our associates. We understand that our associates are the key to our company’s success, not the other way around. As a result, more real estate professionals than ever are turning to Keller Williams Realty. And, we’re powering their businesses with the education, coaching, technology, culture, and wealth-building opportunities that are redefining their potential and taking their careers toward new heights.</p>
                </div>
                <div className="ProgessBars">


                    {graph.map(bar => (
                        <div>
                            {bar.h2 && <h2 style={bar.style[1]}>{bar.h2}</h2>}
                            <p className="progessBarsTitle">{bar.title}</p>
                            <div className="progressBar">
                                <motion.span
                                    className="progessBarSpan"
                                    initial={"hidden"}
                                    whileInView={"visible"}
                                    transition={transition}
                                    variants={animation.span}
                                    viewport={{ once: true }}
                                    >{bar.span}</motion.span >
                                <motion.div
                                    className={bar.class}
                                    initial={"hidden"}
                                    whileInView={"visible"}
                                    variants={animation.bar}
                                    transition={transition}
                                    viewport={{ once: true }}
                                    style={bar.style[0]}
                                ></motion.div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
}

export default TheDifference;