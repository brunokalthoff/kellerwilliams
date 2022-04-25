import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdOutlineCancelScheduleSend } from 'react-icons/md'
import ReCAPTCHA from "react-google-recaptcha";



export const CareersForm = ({ jobs, inputs, setInputs }) => {
    const nameField = useRef();
    const emailField = useRef();
    const phoneField = useRef();
    const messageField = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                nameField.current.value = '';
                emailField.current.value = '';
                phoneField.current.value = '';
                messageField.current.value = '';
                document.querySelector('.formSuccess').style.display = 'block';
            }, (error) => {
                console.log(error.text);
                document.querySelector('.formError').style.display = 'block';

            });
    };

    const inputValues = [
        { cb1: 'a', cb2: 'b', cb3: 'c' },
        { cb1: 'd', cb2: 'e', cb3: 'f' },
        { cb1: 'g', cb2: 'h', cb3: 'i' },
        { cb1: 'j', cb2: 'k', cb3: 'l' },
    ]

    const handleSelect = e => {
        console.log(e.target.selectedOptions[0].value)
        setInputs(e.target.selectedOptions[0].value);
    }

    const [captcha, setCaptcha] = useState(false);

    const onChange = res => {
        console.log("Captcha value:", res);
        if (res) return setCaptcha(true);
        setCaptcha(false);
    }


    return (

        <div className="careersFormWrapper">
            <form className='careersForm' onSubmit={sendEmail}>
                <h1>Interested? Lets talk!</h1>
                <h4>Send Us Your Contact Information And We Will Get Back To You.</h4>

                <div className="inputWrapper">
                    <label className='label'>Name *</label>
                    <input type="text" name="user_name" ref={nameField} placeholder="Enter Your Name" required />
                </div>

                <div className="inputWrapper" style={{ flex: 1 }}>
                    <label>Email *</label>
                    <input type="email" name="user_email" ref={emailField} placeholder="Enter Your Email" required />
                </div>

                <div className="inputWrapper" style={{ flex: 1 }}>
                    <label>Phone Number</label>
                    <input type="text" name="user_phone" ref={phoneField} placeholder="Enter Your Phone" />
                </div>

                <div className="inputWrapper">
                    <label className='label'>Job Title*</label>
                    <select onChange={handleSelect} value={inputs} name="job_title">
                        {jobs.map((j, i) => (
                            <option key={i} value={i}>{j.title}</option>
                        ))}
                    </select>
                </div>

                <div className="inputWrapper">
                    <label>Message</label>
                    <textarea name="message" rows="4" ref={messageField} placeholder="Enter Your Message" />
                </div>
                <h4>Please Select Your Skills:</h4>
                <div className="checkBox">
                    <div>
                        <label><input type="checkbox" name="cb1" value={inputValues[inputs].cb1} />{inputValues[inputs].cb1}</label>

                        <label><input type="checkbox" name="cb2" value={inputValues[inputs].cb2} />{inputValues[inputs].cb2}</label>

                        <label><input type="checkbox" name="cb3" value={inputValues[inputs].cb3} />{inputValues[inputs].cb3}</label>
                    </div>
                </div>
                <div>
                    <ReCAPTCHA
                        className='recaptcha'
                        sitekey="6LeFJ5sfAAAAAP3mR84Hg-FGqVsJ4_l7POvEbHAj"
                        onChange={onChange}
                    />
                </div>
                <input className='buttonPrimary' type="submit" value="Submit" disabled={!captcha} />
                <div className="formSuccess"><div><FiSend size={80} /></div><AiFillCloseCircle size={30} className='closeSuccess' onClick={() => document.querySelector('.formSuccess').style.display = 'none'} /><h2>Your message has been sent!</h2><p>We will get back to you as soon as possible.</p></div>
                <div className="formError"><div><MdOutlineCancelScheduleSend size={80} /></div><AiFillCloseCircle size={30} className='closeSuccess' onClick={() => document.querySelector('.formError').style.display = 'none'} /><h2>Something went wrong</h2><p>There was an error trying to send your message. Please try again later or contact us at our other channels.</p></div>
            </form>

        </div>
    );
};

export default CareersForm