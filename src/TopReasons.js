import { motion } from "framer-motion";
import React from "react";
import { FaHandHoldingUsd, FaChartBar, FaBullhorn, FaUsers, FaMoneyBillWave, FaChalkboardTeacher, FaBrain, FaDesktop, FaBusinessTime } from 'react-icons/fa';
import SectionHeader from "./SectionHeader";

function TopReasons() {

    const reasons = [
        {
            headline: "Building YOUR Business",
            icon: <FaBusinessTime />,
            text: "It’s YOUR real estate business! You are in control of your career, not your broker. Traditionally, agents worked for the broker and relied heavily on them to succeed. Keller Williams changed that. We wouldn’t be in business without our associates, so the only thing we want to do is help you build your business.",
        },
        {
            headline: "Tech-Enabled Realtor",
            icon: <FaDesktop />,
            text: "Empowering its Realtors to be Consumer Focused Keller Williams has set out to change how real estate is done. Most importantly, we are doing this to protect our associates from companies that wish to replace you with technology. By building our own technology platform, KW Command, we have become the Amazon of real estate. You now have the opportunity to give the best customer experience to your clients, providing metrics and customization the real estate industry has ever seen. We continue to forge ahead as a technology company, not a real estate company. Investing $1 billion over the next decade to maintain our edge over the competition will continue to make KW the real estate company of choice.",
        }, {
            headline: "Keller Williams Cultural Mindset",
            icon: <FaBrain />,
            text: "Being part of a company that truly cares about you is extremely hard to find these days. Keller Williams puts the needs of its realtors first and treats all associates as family. Running deep in the moral fibres of Keller Williams are both an abundance and growth mindset. With these two drivers it allows for a culture that you and your family before the business and an ongoing communal effort among realtors and associates to share successful business tactics to support success.",
        }, {
            headline: "Educating to Empower",
            icon: <FaChalkboardTeacher />,
            text: "Most people see Keller Williams as a real estate company, but the truth of the matter is we are nothing more than a teaching, training, consulting and technology firm disguised as a real estate company. Our training is what sets us apart from the competition. Teaching our realtors to master the market of the moment and have more knowledge of their industry/market than their competitors is what has allowed KW to be the only large real estate company to see positive growth in all economies, not just the good ones.",
        }, {
            headline: "Live Your Desired Lifestyle",
            icon: <FaMoneyBillWave />,
            text: "Netting You More to Live Your Desired Lifestyle and Build Your Business Faster! The Keller Williams commission structure allows you to make more money than with any other company. Every realtor has a cap on the total amount of commissions paid each year. Once you reach your cap, you keep 100% of your commissions. Don’t reach your cap, you’re not required to pay anything. Our goal is to help grow your business. The office only gets rewarded when you succeed, as it should be.",
        }, {
            headline: "Agent Leadership Council (ALC)",
            icon: <FaUsers />,
            text: "Made up of the top 20% of the realtors in each office, the ALC is the voice for all the realtors. The main purpose of this council is to hold management and ownership accountable in running the market center and allowing realtors and associates to have a say in how the office is run. A truly empowering feature that treats realtors the same as the owners. We all have a say in how the office is run. The ALC is also essential in helping new realtors. Being involved in mentoring and teaching allows new realtors to get into production faster.",
        }, {
            headline: "Accountability with No Secrets",
            icon: <FaBullhorn />,
            text: "Keller Williams is an ‘open books’ company, allowing all realtors and associates to access their market center financials to see firsthand how the company is performing. Realtors and associates are partners in business, which allows everyone to work together to maximize financial success. At Keller Williams, you have many different ways to build wealth. Our goal is realtors helping realtors and everyone can share in the rewards of success.",
        }, {
            headline: "Growing Your Business",
            icon: <FaChartBar />,
            text: "Growing Your Business and Supporting Your Retirement. Keller Williams gives you the opportunity to not only build a great business, but add retirement income to your business model. With other standard real estate companies who take all the profits for themselves you miss out on this opportunity. Join Keller Williams and share the profits forever.",
        }, {
            headline: "Beyond Transactional Real Estate",
            icon: <FaHandHoldingUsd />,
            text: "Building a Business Beyond Transactional Real Estate. Keller Williams offers you limitless opportunities beyond transactional real estate. Let your passion drive your business and Keller Williams be the playground to grow, build businesses and have fun!",
        },
    ]


    return (
        <>
            <SectionHeader headline={"Top Reasons to Join"} background="topReasonsSectionHeader" />
            <div className="reasonsWrapper">
                {reasons.map((x, i) => (
                    <motion.div

                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 30 }}
                        viewport={{ once: true }}

                        key={i} className={i % 2 === 0 ? "reason" : "reason"}>
                        <div className={i % 2 === 0 ? "" : ""}>{x.icon}</div>
                        <h2 className={i % 2 === 0 ? "" : ""}>{x.headline}</h2>
                        <p className={i % 2 === 0 ? "" : ""}>{x.text}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default TopReasons;