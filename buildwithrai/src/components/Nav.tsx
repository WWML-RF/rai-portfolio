// src/components/Nav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/hire', label: 'Work With Me' },
    { href: '/contact', label: 'Contact' },
];

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="bg-emerald-700 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-semibold tracking-wide">BuildWithRai</h1>
                <ul className="flex gap-4">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`px-3 py-2 rounded hover:bg-gray-200 ${pathname === href ? 'font-bold underline' : ''
                                    }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
