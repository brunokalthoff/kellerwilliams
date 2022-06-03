import React from "react";
import jerry from './images/Jerry.png';
import sillhouette1 from './images/sillhouette1.png';
import sillhouette2 from './images/sillhouette2.png';
import sillhouette3 from './images/sillhouette3.png';
import { AiFillPhone } from 'react-icons/ai';
import { motion } from "framer-motion";
import BookForm from './BookForm';
import { FiChevronRight } from "react-icons/fi";

function Team() {

    const teamLeaders = [
        {
            img: jerry,
            role: "Market Centre Operating Principle",
            description: "at our Milton Market Center",
            name: "Jerry Van Leeuwen",
            bio: <>Prior to becoming one of Kitchener-Waterloo’s top real estate agents, Jerry Vanleeuwen enjoyed a career as an advanced care paramedic in the Region of Waterloo. Caring for people is in his nature, which is why he places his values on family, business, and health. He takes time while helping each of his clients understand the real estate market and the decisions that must be made to achieve their unique goals.
                <br /> <br />
                Jerry is a CHBA certified home buying advisor through the National Association of Expert Advisors (NAEA), a CHSA Certified Home Selling Advisor through NAEA, and he has been trained and certified through the NAEA to provide the best possible service to his clients. On top of that, he is the team owner of Vanleeuwen Real Estate Advisors, a fast growing team in Cambridge and was just awarded the " Highest Gains" Award for April 2022.
                <br /> <br />
                With a reputation for honesty and integrity, Jerry seeks to positively affect the lives of those he works with and provide a more reliable approach to real estate that makes for a more informed decision-making process. </>
        },
    ]

    const teamOpen = [
        {
            img: sillhouette1,
            role: "Team Leader",
            name: "YOU?",
            link: ""
        },
        {
            img: sillhouette2,
            role: "Productivity Coach",
            description: "",
            name: "YOU?",
            link: ""
        },
        {
            img: sillhouette3,
            role: "Market Center Administrator",
            description: "",
            name: "YOU?",
            link: ""
        },
    ]

    return (
        <div className="team">
            <h1>Milton Market Center - Leadership</h1>
            <div className="teamflex-leader">

                <div className="teamflex-leader-head">
                    <div>
                        <h1 className="avatarName">{teamLeaders[0].name}</h1>
                        <h3 className="avatarRole">{teamLeaders[0].role}</h3>
                        <a className="" href="tel:+1-519-635-4799"><AiFillPhone size={20} />(519)-635-4799</a>
                    </div>
                    <img src={teamLeaders[0].img} alt={teamLeaders[0].role} />
                </div>
                <div className="teamflex-leader-text">
                    <p>{teamLeaders[0].bio}</p>
                </div>

            </div>
            
            <BookForm />

            <div className="teamflex">
                {teamOpen.map((x, i) => (
                    <motion.div
                        initial={{ x: -100, y: 100, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}

                        key={i} className="avatar">
                        <img src={x.img} alt={x.role} />
                        <h2 className="avatarName">{x.name}</h2>
                        <h3 className="avatarRole">{x.role}</h3>
                        <p> {x.description}</p>
                        {x.link}
                    </motion.div>
                ))}

            </div>
            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                href="#careers" className="buttonSecondary">Join Us <FiChevronRight /></motion.a>
        </div>
    );
}

export default Team;


