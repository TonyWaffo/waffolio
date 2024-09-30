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
import htmlCssJsPic from "./htmlCssJs.png"
import pythonPic from "./python.png"
import aiPic from "./ai.png"
import androidPic from "./android.png"
import cppPic from "./cpp.png"
import cryptoPic from "./cryptography.png"
import goPic from "./go.png"
import sqlPic from "./sql.png"
import reactPic from "./react.png"
import prologPic from "./prolog.png"
import phpPic from "./php.png"
import javaPic from "./java.png"
import flutterPic from "./flutter.png"



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

    const mySkills = [
        {
            title: "Web Development: HTML, CSS, JavaScript",
            description: `Excellent in HTML5, with expertise in semantic markup, forms, tables, and linking. 
                I excel at creating accessible and user-friendly websites, and I am highly skilled in 
                incorporating HTML5 features like video, audio, and responsive design.`,
            technologies: ["HTML5", "CSS3", "JavaScript", "Node.js, Ajax", "Bootstrap, Jquery",],
            picture: htmlCssJsPic,
        },
        {
            title: "React.js Development",
            description: `Proficient in building interactive and dynamic web applications using React.js. Experience with hooks, state management (Redux), 
                and component-based architecture. Developed full-stack applications and integrated APIs seamlessly.`,
            technologies: ["React.js", "Redux", "JavaScript", "Hooks", "API Integration"],
            picture: reactPic,  // Can use another image if available
        },
        {
            title: "Python Programming",
            description: `Highly proficient in Python programming, with experience in both scripting and object-oriented programming. 
                I've used Python extensively for web development, automation, and AI-related projects. Experienced in using frameworks 
                like OpenCV for computer vision applications.`,
            technologies: ["Python", "Flask", "OpenCV", "NumPy", "Pandas"],
            picture: pythonPic,
        },
        {
            title: "Artificial Intelligence & Machine Learning",
            description: `Experienced in AI and machine learning applications. I have applied AI algorithms and computer vision techniques 
                for tasks like person re-identification in surveillance footage using OpenCV, as well as developed Python scripts to 
                process and analyze large datasets.`,
            technologies: ["Python", "OpenCV", "AI", "Machine Learning"],
            picture: aiPic,
        },
        {
            title: "Java Programming",
            description: `Experienced in Java development, especially in object-oriented programming and building Android applications. Developed several 
                projects using Java, including a mobile app with Android Studio and back-end systems.`,
            technologies: ["Java", "Android Studio", "OOP"],
            picture: javaPic,  // Use another relevant image if available
        },
        {
            title: "PHP & Laravel Development",
            description: `Skilled in PHP for back-end development with a strong grasp of the Laravel framework. Experience in building full-stack applications, 
                integrating databases like MySQL, and implementing secure and scalable APIs.`,
            technologies: ["PHP", "Laravel", "MySQL", "API Development"],
            picture: phpPic,  // Can use another image if available
        },
        {
            title: "SQL & Databases",
            description: `Strong knowledge of SQL for database management and query optimization. Experienced in working with relational databases like MySQL and PostgreSQL, 
                designing efficient schemas, and writing complex queries for data retrieval, updates, and optimizations.`,
            technologies: ["SQL", "MySQL", "PostgreSQL", "Database Design"],
            picture: sqlPic,  // Can use another relevant image if available
        },
        {
            title: "Mobile Development: Android",
            description: `Skilled in mobile app development with Android Studio. Developed and deployed an Android application using Java 
                and utilized UML for system design. Experience with managing mobile app lifecycle from design to deployment.`,
            technologies: ["Java", "Android Studio", "UML"],
            picture: androidPic,
        },
        {
            title: "C++ Programming & OOP",
            description: `Proficient in C++ for developing software with object-oriented programming principles. Successfully created 
                various projects including a Brick Breaker game, showcasing my strong understanding of C++ and OOP concepts.`,
            technologies: ["C++", "OOP", "Game Development"],
            picture: cppPic,
        },
        {
            title: "Cryptography & Security",
            description: `Strong understanding of cryptography principles used in securing communications and data. I have good knowledge of encryption techniques 
            and security protocols essential in maintaining the confidentiality, integrity, and authenticity of information.`,
            technologies: ["Cryptography", "Encryption", "Security"],
            picture: cryptoPic,
        },
        {
            title: "Flutter Mobile development",
            description: `Currently learning Dart and the Flutter framework to build a functional app by 2025, combining my problem-solving skills with Flutter's capabilities for mobile development.`,
            technologies: ["Dart", "Mobile development"],
            picture: flutterPic,  // Can use another relevant image if available
        },
        {
            title: "Go Programming",
            description: `Proficient in Go (Golang) for building efficient and scalable backend services. `,
            technologies: ["Go", "Microservices"],
            picture: goPic,
        },
        {
            title: "Prolog & Logical Programming",
            description: `Good knowledge of Prolog, with strong understanding of logical programming paradigms. Experienced in applying Prolog for solving problems 
                involving complex logic, recursion, and knowledge representation.`,
            technologies: ["Prolog", "Logical Programming", "AI"],
            picture: prologPic,  // Can use another relevant image if available
        }
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
                        <h3>{mySkills[number].title}</h3>
                        <p>{mySkills[number].description}</p>
                        {mySkills[number].technologies &&
                            <ul>
                            {mySkills[number].technologies.map((technology)=>(
                                <li>{technology}</li>
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