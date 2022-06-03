import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdOutlineCancelScheduleSend } from 'react-icons/md'
import ReCAPTCHA from "react-google-recaptcha";



export const BookForm = () => {
    const nameField = useRef();
    const emailField = useRef();
    const phoneField = useRef();
    const messageField = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID_BOOK, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                nameField.current.value = '';
                emailField.current.value = '';
                phoneField.current.value = '';
                messageField.current.value = '';
                document.querySelector('#bookFormSuccess').style.display = 'block';
            }, (error) => {
                console.log(error.text);
                document.querySelector('#bookFormError').style.display = 'block';
            });
    };

    const [captcha, setCaptcha] = useState(false);

    const onChange = res => {
        if (res) return setCaptcha(true);
        setCaptcha(false);
    }


    return (

        <div id="bookForm" style={{ width: '100%', borderRadius: '2rem', margin: 0, padding: 0, background: 'inherit' }} className="careersFormWrapper bookFormWrapper">
            <h1 style={{margin: 0}}>Book now </h1>
            <h3>Book a free business consultation with Jerry!</h3>

            <form className='careersForm bookForm' onSubmit={sendEmail}>

                <div className="inputWrapper ">
                    <label className='label'>Name *</label>
                    <input type="text" name="user_name" ref={nameField} placeholder="Your Name" required />
                </div>

                <div className="inputWrapper" style={{ flex: 1 }}>
                    <label>Email *</label>
                    <input type="email" name="user_email" ref={emailField} placeholder="Email Adress" required />
                </div>

                <div className="inputWrapper" style={{ flex: 1 }}>
                    <label>Phone Number</label>
                    <input type="text" name="user_phone" ref={phoneField} placeholder="Phone Number" />
                </div>

                <div className="inputWrapper">
                    <label>Message</label>
                    <textarea name="message" rows="4" ref={messageField} placeholder="Leave a Note" />
                </div>
                <div>
                    <ReCAPTCHA
                        className='recaptcha'
                        sitekey="6LeFJ5sfAAAAAP3mR84Hg-FGqVsJ4_l7POvEbHAj"
                        onChange={onChange}
                    />
                </div>
                <input className='buttonPrimary' type="submit" value="Submit" disabled={!captcha} />
                <div id='bookFormSuccess' className="formSuccess"><div><FiSend size={80} /></div><AiFillCloseCircle size={30} className='closeSuccess' onClick={() => document.querySelector('.formSuccess').style.display = 'none'} /><h2>Your message has been sent!</h2><p>We will get back to you as soon as possible.</p></div>
                <div id='bookFormError' className="formError"><div><MdOutlineCancelScheduleSend size={80} /></div><AiFillCloseCircle size={30} className='closeSuccess' onClick={() => document.querySelector('.formError').style.display = 'none'} /><h2>Something went wrong</h2><p>There was an error trying to send your message. Please try again later or contact us at our other channels.</p></div>
            </form>

        </div>
    );
};

export default BookForm