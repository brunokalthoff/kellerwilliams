import React from 'react'
import ReactPlayer from 'react-player/lazy'
import mainLogo from './images/main-logo.png';


function Main() {

    return (
        <div className="main">
            {/* <ReactPlayer
                className="backgroundVideo"
                url='https://www.youtube.com/embed/xCAPK6UmJGI'
                playing={true}
                loop={true}
                volume={50}
                muted={true}
                width='100%'
                height='100%'
            /> */}
            <div className="mainHeadline">
            <h1>Keller Williams: Your <span className='colorRed'>Thriving Business</span> is our Mission!</h1>
            </div>

                <div className="mainContent">
                    
                    <div className="introVideoWrapper">
                        <ReactPlayer
                            className="introVideo"
                            url='https://www.youtube.com/embed/xCAPK6UmJGI'
                            volume={50}
                            muted={true}
                          
                        /></div>
                    {/* <div className="mainFlex1">
                        <img className="mainLogo" src={mainLogo} alt="" />
                        {/* <form onSubmit={sendEmail} type="submit">
                            <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Name" />
                            <input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="Email" />
                            <input onChange={e => setPhone(e.target.value)} value={phone} type="text" placeholder="Phone Number" />
                            <textarea onChange={e => setMessage(e.target.value)} value={message} placeholder="Message" rows="3" ></textarea>
                            <input className='buttonPrimary' value="SEND" type="submit" />
                        </form> */}
                    {/* </div> */}
                    <div className="mainFlex2">
                        <div>
                            <h1>Mission</h1>
                            <p>Empower our Associates to build thriving businesses, to produce enriched lives and positive exponential impact for our clients.</p>
                        </div>
                        <div>
                            <h1>Vision</h1>
                            <p>To be the preferred partner for growth mindset Associates who relentlessly deliver exceptional experiences making us the real estate company of choice for clients.</p>
                        </div>
                    </div>

                </div>
            </div>
      
    );
}

export default Main;