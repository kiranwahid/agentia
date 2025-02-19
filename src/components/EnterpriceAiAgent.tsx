'use client';
import { IoIosArrowForward } from "react-icons/io";
import type React from "react"
import { Typewriter } from "react-simple-typewriter";

const EnterpriseAIAgents: React.FC = () => {
  return (
    <div className="w-full h-auto py-10 px-4 bg-gradient-to-b from-black via-black to-purple-900/20 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-white bg-opacity-5 rounded-full px-4 py-2 flex items-center md:gap-2 gap-1 text-center">
        <div className="w-2 h-2 bg-purple-500 rounded-full "></div>
        <span className="text-purple-300 text-xs sm:text-sm">POWERED BY PANAVERSITY</span>
      </div>

      <h1 className="text-center mt-10 ">
        <span className="block text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Enterprise AI Agents
        </span>
        <br />
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">for the Future</span>
      </h1>

      <div className="mt-8 mx-auto max-w-lg sm:max-w-2xl bg-white bg-opacity-5 border border-purple-500/20 backdrop-filter backdrop-blur-sm rounded-xl p-6 flex items-center">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
          <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.67 5.33L16 10.67L21.33 5.33" stroke="#ffffff" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.33 10.67H26.67V21.33H5.33V10.67Z" stroke="#ffffff" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.67 18.67H2.68" stroke="#ffffff" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.67 18.67H26.68" stroke="#ffffff" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 17.33H20.01" stroke="#ffffff" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 17.33H12.01" stroke="#ffffff" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-gray-300 text-base sm:text-lg">
          <Typewriter
            words={[
              "Hello! I'm your AI agent. How can I enhance your business today?",
              "I can help optimize your workflows with neural networks.",
              "Let me assist you with advanced data analytics.",
              "Would you like to explore our AI integration solutions?"
            ]}
            loop={true}
            cursor={true}
            cursorStyle={"|"}
            cursorColor="#A020F0"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={100}
          />
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Deploy Your AI Agent
          <IoIosArrowForward className="ml-2" size={24} />
        </button>
        <button className="w-full sm:w-auto border border-purple-500/30 hover:border-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg">
          Watch Demo
        </button>
      </div>
    </div>
  )
}

export default EnterpriseAIAgents;
