import React, { createContext, useReducer, ReactNode, useState, useCallback } from 'react';
import axios from 'axios';
import { AppState, AppContextProps, GalleryItem } from '../types';

const initialGallery: GalleryItem[] = [
    {
        image: "/images/gallery/IMG_6410.jpg",
        text: "Oleg's training program has transformed my life.",
        name: "Aleksei Zubovich",
        description: "Training with Oleg has been transformative. His expertise in building lean muscle mass is exceptional. Over the past six months, I've seen impressive gains and feel more energized than ever. Oleg’s personalized approach and commitment to his clients’ progress make him an outstanding fitness coach."
    },
    {
        image: "/images/gallery/IMG_6411.jpg",
        text: "Oleg helped me build muscle and improve my overall fitness.",
        name: "Andre Rhoden",
        description: "Oleg is the best fitness trainer I've ever worked with. In just five months, I’ve gained noticeable lean muscle mass and significantly improved my strength. His tailored workout routines and nutritional advice are top-notch. Oleg’s professionalism and knowledge are unparalleled. Highly recommended!"
    },
    {
        image: "/images/gallery/IMG_6412.jpg",
        text: "Thanks to Oleg, I've achieved my dream physique!",
        name: "Irina Melnik",
        description: "Oleg is an incredible fitness coach! Thanks to his guidance, I’ve not only lost 40 pounds but also feel stronger and more confident. He creates a supportive and positive environment that makes working out fun and rewarding. Oleg truly cares about his clients' success and it shows in every session."
    },
    {
        image: "/images/gallery/IMG_6413.jpg",
        text: "I lost 20 pounds and feel better than ever thanks to Oleg's guidance!",
        name: "Yulia Abramova",
        description: "Training with Oleg has been a life-changing experience. His customized workout plans and motivational approach helped me lose 20 pounds in just three months! His dedication and expertise make every session effective and enjoyable. I can't thank Oleg enough for helping me reach my fitness goals!"
    },
    {
        image: "/images/gallery/IMG_7243.jpg",
        text: "Oleg's training transformed my body and boosted my confidence!",
        name: "Aleksandr Samoylik",
        description: "Oleg's training has been life-changing! I've lost a significant amount of weight and feel healthier and more confident than ever. His supportive and motivating approach makes every session enjoyable and effective. Oleg truly cares about his clients' success, and it shows in every workout."
    },
    {
        image: "/images/gallery/IMG_7244.jpg",
        text: "Transformed my health with Oleg's guidance!",
        name: "Andrey Samoylov",
        description: "Oleg's expertise helped me shed those extra pounds and improve my overall health. His motivating and tailored workouts made the process enjoyable and effective. With Oleg's support, I feel more energized and confident than ever before."
    },
];

const initialState: AppState = {
    contactInfo: {
        address: '3900 San Fernando Rd, Glendale CA, 91204',
        phone: '+1(323) 603-7595',
        email: 'aleh.nikalayeu@gmail.com',
    },
    feedbacks: [],
    services: [],
    gallery: initialGallery,
};

const reducer = (state: AppState, action: any): AppState => {
    switch (action.type) {
        case 'SET_GALLERY':
            return { ...state, gallery: action.payload };
        case 'SET_SERVICES':
            return { ...state, services: action.payload };
        case 'SET_FEEDBACKS':
            return { ...state, feedbacks: action.payload };
        default:
            return state;
    }
};

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [submitStatus, setSubmitStatus] = useState<string>('');

    const sendContactMessage = useCallback(async (formState: { name: string; phone: string; message: string }) => {
        try {
            const response = await axios.post('/api/send', formState, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                setSubmitStatus('success');
                setTimeout(() => setSubmitStatus(''), 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (err) {
            setSubmitStatus('error');
        }
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch, sendContactMessage, submitStatus }}>
            {children}
        </AppContext.Provider>
    );
};
