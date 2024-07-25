import './home.css';
import pg from '../assets/svg/space.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {



    return (
        <div>
            <div className="about">
                <div className="left-side">
                    <h1 className="name">Hello There!</h1>
                    <p className="intro">Hi, I'm <b>Mark Agugo</b>, a Computer Engineer from Nigeria with a passion for what I do! 
                        My programming journey started with CLI-based Java projects, evolved into Android development, 
                        and now focuses on building websites, Android apps, and desktop applications. In my spare time, I engage in competitive programming challenges to enhance my problem-solving skills and algorithmic thinking. 
                        If you have an idea and believe I can contribute, feel free to reach out!</p>
                </div>
                <div className="right-side">
                    <img src={pg}/>
                </div>
            </div>

            <div className='tools'>
                <h1>Tools And Languages</h1>
                <div className='tools_box'>
                    <div className='tool_card'>
                    <i className="fab fa-html5 icon"></i>
                    <div className='title'>HTML</div>
                    </div>
                    <div className='tool_card'>
                    <i className="fab fa-css3-alt icon"></i>
                    <div className='title'>CSS</div>
                    </div>
                    <div className='tool_card'>
                    <i className="fab fa-js icon"></i> 
                    <div className='title'>JavaScript</div>
                    </div>
                    <div className='tool_card'>
                    <i className="fab fa-java icon"></i>
                    <div className='title'>Java</div>
                    </div>
                    <div className='tool_card'>
                    <i className="fab fa-python icon"></i>
                    <div className='title'>Python</div>
                    </div>
                    <div className='tool_card'>
                    <i className="fab fa-android icon"></i> 
                    <div className='title'>Android Studio</div>
                    </div>
                    <div className='tool_card'>
                    <i className="fab fa-react icon"></i>
                    <div className='title'>React</div>
                    </div>
                    <div className='tool_card'>
                    <i className="fab fa-node icon"></i>
                    <div className='title'>Next.js</div>
                    </div>
                    <div className='tool_card'>
                    <i className="fas fa-database icon"></i>
                    <div className='title'>MySQL</div>
                    </div>
                    <div className='tool_card'>
                    <i className="fas fa-database icon"></i>
                    <div className='title'>NoSQL</div>
                    </div>
                    <div className='tool_card'>
                    <i className="fab fa-docker icon"></i> 
                    <div className='title'>Docker</div>
                    </div>
                </div>
            </div>

            <div className='contact'>
                <h1>Connect With Me</h1>
                <p>Feel free to reach out to me on any of the following platforms.</p>
                <div className='contact_list'>
                    <a href="https://wa.me/+2348109682599" target="_blank" rel="noopener noreferrer">
                        <div className='icon_container'>
                            <i className='fab fa-whatsapp icon'></i>
                        </div>
                    </a>
                    <a href="https://t.me/markagugo" target="_blank" rel="noopener noreferrer">
                        <div className='icon_container'>
                            <i className='fab fa-telegram icon'></i>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/markagugo" target="_blank" rel="noopener noreferrer">
                        <div className='icon_container'>
                            <i className='fab fa-linkedin icon'></i>
                        </div>
                    </a>
                    <a href="https://github.com/markagugo" target="_blank" rel="noopener noreferrer">
                        <div className='icon_container'>
                            <i className='fab fa-github icon'></i>
                        </div>
                    </a>
                    <a href="mailto:markagugo@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className='icon_container'>
                            <i className='fas fa-envelope icon'></i>
                        </div>
                    </a>
                </div>
            </div>

            


        </div>
    )
};

export default Home;