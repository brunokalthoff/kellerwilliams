import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const CareersForm = ({ jobs, inputs, setInputs }) => {

const nameField = useRef();
const emailField = useRef();
const phoneField = useRef();
const messageField = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_qwa3d5s', 'template_06m3o4i', e.target, 'ustGWaX0OYckAM-qG')
            .then((result) => {
                console.log(result.text);
                nameField.current.value = '';
                emailField.current.value = '';
                phoneField.current.value = '';
                messageField.current.value = '';

            }, (error) => {
                console.log(error.text);
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

    return (
        <>
            <form className='careersForm' onSubmit={sendEmail}>
                <h2>Interested? Lets talk!</h2>
                <div className="inputWrapper">
                    <label className='label'>Job Title*</label>
                    <select onChange={handleSelect} value={inputs} name="job_title">
                        {jobs.map((j, i) => (
                            <option key={i} value={i}>{j.title}</option>
                        ))}
                    </select>
                </div>
                <div className="inputWrapper">
                    <label className='label'>Name *</label>
                    <input type="text" name="user_name" ref={nameField} required />
                </div>
                <div className="inputWrapper">
                    <label>Email *</label>
                    <input type="email" name="user_email" ref={emailField} required />
                </div>
                <div className="inputWrapper">
                    <label>Phone Number</label>
                    <input type="text" name="user_phone" ref={phoneField} />
                </div>
                <div className="inputWrapper">
                    <label>Message</label>
                    <textarea name="message" rows="2" ref={messageField} />
                </div>
                <div className="checkBox">
                    <div>
                        <input type="checkbox" name="cb1" value={inputValues[inputs].cb1} />
                        <label>{inputValues[inputs].cb1}</label>
                    </div><div>
                        <input type="checkbox" name="cb2" value={inputValues[inputs].cb2} />
                        <label>{inputValues[inputs].cb2}</label>
                    </div><div>
                        <input type="checkbox" name="cb3" value={inputValues[inputs].cb3} />
                        <label>{inputValues[inputs].cb3}</label>
                    </div>
                </div>
                <input className='buttonPrimary' type="submit" value="Send" />
            </form>
            <div className="formSuccess">Thank you, your message has been sent. We will reach back to you as soon as possible!</div>
        </>
    );
};

export default CareersForm