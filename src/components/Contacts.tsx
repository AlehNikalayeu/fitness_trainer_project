import React, {useContext, useState} from 'react';
import '../styles/Contacts.css';
import {AppContext} from '../context/AppContext';
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa';

const Contacts: React.FC = () => {
    const context = useContext(AppContext);
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    if (!context) {
        throw new Error('Contacts must be used within an AppProvider');
    }

    const {state, sendContactMessage, submitStatus} = context;
    const {contactInfo} = state;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formState.name) newErrors.name = 'Name is required';
        if (!formState.phone) newErrors.phone = 'Phone is required';
        if (!formState.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setLoading(true);
        try {
            await sendContactMessage(formState);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
            setFormState({name: '', phone: '', message: ''});
        }
    };

    return (
        <div id="contacts" className="contacts-container">
            <div className="contacts-photo">
                <img src="/images/background/olegn_coach_1.18.1.jpg" alt="contacts-background"/>
            </div>
            <div className="contacts-content">
                <h2 className="contacts-header">Take the First Step</h2>
                <div className="contacts-info">
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" style={{color: 'rgba(0, 0, 0, 0.5)'}}/>
                        <span>{contactInfo.address}</span>
                    </div>
                    <div className="contact-item">
                        <FaPhoneAlt className="contact-icon" style={{color: 'rgba(0, 0, 0, 0.5)'}}/>
                        <span>{contactInfo.phone}</span>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" style={{color: 'rgba(0, 0, 0, 0.5)'}}/>
                        <span>{contactInfo.email}</span>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-input"
                        value={formState.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        className="form-input"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone && <div className="error">{errors.phone}</div>}
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="form-textarea"
                        value={formState.message}
                        onChange={handleChange}
                        required
                    />
                    {errors.message && <div className="error">{errors.message}</div>}
                    <button
                        type="submit"
                        className={`form-button ${submitStatus === 'success' ? 'success' : ''}`}
                    >
                        {loading ? (
                            <div className="loader"></div>
                        ) : (
                            submitStatus === 'success' ? 'Sent Message' : 'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
