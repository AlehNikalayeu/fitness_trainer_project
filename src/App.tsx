import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Feedbacks from "./components/Feedbacks";
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="main-container">
            <Navigation/>
            <div className="main-content">
                <Home/>
                <About/>
                <Services/>
                <Feedbacks/>
                <Gallery/>
                <Contacts/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
