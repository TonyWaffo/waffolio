import "./Experience.css";

import aboutPic from "./aboutPic.webp"
import bEasePic from "./bease.jpg"
import teleperformancePic from "./teleperformance.jpeg"
import vosynPic from "./vosyn.jpg"
import rainbowPic from "./rainbow.jpg"

const Experience=()=>{
    const experienceList = [
        {
            title: "Full Stack Developer",
            company: "BEase",
            period: "April 2024 – now",
            description: "Developed a robust platform enabling service providers to secure contracts via job postings. Utilized React.js for front-end development and PHP Laravel for back-end architecture, ensuring seamless integration with a MySQL database for user and contract management. Implemented secure API connections and integrated diverse payment methods tailored to users' geographic locations.",
            picture: bEasePic,
        },
        {
            title: "Web Developer Intern",
            company: "Vosyn AI",
            period: "May 2024 – August 2024",
            description: "Contributed to a responsive video-sharing platform using React.js and Redux for state management. Conducted unit and component testing with Jest and React Testing Library, ensuring high-quality code. Collaborated effectively with backend teams for seamless API integration and issue resolution.",
            picture: vosynPic,
        },
        {
            title: "Technical Support",
            company: "Teleperformance Canada - Apple Support",
            period: "July 2022 – March 2023",
            description: "Provided expert troubleshooting and software repair for macOS and iOS devices. Managed remote diagnostics and resolved technical issues efficiently, demonstrating strong problem-solving skills in a fast-paced environment while consistently meeting performance targets.",
            picture: teleperformancePic,
        },
        {
            title: "Developer Intern",
            company: "Rainbow CL",
            period: "October 2019 – March 2020",
            description: "Gained hands-on experience in web development using HTML, CSS, and JavaScript. Developed interactive websites with Ajax and PHP, enhancing user engagement and functionality, while building a solid foundation in programming principles.",
            picture: rainbowPic,
        },
    ];
    
    return (
        <>
        <section className="experience">
            <h1>Experience</h1>
            <div className="experience-list">
                {experienceList.map((experience,index)=>(
                    <div className= {`${"experience-container"} ${index%2==0 ? '':'reverse'}`}>
                        <div className="experience-img">
                            <img src={experience.picture} height="100%" width="100%"></img>
                        </div>

                        <div className="experience-content">
                            <h3>{experience.title}, {experience.company}<br/>{experience.period}</h3>
                            <p>{experience.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}

export default Experience;