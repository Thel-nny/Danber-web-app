"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-amber-100 px-4 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={"/"} onClick={closeMenu}>
          <Image src="/logo.svg" alt="Danber Logo" width={150} height={150} />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#services" className="text-gray-700 hover:text-gray-900 font-medium">Our Services</Link>
          <Link href="/Teachers" className="text-gray-700 hover:text-gray-900 font-medium">Our Teachers</Link>
          <Link href="/AboutUs" className="text-gray-700 hover:text-gray-900 font-medium">About Us</Link>
          <Link href={"/#contact"}>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium">
              Make an Appointment
            </button>
          </Link>
        </div>
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-100 border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <Link href="/#services" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={closeMenu}>Our Services</Link>
            <Link href="/Teachers" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={closeMenu}>Our Teachers</Link>
            <Link href="/AboutUs" className="block text-gray-700 hover:text-gray-900 font-medium" onClick={closeMenu}>About Us</Link>
            <Link href={"/#contact"} onClick={closeMenu}>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium">
                Make an Appointment
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
