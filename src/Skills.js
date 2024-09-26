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
        class:"fa-brands fa-html5 fa-4x",
        text:`Excellent in HTML5, with expertise in semantic markup, forms, tables, and linking. 
            I excel at creating accessible and user-friendly websites, and I am highly skilled in 
            incorporating HTML5 features like video, audio, and responsive design`,
        projects:[],
        color:"#E34F26",
    },
    {
        class:"fa-brands fa-css3 fa-4x",
        text:`Highly proficient in CSS, with a strong understanding of selectors, cascading, 
            and inheritance for consistent and visually appealing designs. My expertise includes 
            the box model, positioning, and responsive design, allowing me to build adaptable and responsive websites`,
        projects:[],
        color:"blue",
    },
    {
        class:"fa-brands fa-js fa-4x",
        text:`
            Very proficient in JavaScript, with strong skills in DOM manipulation, asynchronous programming, 
            ES6+ features, and API integration. Experienced in debugging, testing, and performance optimization, 
            with a solid understanding of JavaScript security best practices.`,
        color:"#F7DF1E",
        projects:["", "Waffolio"],
    },{
        class:"fa-brands fa-react fa-4x",
        text:`Highly proficient in React, with extensive experience in component-based architecture and virtual 
            DOM manipulation. Expert in state management using hooks and adept at handling routing, API integration, 
            and asynchronous operations. Skilled in building responsive and interactive user interfaces using React 
            libraries and tools. This portfolio is an example of my work`,
        color:"#61DAFB",
        },
    {
        class:"fa-brands fa-java fa-4x",
        text:` Highly skilled in Java, with strong expertise in object-oriented principles and concepts. Proficient 
            in debugging, testing, and optimizing Java code for performance `,
        projects:[],
        color:"#007396",
    },
    {
        class:"fa-brands fa-cuttlefish fa-4x",
        text:`Highly skilled in C and C++, with deep expertise in object-oriented principles and concepts. 
        Experienced with arrays, strings, structs, unions, file handling, and advanced knowledge of pointers, dynamic memory allocation, and memory management.`,
        projects:[],
        color:"#A8B9CC",
    },
    {
        class:"fa-brands fa-python fa-4x",
        text:`Solid understanding of Python fundamentals, including variables, data types, functions, loops, conditionals, and operators`,
        color:"#3776AB",
    },
    {
        class:"fa-brands fa-php fa-4x",
        text:`Proficient in using PHP for web development. Capable of handling form data and manage database 
        integration using. One project is:`,
        projects:[],
        color:"#777BB4",
    },
    {
        class:"fa-solid fa-database fa-4x",
        text:`Highly skilled in SQL with a solid grasp of syntax, data manipulation, and data modeling. Experienced in writing complex queries, optimizing performance, and managing relational databases`,
        projects:[],
        color:"#336791",
    },
    {
        class:"fa-brands fa-git fa-4x",
        text:`Proficient in using Git for source code management, 
        including creating and managing repositories, branching, and merging code. Experienced in utilizing Git 
        commands for committing changes, resolving conflicts, and performing code reviews.`,
        color:"#F05032",
    },
    {
        class:"fa-solid fa-diagram-project fa-4x",
        text:`Possess a deep understanding of various data structures, including queues, trees, and graphs, and 
        demonstrate the ability to solve complex algorithmic problems. Experienced in implementing a range of algorithms
         and data structures, such as`,
        projects:["Dijkstra< Prim-Jarnik algorithm", " BFS, DFS for shortest path", "in/post/pre -order traversal", "Heap, Hash table, AVL tree,...."],
        color:"black",
    },
    {
        class:"fa-solid fa-diagram-project fa-4x",
        text:`OPEN CV`,
        projects:[],
        color:"black",
    },
    {
        class:"fa-solid fa-diagram-project fa-4x",
        text:`PHP`,
        projects:[],
        color:"black",
    },
    {
        class:"fa-solid fa-diagram-project fa-4x",
        text:`Android studio`,
        projects:[],
        color:"black",
    },
    {
        class:"fa-solid fa-diagram-project fa-4x",
        text:`Scheme, Prolog, GO`,
        projects:[],
        color:"black",
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
                {mySkills.map((container,index)=>(
                    <SwiperSlide className="">
                    <div className="mini-board">
                        <div className=""><i className={container.class} style={{color:container.color}}></i></div>
                        <div className=""><button onClick={()=>togglePopup(index)}>Explore</button></div>
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