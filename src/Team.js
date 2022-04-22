import React from "react";
import jerry from './images/Jerry.png';
import jonah from './images/Jonah.PNG';
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
        {
            img: jonah,
            role: "Assistant Team leader",
            description: "",
            name: "Jonah Hopkins",
            link: ""
        }
    ]

    const teamOpen = [
        {
            img: sillhouette1,
            role: "Team Leader (m/f/d)",

            name: "YOU?",
            link: ""
            // link: <a href="#careers">CAREERS &#8250;</a>
        },
        {
            img: sillhouette2,
            role: "Productivity Coach (m/f/d)",
            description: "",
            name: "YOU?",
            link: ""
            // link: <a href="#careers">CAREERS &#8250;</a>
        },
        {
            img: sillhouette3,
            role: "Market Center Administrator (m/f/d)",
            description: "",
            name: "YOU?",
            link: ""
            // link: <a href="#careers">CAREERS &#8250;</a>
        },
    ]

    return (
        <div className="team">
            <h1>Leadership Team</h1>
            <div className="teamFlex">
                {teamLeaders.map((x, i) => (
                    <div
                        // initial={{ x: 300, y: 300, opacity: 0 }}
                        // whileInView={{ x: 0, y: 0,  opacity: 1 }}
                        // transition={{ delay: i * 0.2, type: "spring", stiffness: 70 }}
                        // viewport={{ once: true }}

                        key={i} className="avatar">
                        <img src={x.img} alt={x.role} />
                        <h2>{x.name}</h2>
                        <h2>{x.role}</h2>
                        <p> {x.description}</p>
                        {x.link}
                    </div>
                ))}
            </div>
            <div className="teamFlex">
                {teamOpen.map((x, i) => (
                    <motion.div
                        initial={{ x: -300, y: 300, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}

                        key={i} className="avatar">
                        <img src={x.img} alt={x.role} />
                        <h2>{x.name}</h2>
                        <h2>{x.role}</h2>
                        <p> {x.description}</p>
                        {x.link}
                    </motion.div>
                ))}

            </div>
            <a href="#careers" className="buttonPrimary">Apply here</a>
        </div>
    );
}

export default Team;