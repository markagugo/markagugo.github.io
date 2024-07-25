import './nav.css';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NavBar = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 1024);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
      }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }


    return(
        <div>
            <nav>
                <p className='logo'>MAC</p>
                <div className={`links ${menuOpen ? 'show' : ''}`}>
                    <Link to="/"><i className="fas fa-home"></i> Home</Link>
                    <Link to="/projects"><i className="fas fa-folder-open"></i> Projects</Link>
                    <Link to="/resume"><i className="fas fa-briefcase"></i> Resume</Link>
                </div>

                {isMobile && (
                    <div className={`menu ${menuOpen ? 'opened' : ''}`} onClick={toggleMenu}>
                    <div className="middle"></div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default NavBar;