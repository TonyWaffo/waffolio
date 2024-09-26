import "./Education.css";
import { useRef, useState,useEffect} from "react";
import {motion} from "framer-motion"
const Education=()=>{
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
    const uMcourses=["C++","Assembly language","Digital system"];
    const uOprjoects=["Search and replace in text with NASM","Banking system queue simulation with C++","Sudoku game resloution algorithm<"];
    const uOcourses=["Java Programming","Python Programming","Computer architecture","Discrete structures","Data communication and networks","Intro to formal language"];
    const uMprjoects=["C++","Assembly language","Digital system","C++","Assembly language","Digital system"];

    const switchCourse= (name)=>{
        const myCourses=document.querySelector(".uni-course");
        
        if(name=="uMcourses"){
            myCourses.style.left=-100+"%";
        }
        if((name=="uOcourses")){
            myCourses.style.left=-200+"%";
        }
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
            {/*<div class="edu-icon">
                <div><i class="fa-solid fa-building-columns"></i></div>
                <div><i class="fa-solid fa-book"></i></div>
                <div><i class="fa-solid fa-computer-mouse"></i></div>
                <div><i class="fa-solid fa-pen"></i></div>
                <div><i class="fa-solid fa-graduation-cap"></i></div>
               <div><i class="fa-solid fa-computer"></i></div>
                </div>*/}
            <div className="edu-container">
                <div className="university" id="uni">
                    <div className={isHovered ? "hovered":""} onClick={()=>switchCourse("uMcourses")} onMouseOver={setAnimation} onMouseLeave={unsetAnimation}><span>Universite de Moncton</span></div>
                    <div className={isHovered2 ? "hovered":""} onClick={()=>switchCourse("uOcourses")} onMouseOver={setAnimation2} onMouseLeave={unsetAnimation2}><span>University of Ottawa</span></div>
                </div>
                <div className="course">

                {/*<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
                    <clipPath id="clipPath">
                        <path d="M1200 0L0 0 598.97 114.72 1200 0z" />
                    </clipPath>
                    </svg>*/}

                    <div className="uni-course">
                        <div>
                            <p> Click on the left side to explore my relevant courses</p>
                        </div>
                        <div id="uMcourses">
                            <ul>
                                {uMcourses.map((subject)=>(<li>{subject}</li>))}
                            </ul>
                        </div>
                        <div id="uOcourses">
                            <ul>
                                {uOcourses.map((subject)=>(<li>{subject}</li>))}
                            </ul>
                        </div>
                    </div>
            
                </div>
                
            </div>
        </section>
        </>
    );
}

export default Education;