import React, { useEffect, useContext } from "react";
import Slider from "react-slick";
import { Link as ScrollLink } from 'react-scroll';
import "../styles/Services.css";
import { AppContext } from '../context/AppContext';

const Services: React.FC = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('Services must be used within an AppProvider');
    }

    const { state, dispatch } = context;

    useEffect(() => {
        dispatch({
            type: 'SET_SERVICES',
            payload: [
                {
                    title: "Single Sessions",
                    services: [
                        {
                            title: "One-time Session",
                            description: "One personal training session tailored to your goals and needs.",
                            buttonText: "90$",
                        },
                        {
                            title: "Package of 5 Sessions",
                            description: "A series of 5 personal training sessions aimed at achieving your fitness goals.",
                            buttonText: "400$",
                        },
                        {
                            title: "Package of 10 Sessions",
                            description: "A series of 10 personal training sessions for in-depth physical fitness and health development.",
                            buttonText: "700$",
                        },
                    ],
                },
                {
                    title: "Split Sessions",
                    services: [
                        {
                            title: "One-time Split Session",
                            description: "One training session divided between two participants, considering the individual needs of each.",
                            buttonText: "120$",
                        },
                        {
                            title: "Package of 5 Split Sessions",
                            description: "A series of 5 training sessions organized for two people, with the flexibility to tailor to the personal goals of both participants.",
                            buttonText: "550$",
                        },
                        {
                            title: "Package of 10 Split Sessions",
                            description: "Ten training sessions conducted for two people, designed to enhance physical fitness and motivation.",
                            buttonText: "1000$",
                        },
                    ],
                },
                {
                    title: "Additional Services",
                    services: [
                        {
                            title: "Workout Program",
                            description: "Development of an individualized workout program tailored to your fitness goals and current condition.",
                            buttonText: "100$",
                        },
                        {
                            title: "Nutrition Plan",
                            description: "Creation of a personalized nutrition plan that aligns with your training goals and dietary needs.",
                            buttonText: "100$",
                        },
                        {
                            title: "Workout & Nutrition Plan",
                            description: "A comprehensive approach that includes the development of an individualized workout program and a personalized nutrition plan.",
                            buttonText: "150$",
                        },
                    ],
                },
            ],
        });
    }, [dispatch]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
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
        <div id="services" className="services-container">
            <div className="services-photo">
                <img src="/images/background/oleggym_1.55.1.JPG" alt="services-background"/>
            </div>

            <div className="services-overlay">
                <h2 className="services-header">Our Services</h2>
                <Slider {...sliderSettings} className="services-slider">
                    {state.services.flatMap((section, index) => (
                        section.services.map((service, idx) => (
                            <div key={`${index}-${idx}`} className="service-card-wrapper">
                                <div className="service-card">
                                    <h4 className="service-card-title">{service.title}</h4>
                                    <p className="service-card-description">{service.description}</p>
                                    <div className="service-card-footer">
                                        <ScrollLink
                                            to="contacts"
                                            smooth={true}
                                            duration={2000}
                                            className="service-card-button"
                                        >
                                            {service.buttonText}
                                        </ScrollLink>
                                    </div>
                                </div>
                            </div>
                        ))
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Services;
