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
        { cb1: 'BA in Business or related field', cb2: 'Experience with sales', cb3: 'Strong attention to detail', cb4: 'Experience in a leadership or team lead role that is responsible for holding support teams accountable for superior client experience' },
        { cb1: 'Mastery of our core agent curriculum, scripts for all aspects of real estate and our company’s models and systems', cb2: 'Record of sales success in the real estate business', },
        { cb1: 'Experience in conducting Monthly Regional MCA Meetings and one-on-one calls', cb2: 'Minimum 2 years KW MCA Experience and Accounting Experience', },
    ]

    const handleSelect = e => {
        console.log(e.target.selectedOptions[0].value)
        setInputs(e.target.selectedOptions[0].id);
    }

    const [captcha, setCaptcha] = useState(false);

    const onChange = res => {
        if (res) return setCaptcha(true);
        setCaptcha(false);
    }


    return (

        <div className="careersFormWrapper">
            <form className='careersForm' onSubmit={sendEmail}>
                <h1>Interested? Lets talk!</h1>
                <h4>Send us your contact information and we will get back to you</h4>

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
                    <select onChange={handleSelect} value={jobs[inputs].title} name="job_title">
                        {jobs.map((j, i) => (
                            <option id={i} key={i} value={j.title}>{j.title}</option>
                        ))}
                    </select>
                </div>

                <div className="inputWrapper">
                    <label>Message</label>
                    <textarea name="message" rows="4" ref={messageField} placeholder="Enter Your Message" />
                </div>
                
              { inputValues[inputs] && <>
              <h4>Select your skills:</h4>
              <div className="checkBox">
                    <div>
                        {inputValues[inputs].cb1 && <label><input type="checkbox" name="cb1" value={inputValues[inputs].cb1} />{inputValues[inputs].cb1}</label>}
                        {inputValues[inputs].cb2 && <label><input type="checkbox" name="cb2" value={inputValues[inputs].cb2} />{inputValues[inputs].cb2}</label>}
                        {inputValues[inputs].cb3 && <label><input type="checkbox" name="cb3" value={inputValues[inputs].cb3} />{inputValues[inputs].cb3}</label>}
                        {inputValues[inputs].cb4 && <label><input type="checkbox" name="cb4" value={inputValues[inputs].cb4} />{inputValues[inputs].cb4}</label>}
                    </div>
                </div>
                </>
                 }
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