import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/Home.css';
import { Link as ScrollLink } from 'react-scroll';

const Home: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id="home" className="home-container">
            <div className="home-photo">
                <img src="/images/background/oleggym_1.45.1.jpg" alt="home-photo"/>
            </div>

            <div className="home-header">
                <h2 className="home-description" data-aos="fade-up">
                    CREATE YOURSELF <span className="second-part">EVERY DAY</span>
                </h2>
                <ScrollLink
                    to="services"
                    smooth={true}
                    duration={2000}
                    className="home-button"
                    data-aos="fade-up"
                    data-aos-delay="700"
                >
                    Get Started!
                </ScrollLink>
            </div>
        </div>
    );
}

export default Home;
