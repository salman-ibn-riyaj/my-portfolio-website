"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0a192f]/80 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400 font-mono">
          <Image 
              src="/profile.png"
              alt="Salman Shah"
              width={40}
              height={40}
              className="border border-blue-400 rounded-full"
            />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-gray-300 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/salman-ibn-riyaj" // Tomar resume file thakle tar path
            target="_blank"
            className="px-5 py-2 border border-blue-400 text-blue-400 rounded text-sm hover:bg-blue-400/10 transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#112240] px-6 py-8 flex flex-col gap-6 text-center animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-gray-300 hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
