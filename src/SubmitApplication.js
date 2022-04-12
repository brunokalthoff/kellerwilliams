import emailjs from '@emailjs/browser';

export const SubmitApplication = (props) => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qwa3d5s', 'template_06m3o4i', e.target, 'ustGWaX0OYckAM-qG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>

            <form className='applicationForm' onSubmit={sendEmail}>
                <h3>Interested? Lets talk!</h3>
                <input hidden type="text" name='job_title' value={props.jobTitle} />
                <div className="inputWrapper">
                    <label className='label'>Required *</label>
                    <input type="text" name="user_name" placeholder="Name" required />
                </div>
                <div className="inputWrapper">
                    <label>Required *</label>
                    <input type="email" name="user_email" placeholder="Email" required />
                </div>
                <div className="inputWrapper">
                    <input type="text" name="user_phone" placeholder="Phone Number" />
                </div>
                <div className="inputWrapper">
                    <textarea name="message" placeholder="Message" rows="4" />
                </div>
                <div className="checkBox">
                    <div>
                        <input type="checkbox" name="first" />
                        <label htmlFor="one">Uni Degree</label>
                    </div><div>
                        <input type="checkbox" name="second" />
                        <label htmlFor="second">Bad Breath</label>
                    </div><div>
                        <input type="checkbox" name="third" />
                        <label htmlFor="third">Sweaty Armpits</label>
                    </div>
                </div>
                <input type="submit" value="Send" />
            </form>
        </>
    );
};

export default SubmitApplication