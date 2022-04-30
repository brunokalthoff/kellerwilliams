import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';


function Hero() {
    return (
        <div className="hero">
            <div className="heroWrapper">
                <motion.div
                    className="heroHeadline">
                    <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: .5, type: 'spring', bounce: 0, stiffness: 25 }}
                    >Keller Williams.<br />
                    Your {["T","h","r","i","v","i","n","g"," ","B","u","s","i","n","e","s","s"].map((x,i)=>{
                        return <motion.span
                        className='colorRed'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{delay: i * 0.105}}
                        >{x}</motion.span>
                    })}<br />is our Mission.</motion.h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{delay:.3}}
                    viewport={{ once: true }}
                    className="introVideoWrapper">
                    <ReactPlayer
                        className="introVideo"
                        url='https://www.youtube.com/embed/xCAPK6UmJGI'
                        volume={50}
                        muted={true}
                        controls={true}
                        playing={false}
                        width={'100%'}
                    /></motion.div>

                <div className="heroFlex">

                    <div>
                        <h1>Mission</h1>
                        <p>Empower our Associates to build thriving businesses, to produce enriched lives and positive exponential impact for our clients.</p>
                    </div>
                    <div>
                        <h1>Vision</h1>
                        <p>To be the preferred partner for growth mindset Associates who relentlessly deliver exceptional experiences making us the real estate company of choice for clients.</p>
                    </div>

                </div>

                <motion.a
                    href="https://pages.kw.com/jerry-van-leeuwen/456631/c97sjueojc6fmk0ois5g.html" target="_blank" rel="noreferrer">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className='getStarted'>Click here to get started<BsArrowUpRight size={25} /></motion.div>
                </motion.a>

            </div>
        </div>

    );
}

export default Hero;















// {/* <ReactPlayer
//                 className="backgroundVideo"
//                 url='https://www.youtube.com/embed/xCAPK6UmJGI'
//                 playing={true}
//                 loop={true}
//                 volume={50}
//                 muted={true}
//                 width='100%'
//                 height='100%'
//             /> */}

// {/* <div className="mainFlex1">
//                         <img className="mainLogo" src={mainLogo} alt="" />
//                         {/* <form onSubmit={sendEmail} type="submit">
//                             <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Name" />
//                             <input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="Email" />
//                             <input onChange={e => setPhone(e.target.value)} value={phone} type="text" placeholder="Phone Number" />
//                             <textarea onChange={e => setMessage(e.target.value)} value={message} placeholder="Message" rows="3" ></textarea>
//                             <input className='buttonPrimary' value="SEND" type="submit" />
//                         </form> */}
// {/* </div> */ }

// /* .backgroundVideo {
// position: absolute;
// left: 0;
// top: 0;
// opacity: .3;
// pointer-events: none;
// transform: scale(1.7);
// object-fit: fill;
// } */

// /* .heroContent:nth-child(1) {
//   position: relative;
//   z-index: 1;
// } */