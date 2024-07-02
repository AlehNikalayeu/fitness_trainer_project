import React, {useState} from 'react';
import {Link as ScrollLink} from 'react-scroll';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    const closeBurgerMenu = () => {
        setIsBurgerOpen(false);
    };

    return (
        <nav className={`navbar ${isBurgerOpen ? 'open' : ''}`}>
            <div className={`burger-icon ${isBurgerOpen ? 'open' : ''}`} onClick={toggleBurgerMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={`nav-links ${isBurgerOpen ? 'open' : ''}`}>
                <li><ScrollLink to="home" smooth={true} duration={1000} onClick={closeBurgerMenu}>Home</ScrollLink></li>
                <li><ScrollLink to="about" smooth={true} duration={1000} onClick={closeBurgerMenu}>About</ScrollLink>
                </li>
                <li><ScrollLink to="services" smooth={true} duration={1000}
                                onClick={closeBurgerMenu}>Services</ScrollLink></li>
                <li><ScrollLink to="feedbacks" smooth={true} duration={1000}
                                onClick={closeBurgerMenu}>Feedbacks</ScrollLink></li>
                <li><ScrollLink to="gallery" smooth={true} duration={1000}
                                onClick={closeBurgerMenu}>Gallery</ScrollLink></li>
                <li><ScrollLink to="contacts" smooth={true} duration={1000}
                                onClick={closeBurgerMenu}>Contacts</ScrollLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;
