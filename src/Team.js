import React from "react";
import jerry from './images/Jerry.png';
import sillhouette1 from './images/sillhouette1.png';
import sillhouette2 from './images/sillhouette2.png';
import sillhouette3 from './images/sillhouette3.png';
import { AiFillPhone } from 'react-icons/ai';
import { motion } from "framer-motion";

function Team() {

    const teamLeaders = [
        {
            img: jerry,
            role: "Market Centre Operating Principle",
            description: "at our Milton Market Center",
            name: "Jerry Van Leeuwen",
            link: <a className="" href="tel:+1-519-635-4799"><AiFillPhone size={20} />(519)-635-4799</a>
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
            <h1>Leadership Team</h1>
            <div className="teamFlex">
                {teamLeaders.map((x, i) => (
                    <div
                        key={i} className="avatar">
                        <img src={x.img} alt={x.role} />
                        <h2 className="avatarName">{x.name}</h2>
                        <h3 className="avatarRole">{x.role}</h3>
                        <p> {x.description}</p>
                        {x.link}
                    </div>
                ))}
            </div>
            <div className="teamFlex">
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
                href="#careers" className="buttonSecondary">Join Us</motion.a>
        </div>
    );
}

export default Team;