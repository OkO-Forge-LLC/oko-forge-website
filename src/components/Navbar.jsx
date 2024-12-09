import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 fixed w-full z-10 shadow-md">
            <div className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold tracking-wide">
                    OkO FORGE
                </a>
                <div className="hidden md:flex gap-6">
                    <a href="/" className="hover:text-[#00FFCC]">Home</a>
                    <a href="/about" className="hover:text-[#00FFCC]">About</a>
                    <a href="/contact" className="hover:text-[#00FFCC]">Contact</a>
                </div>
                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden mt-4">
                    <a href="/" className="block py-2 hover:text-[#00FFCC]">Home</a>
                    <a href="/about" className="block py-2 hover:text-[#00FFCC]">About</a>
                    <a href="/contact" className="block py-2 hover:text-[#00FFCC]">Contact</a>
                </div>
            )}
        </nav>
    );
}
