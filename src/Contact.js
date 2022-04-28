import React from "react";
import { MdLocationPin } from 'react-icons/md';
import { HiExternalLink } from 'react-icons/hi';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';

function Contact(props) {
    return (
        <div id="contact" className="contact">
            <div className="contactWrapper">
                <div className="contactDetails">
                    <h1>Contact</h1>
                    <h2><AiFillPhone /><a href="tel:+1-519-635-4799">(519)-635-4799</a></h2>
                    <h2><AiFillMail /> <a href="https://pages.kw.com/jerry-van-leeuwen/456631/c97sjueojc6fmk0ois5g.html" target="_blank" rel="noreferrer">Send us an email <HiExternalLink size={'1.5rem'} /></a></h2>
                    <h2><MdLocationPin />Milton location coming soon</h2>
                </div>
            </div>
        </div>
    );
}

export default Contact;