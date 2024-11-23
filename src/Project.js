import "./Project.css";
import { useState } from "react";

import eHotelPic from "./eHotel.png"
import brickBreakerPic from "./brickBreaker.png"
import videoSurveillancePic from "./videoSurveillance.png"
import novigradPic from "./novigrad.png"
import eHotelVid from "./eHotel.mp4"
import brickBreakerVid from "./brickBreaker.mp4"
import novigradVid from "./novigrad.mp4"
import videoSurveillanceVid from "./videoSurveillance.mp4"

import { isVisible } from "@testing-library/user-event/dist/utils";

const Project=()=>{
    const [currentIndex,setCurrentIndex]=useState(null);
    const [videoPlayer,setVideoPlayer]=useState({
        isVisible:false,
        videoFile:''
    });

    const showVideoPlayer=(mediaFile)=>{
        setVideoPlayer({isVisible:true,videoFile:mediaFile});
    }

    const closeVideoPlayer=()=>{
        setVideoPlayer({isVisible:false,videoFile:''});
    }

    const projectList=[
        {
            title:'E- Hotel',
            technologies:['ReactJs',"Javascript","NodeJs","PostgreSql"],
            videoFile:eHotelVid,
            imageFile:eHotelPic
        },
        {
            title:'Brick Breaker',
            technologies:['CSS',"SFML library","OOP"],
            videoFile:brickBreakerVid,
            imageFile:brickBreakerPic
        },
        {
            title:'Video Surveillance Person  Recognition',
            technologies:['Python',"Open CV"],
            videoFile:videoSurveillanceVid,
            imageFile:videoSurveillancePic
        },
        {
            title:'Novigrad Service',
            technologies:['Java',"Android studio"],
            videoFile:novigradVid,
            imageFile:novigradPic
        }
    ];

    const handleMouseOver=(index)=>{
        setCurrentIndex(index)
    }

    const handleMouseLeave=(index)=>{
        setCurrentIndex(null)
    }

    return (
        <>
        <section className="project">
            <h1>Projects</h1>
            <div className="project-list">
            {projectList.map((project,index)=>(
                    <div className="project-container">
                        <div className="project-img" onMouseOver={()=>handleMouseOver(index)} onMouseLeave={handleMouseLeave} onClick={()=>showVideoPlayer(project.videoFile)}>
                            {currentIndex==index && <i class="fa-solid fa-play"></i>}
                            <img src={project.imageFile} height="100%" width="100%"></img>
                        </div>
                        <div className="project-details">
                            <b>{project.title}</b>
                            <p>{project.technologies.map((technology,i)=> {return `${technology} ${project.technologies.length-1!= i? ', ':""}`})}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        {videoPlayer.isVisible && 
            <div className="video-background">
                <div className="video-container">
                    <div>
                        <i class="fa-regular fa-rectangle-xmark" onClick={closeVideoPlayer}></i>
                    </div>
                    <video width="100%" height="100%" controls>
                        <source src={videoPlayer?.videoFile} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        }
        </>
    );
}

export default Project;