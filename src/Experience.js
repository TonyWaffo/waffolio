import "./Experience.css";

import aboutPic from "./aboutPic.webp";

const Experience=()=>{
    const experienceList=[
        {
            title:"Software engeneer intern",
            company:"Logitech",
            period:" April 2024 - now",
            description:"Description for the job",
            picture:aboutPic,
        },
        {
            title:"Software engeneer intern",
            company:"Logitech",
            period:" April 2024 - now",
            description:"Description for the job",
            picture:aboutPic,
        },
        {
            title:"Software engeneer intern",
            company:"Logitech",
            period:" April 2024 - now",
            description:"Description for the job",
            picture:aboutPic,
        },
    ]
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
                            <h3>{experience.title}|{experience.company}<br/>{experience.period}</h3>
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