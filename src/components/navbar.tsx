"use client";
import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md shadow-gray-900 sticky top-0 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center  ">
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#technology">Technology</NavLink>
                <NavLink href="#agents">Agents</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-colors duration-300">
                Launch Console
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#features" mobile>
              Features
            </NavLink>
            <NavLink href="#technology" mobile>
              Technology
            </NavLink>
            <NavLink href="#agents" mobile>
              Agents
            </NavLink>
            <NavLink href="#pricing" mobile>
              Pricing
            </NavLink>
            <NavLink href="#contact" mobile>
              Contact
            </NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-md text-sm font-medium">
                Launch Console
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({
  href,
  children,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}) => (
  <Link
    href={href}
    className={`${
      mobile ? "block" : "inline-block"
    } px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700`}
  >
    {children}
  </Link>
);

const Logo = () => (
  <div className="flex items-center">
    <svg
      className="h-8 w-8 mr-2"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.67 5.33L16 10.67L21.33 5.33"
        stroke="#A855F7"
        strokeWidth="2.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33 10.67H26.67V21.33H5.33V10.67Z"
        stroke="#A855F7"
        strokeWidth="2.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.67 18.67H2.68"
        stroke="#A855F7"
        strokeWidth="2.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.67 18.67H26.68"
        stroke="#A855F7"
        strokeWidth="2.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 17.33H20.01"
        stroke="#A855F7"
        strokeWidth="2.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.33H12.01"
        stroke="#A855F7"
        strokeWidth="2.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="font-bold text-lg">Agentia World</span>
  </div>
);
