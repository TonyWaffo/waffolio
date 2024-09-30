import "./Navbar.css";
import {useState} from 'react';
import {Link} from "react-scroll"; /*for bookmark and smooth scrolling*/

const Navbar=()=>{

    const [active, setActive]=useState("nav-right");
    const navToggle=()=>{
        if(window.innerWidth<850){ //this side navbar shows when max-width=600px
            active=="nav-right" ? setActive("nav-right-hide"):setActive("nav-right");
        }
    }
    return (
        <>
        <section className="nav">
            <div className="nav-left">Waffolio</div>
            <div className={active}>
                <ul>
                    <li><Link to="home" spy={true} smooth={true} offset={0} duration={500} delay={0} onClick={navToggle}>Home</Link></li>
                    <li><Link to="about" spy={true} smooth={true} offset={-90} duration={500} delay={0} onClick={navToggle}>About</Link></li>
                    <li><Link to="skills" spy={true} smooth={true} offset={-90} duration={500} delay={0} onClick={navToggle}>Skills</Link></li>
                    <li><Link to="experience" spy={true} smooth={true} offset={-90} duration={500} delay={0} onClick={navToggle}>Experience</Link></li>
                    <li><Link to="project" spy={true} smooth={true} offset={-90} duration={500} delay={0} onClick={navToggle}>Project</Link></li>
                    <li><Link to="education" spy={true} smooth={true} offset={-90} duration={500} delay={0} onClick={navToggle}>Education</Link></li>
                    <li><Link to="contact" spy={true} smooth={true} offset={-90} duration={500} delay={0} onClick={navToggle}>Contact me</Link></li>
                </ul>
            </div>
            <div className="icon">
                <i onClick={navToggle} style={{color:"rgb(1, 9, 33)"}} className={active=="nav-right" ? "fa-solid fa-bars":"fa-sharp fa-solid fa-square-xmark"}></i>
            </div>
        </section>
        </>
    );
}

export default Navbar;