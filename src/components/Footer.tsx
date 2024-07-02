import React from 'react';
import '../styles/Footer.css';
import {Link as ScrollLink} from 'react-scroll';
import {FaInstagram, FaTelegramPlane} from 'react-icons/fa';
import {FaSquareFacebook} from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <ScrollLink to="home" smooth={true} duration={1000}>Home</ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={1000}>About</ScrollLink>
                    <ScrollLink to="services" smooth={true} duration={1000}>Services</ScrollLink>
                    <ScrollLink to="feedbacks" smooth={true} duration={1000}>Feedbacks</ScrollLink>
                    <ScrollLink to="gallery" smooth={true} duration={1000}>Gallery</ScrollLink>
                    <ScrollLink to="contacts" smooth={true} duration={1000}>Contacts</ScrollLink>
                </div>
                <div className="footer-social">
                    <a href="https://www.facebook.com/oleg.nikollaev" target="_blank" rel="noopener noreferrer">
                        <FaSquareFacebook className="social-icon"/>Facebook
                    </a>
                    <a href="https://www.instagram.com/nikofit.la/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon"/>Instagram
                    </a>
                    <a href="https://t.me/nikofit_la" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane className="social-icon"/>Telegram
                    </a>
                </div>
                <p className="footer-rights">All rights reserved &copy; 2024</p>
            </div>
        </footer>
    );
}

export default Footer;
