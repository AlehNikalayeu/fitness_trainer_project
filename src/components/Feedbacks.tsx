import React, {useEffect, useContext} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Feedbacks.css';
import {AppContext} from '../context/AppContext';

const Feedbacks: React.FC = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('Feedbacks must be used within an AppProvider');
    }

    const {state, dispatch} = context;

    useEffect(() => {
        dispatch({
            type: 'SET_FEEDBACKS',
            payload: [
                {
                    icon: "/images/feedbacks/IMG_6406.jpg",
                    text: "Oleg is an amazing trainer! He helped me achieve my fitness goals and stay motivated.",
                    name: "Sergej Nalegach",
                },
                {
                    icon: "/images/feedbacks/IMG_6408.jpg",
                    text: "The training sessions with Oleg are always challenging and rewarding. Highly recommend!",
                    name: "Viktoryia Babayeva",
                },
                {
                    icon: "/images/feedbacks/IMG_2002.jpg",
                    text: "With Oleg's guidance, I've improved my performance and feel healthier than ever.",
                    name: "Kanstantin Sheleheda",
                },
                {
                    icon: "/images/feedbacks/0B4A6612.jpg",
                    text: "Oleg's sessions are effective and engaging, helping me achieve my fitness goals and stay healthy.",
                    name: "Yuliana Utkina",
                },
            ],
        });
    }, [dispatch]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div id="feedbacks" className="feedbacks-container">
            <div className="feedbacks-photo">
                <img src="/images/background/IMG_6420.JPG" alt="feedbacks-background"/>
            </div>

            <div className="feedbacks-overlay">
                <h2 className="feedbacks-header">What Our Clients Say</h2>
                <Slider {...settings} className="feedbacks-slider">
                    {state.feedbacks.map((feedback, index) => (
                        <div key={index} className="feedback-card-wrapper">
                            <div className="feedback-card">
                                <img src={feedback.icon} alt={feedback.name} className="feedback-image"/>
                                <p className="feedback-text">"{feedback.text}"</p>
                                <p className="feedback-name">- {feedback.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Feedbacks;
