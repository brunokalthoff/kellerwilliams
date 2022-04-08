import SectionHeader from "./SectionHeader";
import ReactPlayer from "react-player/lazy";
import React, { useState } from "react";
import { BsFillPlayCircleFill } from 'react-icons/bs';

function OurTechnology() {

    const videos = [
        {
            vid: "https://youtu.be/B9bvYz2DCMU",
            title: "Designs",
            description: "Point, click and build beautiful, customized digital assets with real-time market data for email, social, and beyond.",
            text: "Create personalized marketing materials from scratch or from professionally designed templates. Help your brand stand out by leveraging individualized market data, so that one-to-many marketing becomes one-to-one.",
        },
        {
            vid: "https://youtu.be/UJ0jBU1AnVE",
            title: "Opportunities",
            description: "Track your pipeline from lead to close",
            text: "See the road ahead with real-time revenue projections that know where you are in the transaction so you have the best information about your cash flow.",
        },
        {
            vid: "https://youtu.be/_7kEa52iR6E",
            title: "SmartPlans",
            description: "Drag and drop your way to better business by simplifying and automating background tasks.",
            text: "Put your time where the money is by streamlining and automating the kind of tasks that typically keep you away from providing top-of-the-line customer service to clients and selling more real estate.",
        },
        {
            vid: "https://youtu.be/BdYcxQOJRCo",
            title: "Campaigns",
            description: "Create an effective campaign that converts across Facebook, Instagram, Google Ads, email, direct mail and more.",
            text: "The first of its kind, this intelligent, cross-channel marketing automator uses analytics, user insights, and KWLS listings to prove and suggest how you should advertise your business in the future.",
        },
        {
            vid: "https://youtu.be/HPL6Ce8MCqg",
            title: "Contacts",
            description: "Manage your most important asset - your database.",
            text: "Enter, manage, and customize your database with simplicity and ease. Whether added directly or through a Kelle voice command, communication is auto-synced across Command, making your database as effective as you want it to be.",
        },
        {
            vid: "https://youtu.be/XR23dJ_T3Ow",
            title: "Referrals",
            description: "Grow and manage your referral business with simplicity and transparency.",
            text: "Tap into one of the largest, most-profitable real estate networks on the planet. Find trusted partners, negotiate, and arrange specifics, keeping your finger on the pulse of every deal.",
        },
        {
            vid: "https://youtu.be/uDm16n2J-40",
            title: "Consumer",
            description: "So much more than search, our consumer experience fuses client preference with your expertise.",
            text: "The combined power of Command, your KW App, and your branded website add up to a best-in-class consumer experience, fueled by real-time data that allows you to guide clients toward well-informed decisions.",
        },
        {
            vid: "https://youtu.be/BsHhLh6sa-E",
            title: "Tasks",
            description: "Virtualize your sticky notes.",
            text: "Turn your to-do list into action items by creating contact-specific tasks that track across Command. Keep it simple and streamlined by inputting your tasks, links, and relevant documents where you perform your operations.",
        },
        {
            vid: "https://youtu.be/BsHhLh6sa-E",
            title: "Listings",
            description: "Manage all of your listings from one place - from pre-listing, to active to pending, to sold.",
            text: "Listings is an end-to-end portal that stores photos and details of each listing. Organized by neighborhood, they bring relevant, community-specific insights to the table, giving you the competitive advantage. Manage and market your listings, and stay on top of it all with minimal effort.",
        },
    ]

    const [selectedVideo, setSelectedVideo] = useState(videos[0].vid);

    const handleClick = e => {
        const url = e.target.value;
        setSelectedVideo(url);
        document.querySelector('.technologyVideoWrapper').style.display = 'block';
    }

    const handleCloseClick = () => {
        document.querySelector('.technologyVideoWrapper').style.display = 'none';
        setSelectedVideo('');
    }

    return (
        <>
            <SectionHeader headline="Our Technology" background="ourTechnologySectionHeader" />
            <div className="technologyWrapper">
                {videos.map((x, i) => (
                    <div key={i} className="technology boxShadow">
                        <button className="playVideoButton" value={x.vid} onClick={handleClick}><BsFillPlayCircleFill size={25} /></button>
                        <img src={'http://img.youtube.com/vi/' + x.vid.slice(17) + '/0.jpg'} alt={x.title} />
                        <div className="technologyFront">
                            <h2>{x.title}</h2>
                            <p>{x.description}</p>
                        </div>
                        <div className="technologyHover">
                            <p>{x.text}</p>
                            
                        </div>
                    </div>
                ))}
                <div className="technologyVideoWrapper" onClick={handleCloseClick}>
                    <div className="closeVideo"></div>
                    <div className="technologyVideoPlayer">
                        <ReactPlayer
                            url={selectedVideo}
                            volume={50}
                            muted={true}
                            controls={true}
                            playing={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurTechnology;