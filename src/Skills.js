import "./Skills.css";
import React, {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { findAllByAltText } from "@testing-library/react";

import aboutPic from "./aboutPic.webp";



const Skills=()=>{

    const [popup, setPopup]=useState(false); //help setting up and remove the popup
    const [number,setNumber]=useState(0); //help storing the index of the text's object which should be displayed when we click on one container

    const swiperRef= useRef(null);
    const togglePopup=(index)=>{
        setPopup(!popup);
        setNumber(index);
    };//change the popup to true or false

    //change the style of the body's background by applying some styles with a new class

    useEffect(()=>{
        if(popup){
        document.body.classList.add("active-popup");
        swiperRef.current.swiper.autoplay.stop(); //pause the slider when there is the popup
    }else{
        document.body.classList.remove("active-popup");
        swiperRef.current.swiper.autoplay.start(); //resume the slider when the popup disappears
    }
    },[popup]);

    // the backticks are required to put a long text on multiple lines
    const mySkills=[{
        text:`Excellent in HTML5, with expertise in semantic markup, forms, tables, and linking. 
            I excel at creating accessible and user-friendly websites, and I am highly skilled in 
            incorporating HTML5 features like video, audio, and responsive design`,
        projects:[],
        picture:aboutPic,
    },
    {
        text:`Highly proficient in CSS, with a strong understanding of selectors, cascading, 
            and inheritance for consistent and visually appealing designs. My expertise includes 
            the box model, positioning, and responsive design, allowing me to build adaptable and responsive websites`,
        projects:[],
        picture:aboutPic,
    },
    {
        text:`
            Very proficient in JavaScript, with strong skills in DOM manipulation, asynchronous programming, 
            ES6+ features, and API integration. Experienced in debugging, testing, and performance optimization, 
            with a solid understanding of JavaScript security best practices.`,
        projects:["", "Waffolio"],
        picture:aboutPic,
    },{
        text:`Highly proficient in React, with extensive experience in component-based architecture and virtual 
            DOM manipulation. Expert in state management using hooks and adept at handling routing, API integration, 
            and asynchronous operations. Skilled in building responsive and interactive user interfaces using React 
            libraries and tools. This portfolio is an example of my work`,
            picture:aboutPic,
        },
        
    {
        text:` Highly skilled in Java, with strong expertise in object-oriented principles and concepts. Proficient 
            in debugging, testing, and optimizing Java code for performance `,
        projects:[],
        picture:aboutPic,
    },
    {
        text:`Highly skilled in C and C++, with deep expertise in object-oriented principles and concepts. 
        Experienced with arrays, strings, structs, unions, file handling, and advanced knowledge of pointers, dynamic memory allocation, and memory management.`,
        projects:[],
        picture:aboutPic,
    },
    {
        text:`Solid understanding of Python fundamentals, including variables, data types, functions, loops, conditionals, and operators`,
        picture:aboutPic,
    },
    {
        text:`Proficient in using PHP for web development. Capable of handling form data and manage database 
        integration using. One project is:`,
        projects:[],
        picture:aboutPic,
    },
    {
        text:`Highly skilled in SQL with a solid grasp of syntax, data manipulation, and data modeling. Experienced in writing complex queries, optimizing performance, and managing relational databases`,
        projects:[],
        picture:aboutPic,
    },
    {
        text:`Proficient in using Git for source code management, 
        including creating and managing repositories, branching, and merging code. Experienced in utilizing Git 
        commands for committing changes, resolving conflicts, and performing code reviews.`,
        picture:aboutPic,
    },
    {
        text:`Possess a deep understanding of various data structures, including queues, trees, and graphs, and 
        demonstrate the ability to solve complex algorithmic problems. Experienced in implementing a range of algorithms
         and data structures, such as`,
        projects:["Dijkstra< Prim-Jarnik algorithm", " BFS, DFS for shortest path", "in/post/pre -order traversal", "Heap, Hash table, AVL tree,...."],
        picture:aboutPic,
    },
    {
        text:`OPEN CV`,
        projects:[],
        picture:aboutPic,
    },
    {
        text:`PHP`,
        projects:[],
        picture:aboutPic,
    },
    {
        text:`Android studio`,
        projects:[],
        picture:aboutPic,
    },
    {
        text:`Scheme, Prolog, GO`,
        projects:[],
        picture:aboutPic,
    },
    ];
    return (
        <>
        <section className="skills">
            <h1>Skills</h1>

            <div className="skills-board">

            <Swiper ref={swiperRef}
                
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay:4000,
                    disableOnInteraction:false,
                }} 
                navigation={true}
                pagination={{clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[ Autoplay, Navigation, Pagination]}
                id="mySwiper"
            >
                {mySkills.map((skill,index)=>(
                    <SwiperSlide className="">
                    <div className="mini-board">
                        <div className="skill-img">
                            <img src={skill?.picture}></img>
                        </div>
                        <div className="skill-btn"><button onClick={()=>togglePopup(index)}>Explore</button></div>
                    </div>
                    
                    </SwiperSlide>
                ))}

            </Swiper>

            {popup && 
                    <div className="popup">
                        <i class="fa-sharp fa-solid fa-circle-xmark fa-2x" onClick={togglePopup}></i>
                        <p>{mySkills[number].text}</p>
                        {mySkills[number].projects &&
                            <ul>
                            {mySkills[number].projects.map((project)=>(
                                <li>{project}</li>
                            ))}
                            </ul>
                        }
                    </div>
                }


                {/*create a grid container for every object of the array*/}
               {/*} {mySkills.map((container,index)=>(
                    <div className="mini-board">
                        <div className=""><i className={container.class} style={{color:container.color}}></i></div>
                        <div className=""><button onClick={()=>togglePopup(index)}>Explore</button></div>
                    </div>
               ))}*/}
            </div>
            {/* the popup container displays when popup is true, which is triggered by the toggle */}
            {/*{popup && 
                <div className="popup">
                    <i class="fa-sharp fa-solid fa-circle-xmark fa-2x" onClick={togglePopup}></i>
                    <p>{mySkills[number].text}</p>
                </div>
            }*/}

        </section>
        </>
    );
}

export default Skills;