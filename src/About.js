import "./About.css";
import aboutPic from "./aboutPic.webp";
import { useEffect } from "react";
import {motion} from "framer-motion"; /* for effect on the display */
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; /* for triggering event when in view */

const About=()=>{

    const{ref,inView}=useInView({threshold:0.05}); // ref equals to true when the specific section is in view 
    // the threshold is optional and define that a certain percentage of the container should be visble to set inView to true

    const animation= useAnimation(); //we define the animation that will be trigger
    const animation2= useAnimation();

    useEffect(()=>{
        if(inView){ //when in view or not, a specific animation will start
            animation.start({
                x:0,
                transition:{duration:1.2},
            });
            animation2.start({
                x:0,
                transition:{duration:1.2},
            });
        }else{
            animation.start({
                x:-300,
                transition:{duration:0.2},
            });
            animation2.start({
                x:300,
                transition:{duration:0.2},
            });
        }
    },[inView]);

    // document.getElementById("slide").src={baskPic};

    return (
        <>
        <section className="about" >
            <h1>About me</h1>
            <div ref={ref} className="about-container">
                <motion.div animate={animation} className="about-img">
                    <div className="about-inner-img">
                    {/*<video height="100%" width="100%" autoPlay loop>
                        <source src={tezt} type="video/mp4" style={{height:"100%" , width:"100%" }}/>
                    </video>-->*/}
                    <img id="slide" src={aboutPic} height="100%" width="100%"></img>
                    </div>
                </motion.div> 
                <motion.div ref={ref} animate={animation2} className="about-content">
                    <h1>About me</h1>
                    <p>
                        I'm Tony, a fourth-year Computer Science student with a passion for coding, gym and basketball. 
                        I embrace new ideas and perspectives, valuing diversity and inclusivity. As an outgoing individual, 
                        I enjoy connecting with people and collaborating on projects. 
                        Balancing academics, basketball and entrepreneurship, I seek personal and professional growth through 
                        challenges. Let's connect if you share my love for technology, the game, and value human connections.
                    </p>
                </motion.div>   
            </div>
        </section>
        
        </>
    );
}

export default About;