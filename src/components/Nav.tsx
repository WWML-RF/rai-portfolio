import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex gap-4 p-4 bg-emerald-700">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/hire">Work With Me</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}
