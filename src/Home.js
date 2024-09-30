import {TypeAnimation} from "react-type-animation";
import "./Home.css";
import homePic from "./homePic.webp";
import resume from "./Resume.pdf";
import {motion} from "framer-motion";
import {Link} from "react-scroll";



const Home=()=>{


    const myName="It's me, Tony Waffo";

    return (
        <>
        <motion.section className="home">
            <div className="home-left">
                <h1>
                {myName.split("").map((letter,index)=>(
                    <motion.spam key={index } initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2, delay: index*0.1}}>{letter}</motion.spam>
                ))}<br/>
                </h1>
                <span className="typeWriter">I am a
                    <TypeAnimation sequence={[' developer',2000,' thinker',2000,' leader',2000,' futurist',3000]}  //the sequence of words followed by the waiting time
                        speed={20}
                        deletionSpeed={20}
                        cursor={true}
                        repeat={Infinity}
                        wrapper="span"
                    />
                </span><br/><br/>
                
                <span className="intro" style={{fontSize:20+"px"}}>Welcome to my portfolio website! I'm a computer science student who blends a love for sports with a keen interest in technology. This portfolio showcases my projects and skills.
                     I hope you will enjoy exploring my work and get a better sense of my background in computer science.
                </span><br/>
                <Link to="contact" spy={true} smooth={true} offset={-90} duration={500} delay={0}><button>Hire me</button></Link>
                <a href={resume} download="Tony Waffo Resume"><button>My resume</button></a>
                <div className="media">
                    <a href="https://github.com/TonyWaffo" className="fa-brands fa-github fa-bounce fa-5x"></a>
                    <a href="https://www.linkedin.com/in/tony-waffo-279571210/" className="fa-brands fa-linkedin fa-bounce fa-5x"></a>
                </div>
            </div>
            <div className="home-right">
                <img src={homePic} alt="center"></img>
            </div>
        </motion.section>
        </>
    );
}

export default Home;