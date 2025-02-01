"use client"

import React, { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Updates", href: "/updates" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="bg-white dark:bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold dark:text-white text-gray-800">
              IETE NotesBank
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:bg-white  hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://www.instagram.com/iete_mait/"
              target="_blank"
              className="cursor-pointer text-red-500 hover:text-red-700"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile menu Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md dark:bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;