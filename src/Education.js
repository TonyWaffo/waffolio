import "./Education.css";
import { useRef, useState,useEffect} from "react";
import {motion} from "framer-motion"
const Education=()=>{
    const [currentEducation,setCurrentEducation]=useState(null);
    const [isHovered,setIsHovered]=useState(false);
    const [isHovered2,setIsHovered2]=useState(false);
    const sectionRef=useRef(null); //we use this way to access the DOM

    const icon=[["fa","fa-building-columns"],["fa","fa-book"],["fa","fa-computer-mouse"],["fa","fa-pen"],["fa","fa-graduation-cap"],["fa","fa-computer"]];
    useEffect(()=>{
        const intervalId = setInterval(createBubble,1000);

        return ()=>{
            clearInterval(intervalId);
        }
    },[]);

    //this function create a bubble randomly in the section and delete it after few time
    const createBubble = () =>{
        const section=sectionRef.current;
        let deviceWidth=window.innerWidth;
        if(section){
            const bubble=document.createElement("div");
            const yDistance=Math.random() * 100;
            let xDistance;
            let range;
            const iconToInsert=document.createElement("i");
            const randomNmber=Math.floor(Math.random()*6);
            
            //insert the icon in the bubble
            iconToInsert.classList.add(...icon[randomNmber]);/*i had isssue adding the classsName "fas fa-building-columns" because of the space,so i had to use the other method to fic the issue  */
            bubble.appendChild(iconToInsert);

            bubble.classList.add("bubble");
            bubble.style.top= yDistance +"%";

            // it helps rendering the bubble without overflow on the x-axis
            xDistance=Math.random();
            range=(xDistance * deviceWidth);
            
            //insert the bubble in the section if the bubble does not exceed the device width; 75 is the bubble's width at his  biggest size
            if( ((range+76)<deviceWidth) && (range> 5) ){
                bubble.style.left= xDistance * 100 +"%"
                section.appendChild(bubble);
            }
            //
            setTimeout(()=>{
                bubble.remove();
            },3000);
        }
    };
    const myEducations=[
        {
            university:"University of Moncton",
            courses:["C++","Assembly language","Digital system"],
            program:"Bachelor in applied computer science",
            timePeriod:"2021 - 2022",
            awards:["chef","chefjeu"],
        },
        {
            university:"University of Ottawa",
            timePeriod:"2022 - 2025",
            program:"Honor Bachelor Computer science",
            courses:["Java Programming","Python Programming","Computer architecture","Discrete structures","Data communication and networks","Intro to formal language"],
            awards:["chef","chefjeu"]
        }
    ];

    const viewEducation= (education)=>{
        setCurrentEducation(education);
    };

    const setAnimation=()=>{
        setIsHovered(true);
    };
    const unsetAnimation=()=>{
        setIsHovered(false)
    };
    const setAnimation2=()=>{
        setIsHovered2(true);
    };
    const unsetAnimation2=()=>{
        setIsHovered2(false)
    };

    return (
        <>
        <section className="education" ref={sectionRef}>
            <h1>Education</h1>
            <div className="edu-container">
                <div className="university" id="uni">
                    <div className={isHovered ? "hovered":""} onClick={()=>viewEducation(myEducations[0])} onMouseOver={setAnimation} onMouseLeave={unsetAnimation}><span>{myEducations[0].university}</span></div>
                    <div className={isHovered2 ? "hovered":""} onClick={()=>viewEducation(myEducations[1])} onMouseOver={setAnimation2} onMouseLeave={unsetAnimation2}><span>{myEducations[1].university}</span></div>
                </div>
                {currentEducation &&
                    <div className="edu-details">
                            <h3>{currentEducation.university}</h3>
                            <b>2023-2024</b><br/>
                            <b>Relevat courses</b>
                            <ul>
                                {currentEducation.courses.map((course)=>(<li>{course}</li>))}
                            </ul>
                            <b>Distinctions</b>
                            <ul>
                                {currentEducation.awards.map((award)=>(<li>{award}</li>))}
                            </ul>
                    </div>}
                
            </div>
        </section>
        </>
    );
}

export default Education;