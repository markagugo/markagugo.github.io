import '@fortawesome/fontawesome-free/css/all.min.css';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <p>UNTIL THE END 💪🏾</p>
                </div>
                <div className='footer-right'>
                    <a href="https://wa.me/+2348109682599" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-whatsapp icon'></i>
                    </a>
                    <a href="https://t.me/markagugo" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-telegram icon'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/markagugo" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-linkedin icon'></i>
                    </a>
                    <a href="https://github.com/markagugo" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-github icon'></i>
                    </a>
                    <a href="markagugo@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className='fas fa-envelope icon'></i>
                    </a>
                </div>
            </div>
        </footer>


    )
}

export default Footer;