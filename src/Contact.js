import React from "react";
import { MdLocationPin } from 'react-icons/md';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';

function Contact(props) {
    return (
        <div id="contact" className="contact">
            <div className="contactWrapper">
                <div className="contactDetails">
                    <h1>Contact</h1>
                    <h3><AiFillPhone /><a href="tel:+1-519-635-4799">(519)-635-4799</a></h3>
                    <h3><AiFillMail />jerry.j.vanleeuwen@gmail.com
</h3>
                    <h3><MdLocationPin />Milton location coming soon</h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;