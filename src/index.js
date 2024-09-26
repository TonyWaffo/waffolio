import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar'
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills.js'
import Experience from './Experience.js'
import Education from './Education.js'
import Contact from './Contact.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        
        <Education />
        <Contact />
        
    </>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
