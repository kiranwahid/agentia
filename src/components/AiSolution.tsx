import { Brain, Network, Shield } from "lucide-react"
export default function AISolutionsSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="agents">
      <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        AI Solutions
      </h2>
      <p className="text-lg text-center text-gray-400 mb-12">Transforming industries with intelligent agents</p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white bg-opacity-5 border border-purple-500 border-opacity-10 rounded-xl p-6 hover:border-purple-500/30  transition-all group hover:transform hover:scale-105 duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Enterprise AI</h3>
          <p className="text-gray-400">Custom AI agents designed for enterprise-scale operations and decision-making</p>
        </div>

        <div className="bg-white bg-opacity-5 border border-purple-500 border-opacity-10 rounded-xl p-6 hover:border-purple-500/30  transition-all group hover:transform hover:scale-105 duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
            <Network className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Neural Operations</h3>
          <p className="text-gray-400">Automated workflow optimization through distributed neural networks</p>
        </div>

        <div className="bg-white bg-opacity-5 border border-purple-500 border-opacity-10 rounded-xl p-6 hover:border-purple-500/30  transition-all group hover:transform hover:scale-105 duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Secure Intelligence</h3>
          <p className="text-gray-400">Privacy-first AI solutions with military-grade security protocols</p>
        </div>
      </div>
    </section>
  )
}

