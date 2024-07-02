import React, {useContext} from "react";
import Slider from "react-slick";
import "../styles/Gallery.css";
import {AppContext} from '../context/AppContext';

const Gallery: React.FC = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('Gallery must be used within an AppProvider');
    }

    const {state} = context;

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div id="gallery" className="gallery-container">
            <h2 className="gallery-header">Transformations</h2>
            <Slider {...settings}>
                {state.gallery.map((galleryItem, index) => (
                    <div key={index} className="gallery-slide">
                        <div className="gallery-content">
                            <div className="gallery-image-container">
                                <img src={galleryItem.image} alt={galleryItem.name} className="gallery-image"/>
                            </div>
                            <div className="gallery-description-container">
                                <p className="gallery-text">"{galleryItem.text}"</p>
                                <p className="gallery-name">- {galleryItem.name}</p>
                                <p className="gallery-description">{galleryItem.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Gallery;
