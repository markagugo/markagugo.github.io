import React from "react";
import NavBar from "../../NavBar/nav";
import prj1 from '../../assets/images/xudo.png';
import prj2 from '../../assets/images/gradepro.png';
import prj3 from '../../assets/images/checkers.png';
import './projects.css';
import Footer from "../../Footer/footer";

const Project = () => {
    return(
        <div>
            <NavBar/>
            
            <div className="projects">
                <h1>Here Are Few Projects I Worked On Recently</h1>
                <div className="projects_box">
                    <div className="project_card">
                        <img src={prj1} alt="Xudo"/>
                        <h2>Xudo</h2>
                        <p>
                        I developed a movie streaming and download application using Java on Android Studio, 
                        alongside a web version that serves over 100 users. In this project, 
                        I utilized web scraping techniques to collect movie data and designed a machine learning model to recommend movies similar to a user's selection. 
                        Additionally, I created a command-line application that automatically scrapes the web for new movies and relevant information, ensuring the database is continuously updated.
                        </p>
                        <a href="https://xudo.me/" target="_blank" rel="noopener noreferrer" className="view">Check Out</a>
                    </div>

                    <div className="project_card">
                        <img src={prj2} alt="GradePro"/>
                        <h2>GradePro</h2>
                        <p>
                        I identified the challenges associated with the manual GPA calculation process in Nigerian universities and created a solution to streamline it. 
                        I designed and developed a desktop application using PyQt5, which offers an efficient and user-friendly interface for calculating GPAs for a large number of students. 
                        This application significantly improves the accuracy and speed of GPA computations, addressing the inefficiencies of the traditional manual process.
                        </p>
                        <a href="https://gradeproapp.web.app/" target="_blank" rel="noopener noreferrer" className="view">Check Out</a>
                    </div>

                    <div className="project_card">
                        <img src={prj3} alt="Checkers"/>
                        <h2>Checkers</h2>
                        <p>
                        I developed a human versus bot checkers game using Java on Android Studio. For the bot, I implemented the Minimax algorithm, 
                        which enhances its decision-making capabilities, allowing for challenging and strategic gameplay. 
                        This implementation ensures that the bot plays optimally, providing an engaging and competitive experience for players.
                        </p>
                        <a href="https://youtu.be/Kv0xTdJsJKw" target="_blank" rel="noopener noreferrer" className="view">Check Out</a>
                    </div>
                </div>
                
            </div>

            <Footer/>
        
            
        </div>
    );
}

export default Project;
