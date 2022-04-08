import React from "react";
import jerry from './images/Jerry.jpg';
import jonah from './images/Jonah.PNG';
import sillhouette1 from './images/sillhouette1.jpg';
import sillhouette2 from './images/sillhouette2.jpg';
import { MdPhone } from 'react-icons/md';

function Team() {

    const team = [
        {
            img: jerry,
            role: "Market Centre Operating Principle",
            description: "at our Milton Market Center",
            name: "Jerry Van Leeuwen",
            link: <a className="" href="tel:+1-519-635-4799"><MdPhone size={20} />(519)-635-4799</a>
        },
        {
            img: jonah,
            role: "Assistant Team leader",
            description: "",
            name: "Jonah Hopkins",
            link: ""
        },
        {
            img: sillhouette2,
            role: "Team Leader (m/f/d)",
     
            name: "YOU?",
            link: <a href="#careers">Careers &#8250;</a>
        },
        {
            img: sillhouette1,
            role: "Productivity Coach (m/f/d)",
            description: "",
            name: "YOU?",
            link: <a href="#careers">Careers &#8250;</a>
        },
    ]


    return (
        <div className="team">
            <h1>Leadership Team</h1>
            <div className="teamContent">
                {team.map((x, i) => (
                    <div key={i} className="avatar">
                        <img src={x.img} alt={x.role} />
                        <h2>{x.name}</h2>
                        <h2>{x.role}</h2>
                        <p> {x.description}</p>
                        {x.link}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;