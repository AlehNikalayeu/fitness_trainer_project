import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
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

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error: any) {
        res.status(500).json({ error: error.toString() });
    }
}
