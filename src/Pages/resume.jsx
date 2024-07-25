import React from "react";
import NavBar from "../NavBar/nav";
import Footer from "../Footer/footer";
import resume from '../assets/images/resume.png';
import resume_file from '../assets/pdf/mark_agugo_resume.pdf'
import './resume.css'; 

const Resume = () => {
    return (
        
        <div>
           
           <NavBar/>

            <div  className="resume-page">
                <div className="resume-container">
                    <a href={resume_file} download="mark_agugo_resume.pdf" className="download-button">
                        Download Resume
                    </a>
                    <div className="resume-content">
                        <img src={resume} alt="Resume" className="resume-image"/>
                    </div>
                </div>

              
                
            </div>
            <Footer/>
           
        </div>
    )
}

export default Resume;
