export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
}

export interface GalleryItem {
    image: string;
    text: string;
    name: string;
    description: string;
}

export interface Service {
    title: string;
    description: string;
    price: string;
    buttonText: string;
}

export interface ServiceSection {
    title: string;
    services: Service[];
}

export interface Feedback {
    icon: string;
    text: string;
    name: string;
}

export interface AppState {
    contactInfo: ContactInfo;
    feedbacks: Feedback[];
    services: ServiceSection[];
    gallery: GalleryItem[];
}

export interface AppContextProps {
    state: AppState;
    dispatch: React.Dispatch<any>;
    sendContactMessage: (formState: { name: string; phone: string; message: string }) => void;
    submitStatus: string;
}
