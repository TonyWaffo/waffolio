import React,{useRef,useState} from "react";
import emailjs from "emailjs-com";
import "./Contact.css";


const Contact=()=>{
    const form=useRef();
    const [submissionMessage, setSubmissionMessage] = useState(null); // State to store the message
    const sendEmail=(e)=>{
        e.preventDefault(); //prevent from the default behavior of the browser

        emailjs.sendForm('service_sqmr98o', 'template_4uz1vwm', form.current, 'r4kirrNTrKgdgdnDs')
        .then((result)=>{
            console.log(result.text);
            // Set the success message in the state
            setSubmissionMessage(
                "Thank you for reaching out to us! This is to confirm that your message has been successfully received. Tony is actively reviewing it and will respond to you as soon as possible!"
            );

            setTimeout(()=>{
                setSubmissionMessage(null);
            },10000);
        })

        .catch((error)=>{
            console.log(error.text);
            // Set the error message in the state
            setSubmissionMessage(
                error.text
            );
        });
        e.target.reset();//reset the form
    };

    return (
        <>
        <section className="contact">
            <h2>Let's work together</h2>
            <h1>Contact me</h1>
            <div className="contact-container">
                <div className="media-container">
                    <div>
                        <i class="fa-regular fa-envelope fa-2x"></i>
                        <h3>Email</h3>
                        <h3>waffotony@gmail.com</h3>
                        <a href="mailto:waffotony@gmail.com" target="_blank">Send a message</a>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone fa-2x"></i>
                        <h3>Phone</h3>
                        <h3>Tony Waffo</h3>
                        <a href="tel:+15068898513" target>Call</a>
                    </div>
                    <div>
                        <i class="fa-brands fa-linkedin-in fa-2x"></i>
                        <h3>Linkedin</h3>
                        <h3>Tony Waffo</h3>
                        <a href="https://www.linkedin.com/in/tony-waffo-279571210/" target="_blank">Send a message</a>
                    </div>
                </div>
                <div className="message-container">
                    <form  ref={form} onSubmit={sendEmail} className="">
                        <label></label>
                        <input type="name" name="name" placeholder="Your name" required/>
                        <input type="email" name="email" placeholder="Your email"/>
                        <textarea  placeholder="Your message" name="message" cols="50" rows="10"/>
                        <button type="submit" className="">Send message</button>
                        {submissionMessage && <p>{submissionMessage}</p>}
                    </form>

                </div>
            </div>
        </section>
        </>
    );
}

export default Contact;