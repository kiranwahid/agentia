import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-purple-900/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
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
              <span className="text-white font-bold text-xl">Agentia World</span>
            </Link>
            <p className="mb-4">Next-generation AI agents powering the future of enterprise intelligence.</p>
            <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </Link>

            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-11 opacity-10"/>
        <div className="border-t border-purple-900/10 mt-8 pt-8 text-center">
          <p>© 2025 Agentia World. Powered by Panaversity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

