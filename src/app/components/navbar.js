"use client";
import Link from 'next/link';
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-blue-900 text-xl">ProjectTitle</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-auto flex items-center space-x-4">
              <Link href="/consult-an-expert" className="text-blue-900 hover:bg-blue-900 hover:text-white px-2 py-2 rounded-md text-sm font-small">Consult an Expert</Link>
              <Link href="/business-setup" className="text-blue-900 hover:bg-blue-900 hover:text-white px-2 py-2 rounded-md text-sm font-small">Business Setup</Link>
              <Link href="/tax-and-compliance" className="text-blue-900 hover:bg-blue-900 hover:text-white px-2 py-2 rounded-md text-sm font-small">Tax & Compliance</Link>
              <Link href="/trademark-and-ip" className="text-blue-900 hover:bg-blue-900 hover:text-white px-2 py-2 rounded-md text-sm font-small">Trademark & IP</Link>
              <Link href="/documentation" className="text-blue-900 hover:bg-blue-900 hover:text-white px-2 py-2 rounded-md text-sm font-small">Documentation</Link>
              <Link href="/fundraising" className="text-blue-900 hover:bg-blue-900 hover:text-white px-2 py-2 rounded-md text-sm font-small">Fundraising</Link>
              <Link href="/ngo" className="text-blue-900 hover:bg-blue-900 hover:text-white px-2 py-2 rounded-md text-sm font-small">NGO</Link>
              <Link href="/property-and-personal" className="text-blue-900 hover:bg-blue-900 hover:text-white px-2 py-2 rounded-md text-sm font-small">Property & Personal</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-500 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute z-10 bg-white w-full shadow" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/consult-an-expert" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Consult an Expert</Link>
            <Link href="/business-setup" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Business Setup</Link>
            <Link href="/tax-and-compliance" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tax & Compliance</Link>
            <Link href="/trademark-and-ip" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Trademark & IP</Link>
            <Link href="/documentation" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Documentation</Link>
            <Link href="/fundraising" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Fundraising</Link>
            <Link href="/ngo" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">NGO</Link>
            <Link href="/property-and-personal" className="text-blue-900 hover:bg-blue-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Property & Personal</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
