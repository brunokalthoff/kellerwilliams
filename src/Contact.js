import React, { useState } from "react";
import { MdPhone, MdMail, MdLocationPin } from 'react-icons/md';
import axios from "axios";




function Contact(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            Name: name,
            Email: email,
            Phone: phone,
            Message: message,
        }
        axios.post('url', data).then(response => {
            console.log(response);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        })
    }

    return (
        <div id="contact" className="contact">
            <div className="contactWrapper">
                {/* <form id="contact" onSubmit={handleSubmit} type="submit">
                    <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Name" />
                    <input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="Email" />
                    <input onChange={e => setPhone(e.target.value)} value={phone} type="text" placeholder="Phone Number" />
                    <textarea onChange={e => setMessage(e.target.value)} value={message} placeholder="Message" rows="3" ></textarea>
                    <input className="buttonPrimary" value="SEND" type="submit" />
                </form> */}

                <div className="contactDetails">
                    <h1>Contact Us</h1>
                    <p><MdPhone size={30} /><a href="tel:+1-519-635-4799">(519)-635-4799</a></p>
                    <p><MdMail size={30} /> <a href="https://pages.kw.com/jerry-van-leeuwen/456631/c97sjueojc6fmk0ois5g.html" target="_blank" rel="noreferrer">Send an Email!</a> </p>
                    <p><MdLocationPin size={30} />Milton location coming soon</p>

                </div>
            </div>
        </div>
    );
}

export default Contact;