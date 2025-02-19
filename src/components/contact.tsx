import { Mail, Earth, Github, Twitter, Linkedin } from "lucide-react"
export default function ContactSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-400">Ready to transform your business with AI?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-purple-500 mr-4" />
              <span className="text-white">contact@agentiaworld.com</span>
            </div>
            <div className="flex items-center">
              <Earth className="w-6 h-6 text-purple-500 mr-4" />
              <span className="text-white">www.agentiaworld.com</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-8">
            <Github className="w-6 h-6 text-gray-400" />
            <Linkedin className="w-6 h-6 text-gray-400" />
            <Twitter className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
            required
              className="bg-white bg-opacity-5 border border-purple-500 border-opacity-10 rounded-lg p-3 text-white placeholder-gray-400"
              placeholder="First Name"
            />
            <input 
            required
              className="bg-white bg-opacity-5 border border-purple-500 border-opacity-10 rounded-lg p-3 text-white placeholder-gray-400"
              placeholder="Last Name"
            />
          </div>
          <input
          required
            className="w-full bg-white bg-opacity-5 border border-purple-500 border-opacity-10 rounded-lg p-3 text-white placeholder-gray-400"
            placeholder="Email Address"
          />
          <textarea
            className="w-full h-32 bg-white bg-opacity-5 border border-purple-500 border-opacity-10 rounded-lg p-3 text-white placeholder-gray-400"
            placeholder="Your Message"
          ></textarea>
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

