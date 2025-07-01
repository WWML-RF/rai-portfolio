// src/components/Footer.tsx

import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-gray-700 py-6 px-4 text-center text-sm text-gray-400">
            <div className="flex justify-center gap-6 mb-3">
                <Link
                    href="https://www.linkedin.com/in/raidionfails"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="Visit my LinkedIn profile"
                >
                    <FaLinkedin size={20} />
                </Link>
                <Link
                    href="https://www.instagram.com/writewithmylens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                    aria-label="Visit my Instagram profile"
                >
                    <FaInstagram size={20} />
                </Link>
            </div>
            <p>© {new Date().getFullYear()} Rai Fails. buildwithrai.com All rights reserved.</p>
        </footer>
    );
}