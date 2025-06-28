import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex justify-center gap-6 p-6 text-white bg-emerald-800">
            <a href="https://linkedin.com/in/YOUR_ID" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com/YOUR_ID" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
            </a>
            <a href="mailto:your@email.com">
                <FaEnvelope size={24} />
            </a>
            <a href="www.linkedin.com/in/raidionfails" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/writewithmylens/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="mailto:you@example.com">Email</a>
        </footer>
    );
}
