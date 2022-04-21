import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import CareersForm from "./CareersForm";
import { motion } from "framer-motion";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai'

function Careers() {

    const jobs = [
        {
            title: "Team Leader (m/f/d)",
            intro: "Keller Williams Capital Properties, the fastest growing franchise group within the Keller Williams Realty International system, is actively seeking Team Leaders (TL) to lead and grow high-achieving and well-established Market Center offices in the Washington, DC, metro area. The right candidate may also have the opportunity to grow the company by helping to open new offices in the region. This key individual will serve on the leadership team for all of KWCP, currently with six different locations across DC, Maryland, and Virginia, with nearly 1,000 licensed real estate agents. The TL will be primarily focused on maintaining aggressive growth in the number of licensed real estate agents within the organization, with managing the entire leadership team within the Market Center, and with building strong consultative relationships with the top agents in the office. The TL will be excellent at casting a big vision and leading their team towards that vision while managing the achievement of critical milestones along the path to success. The next successful TL will have high capacity in interpersonal relationships and will be an inspirational and effective oral and written communicator.",
            duties: "The TL is a senior role within KWCP, and will be responsible for: Leading strategic initiatives to rapidly recruit high producing and high potential real estate agents to the office Oversee the hiring, leadership and development of the staff as well as ensure they are properly trained and held accountable to KWCP’s high performance standards Manage and accelerate the financial performance of the office, paying close attention to, and making necessary adjustments to key financial indicators, to maximize profitability Provide business development and financial management consulting to top agents with the office, helping them make dramatic growth in their personal production and performance Promote a strong learning based environment and ensure that agents have access to top of the line training and educational opportunities Maintain a positive and empowering environment that both challenges associates to reach their potential, and also provides for a caring, people-first, atmosphere.",
            skills: "Have in-depth, high level, proven growth and leadership capabilities Experience in a high-growth or start-up environment preferred Ability to build powerful relationships and recruit effectively and consistently Strong verbal leadership and communication skills and social poise Although a background in real estate sales is preferred, a candidate with an exceptional track record in another endeavor, who also possesses exceptional leadership skills, will also be considered Proven ability to work in a collaborative team setting as well as drive work individually Bachelor’s Degree preferred Top candidates will be natural leaders, influencers, and teachers. They will be self-motivated and naturally high-achievers, who value the team over the individual. They will be persuasive and will persevere, will act ethically with personal integrity, and with a high regard for others. The ideal candidate will be seeking unlimited opportunity and will be committed to attaining the highest level of results.",
        },
        {
            title: "Productivity Coach (m/f/d)",
            intro: "The Productivity Coach is a top producer and a recognised leader with high integrity and a track record of business success. You are driven, yet compassionate. You exhibit a take-charge, results-oriented approach to situations and goals, yet also relish seeing others achieve. You will work closely with the leadership team of KW Eden and be an integral part thereof. You are a leader who consistently demonstrate teamwork by actively supporting the leadership’s direction and initiative. You will work and be responsible to increase the productivity of our agents. You will also play a role in recruiting new agents to our Market Centre as candidates for the coaching programme. You will consult with the associates to uncover their goals, coach them on the actions necessary to achieve those goals and then hold them accountable to taking the necessary actions. Additionally, you will work closely with the Market Centre's leadership to create and implement productivity events and the Market Centre's training calendar. Productivity Coaches should be highly skilled in holding others accountable, and should have a rich knowledge base in the property industry. They view learning as the foundation of their action plan and expect someone to hold them accountable to achieving their goals. You are an authentic leader. You delight in knowing that you have attained success when the associates in your coaching program—and in your office—succeed.Essential duties and responsibilities Move Productivity Coaching associates to higher levels of production, as required by leadership. Recruit new associates to the Market Centre and set standards on productivity in the first 90 days. Collaborate with the leadership team to consistently communicate the Market Centre's value. Meet regularly with the Market Centre's leadership and top-producing agents to identify potential candidates for Productivity Coaching. Guide associates in Productivity Coaching through establishing goals and writing a business plan. Coach these associates on the activities that will enable them to achieve their goals. Meet weekly with associates in coaching to review their key numbers and hold them accountable to completion of actions. Implement a regular reward system and/or consequences for associates in coaching who are/are not hitting their goal numbers. Track associate results and share this information with the Market Centre leadership. Work with the leadership team to implement regular productivity opportunities and resources, including daily group lead generation time. Support the Market Centre leadership in generating, implementing, and distributing the monthly training calendar. Promote Productivity Coaching at new associate orientation, in team meetings, at real estate schools, on career nights, etc. Ensure required levels of associate participation at productivity and training initiatives and events.",
            duties: "Move Productivity Coaching associates to higher levels of production, as required by leadership. Recruit new associates to the Market Centre and set standards on productivity in the first 90 days. Collaborate with the leadership team to consistently communicate the Market Centre's value. Meet regularly with the Market Centre's leadership and top-producing agents to identify potential candidates for Productivity Coaching. Guide associates in Productivity Coaching through establishing goals and writing a business plan. Coach these associates on the activities that will enable them to achieve their goals. Meet weekly with associates in coaching to review their key numbers and hold them accountable to completion of actions. Implement a regular reward system and/or consequences for associates in coaching who are/are not hitting their goal numbers. Track associate results and share this information with the Market Centre leadership. Work with the leadership team to implement regular productivity opportunities and resources, including daily group lead generation time. Support the Market Centre leadership in generating, implementing, and distributing the monthly training calendar. Promote Productivity Coaching at new associate orientation, in team meetings, at real estate schools, on career nights, etc. Ensure required levels of associate participation at productivity and training initiatives and events.",
            skills: "Superior goal setting, planning, and accountability skills. Strong people skills. Problem-solving skills. Proactive, positive attitude. Learning-based attitude. Willing to attain our company’s coaching certification. Mastery of our core agent curriculum, scripts for all aspects of real estate and our company's models and systems. Record of sales success in the real estate business. Track record of success in past jobs.",
        },
        {
            title: "Market Centre Administrator (m/f/d)",
            intro: "The Market Center Administrator (MCA) is responsible for keeping the office and the Team Leader on track and productive. He or she maintains personal working relationships with associates and interacts with them on a daily basis. The MCA also helps with any miscellaneous projects and brainstorms ways to help improve the Market Center both financially and operationally. Think of the MCA as the Market Center's Chief Financial Officer and Chief Operations Officer.",
            duties: "The MCA wears many hats. The MCA's job responsibilities cover three specific areas: a. Accounting b. Operation and Administration c. Support Accounting As the equivalent to a Chief Financial Officer, the MCA is responsible for accurate banking and accounting services. This includes: 1. Full charge accounting 2. Computerized bookkeeping and general computer experience 3. Staff payroll if not using a Professional Employment Organization (PEO) 4. Acting as the Market Center liaison to the CPA 5. Being detailed and action oriented 6. Maintaining office files, including accounting files, general ledger files, associate files, employee files, listing files, contract pending files, and closed contract files 7. Monthly reporting to Keller Williams Realty International (KWRI) by the third working day of the following month of all production and accounting figures for the month 8. Responsible for processing and paying associate commissions in states or provinces where associates are not paid at closing The Role of the MCA Chapter 1 MCA Job Description Operations and Administration As the equivalent to a Chief Operations Officer, the MCA is responsible for all systems in the Market Center. This includes: 1. Hiring and managing receptionists and Assistant MCAs 2. Interacting with staff, associates, and vendors 3. Purchasing supplies and equipment 4. Ensuring the professional appearance of all physical facilities 5. Distribution of mail, MLS books, and other communications 6. Coordinating the maintenance of office equipment, including performing minor repairs, calling for repair services, and monitoring maintenance agreements 7. Overseeing Computer Hardware Specialist, Computer Software Trainer, and Internet Specialist 8. Setting up and maintaining all passwords on computer systems 9. Keeping associate distribution boxes, message slots, and roster current 10. Delegating tasks to staff, and responsible for phones being covered Support The Market Center Administrator is also responsible for supporting the Market Center associates and Team Leader (TL). This includes: 1. Understanding, demonstrating and promoting the WI4C2TS and the KW culture as it relates to agents, staff, ownership, and others. 2. Assisting the TL in new agent/employee orientation and training 3. Providing computer services as needed for WinMORE and MYOB systems 4. Assisting the TL in managing agents and the Market Center 5. Providing support and feedback to the TL on all matters affecting the productivity and operation of the Market Center 6. Assisting the TL in gathering materials for the KW Weekly newsletter, including typing and distributing 7. Calculating and reporting for local, regional and international awards.",
            skills: "Knows the systems, tools, and conversations of the Growth Initiative and Career Growth Initiative · Strategic, supportive leader · Full charge bookkeeper · 1–3 years industry, financial, administrative, and management experience · Strong written and verbal communication skills · People oriented and a positive, proactive problem-solver · Detailed oriented · Technologically savvy · High school graduate, college graduate preferred.",
        },
        {
            title: "Market Centre Administrator Tech Trainer  (m/f/d) - To follow",
            intro: '',
            duties: '',
            skills: '',
        },
    ]

    const [inputs, setInputs] = useState(0);
    const changeInputs = e => {
        setInputs(e.target.id);
        document.querySelector(".careersForm").scrollIntoView();
    }

    const [open, setOpen] = useState(null);
    const handleClose = e => {
        setOpen(null);
        document.querySelector(`#job${e.target.id}`).scrollIntoView();
    }

    return (
        <>
            <SectionHeader id="careers" headline="Careers" background="careersSectionHeader" />
            <div className="careers">


                <h1>Open Positions</h1>

                {jobs.map((x, i) => (
                    <div key={i} id={`job${i}`} className="job">
                        <motion.div
                            layout="position"
                            className={i === open ? "jobTitle jobTitleOpen" : "jobTitle"}>
                            <motion.h2 style={i === open ? { color: "var(--black)", textAlign: "center", fontSize: "2rem" } : {}} layout="position" transition={{ duration: .5 }} onClick={() => setOpen(prev => {
                                if (prev === i) return null;
                                else return i;
                            })}>{x.title}</motion.h2>
                            <div>
                                <motion.h3 layout transition={{ duration: .5 }} style={i === open ? { textAlign: 'center' } : {}}>Canada</motion.h3>
                                <motion.h3 layout transition={{ duration: .7 }} style={i === open ? { textAlign: 'center' } : {}}>KW, Milton Market Center</motion.h3>
                            </div>
                            {i !== open && <motion.p layout transition={{ duration: 1 }} className="jobOpenButton" onClick={() => setOpen(i)}><AiOutlinePlusSquare /></motion.p>}
                            {i === open && <motion.p layout transition={{ duration: 1 }} className="jobOpenButton" onClick={() => setOpen(null)}><AiOutlineMinusSquare style={i === open ? { color: "var(--black)" } : {}} /></motion.p>}
                        </motion.div>

                        {i === open && <motion.div
                            className="jobToggle"
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <button id={i} className="buttonPrimary" onClick={changeInputs}>Apply here</button>
                            {i !== 3 && (
                                <>
                                    <div className="jobFlex"><h3>Who are we looking for?</h3><p>{x.intro}</p></div>
                                    <hr />
                                    <div className="jobFlex"><h3>Main responsibilities and duties</h3><p>{x.duties}</p></div>
                                    <hr />
                                    <div className="jobFlex"><h3>Skills & Qualifications</h3><p>{x.skills}</p></div>
                                    <button id={i} style={{ marginTop: '5rem' }} className="buttonPrimary" onClick={changeInputs}>Apply here</button>
                                    <AiOutlineMinusSquare style={i === open ? { color: "var(--black)" } : {}} className="jobOpenButtonLow" id={i} onClick={handleClose} size={30} />
                                </>
                            )
                            }

                        </motion.div>}

                    </div>
                ))}
                <div className="jobForm">
                    <CareersForm setInputs={setInputs} jobs={jobs} inputs={inputs} />
                </div>
            </div>
        </>
    );
}

export default Careers;