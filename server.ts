import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

console.log('Starting server...');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.post('/send', (req: Request, res: Response) => {
    console.log('Received request:', req.body);

    const { name, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'aleh.nikalayeu@gmail.com',
        subject: `Message from ${name}`,
        text: `You have received a new message from your website Oleg Nikolaev.\n\n` +
            `Here are the details:\n\n` +
            `Name: ${name}\n` +
            `Phone: ${phone}\n\n` +
            `Message:\n${message}`
    };

    transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: error.toString() });
        }
        console.log('Email sent:', info);
        res.status(200).json({ message: 'Message sent successfully!' });
    });
});

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes to return index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
