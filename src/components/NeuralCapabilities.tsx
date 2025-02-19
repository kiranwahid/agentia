import type React from "react"
import { Brain, MessageSquare, Terminal, Shield } from "lucide-react"

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gradient-to-b from-white/5 to-transparent border border-purple-600/10 rounded-xl p-6 flex flex-col">
    <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
)

export default function NeuralCapabilities() {
  return (
    <section className="py-20 bg-gray-900" id="features">
      <div className="container mx-auto px-4  ">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r  from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Neural Capabilities
        </h2>
        <p className="text-gray-400 text-center mb-12">Powered by next-generation artificial intelligence</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6   ">
          <div className="hover:border-purple-500/20  transition-all group hover:transform hover:scale-105 duration-300">
          <FeatureCard 
      
      icon={<Brain className="w-6 h-6 text-white" />}
      title="Autonomous Learning"
      description="Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning"
    />
          </div>
        <div className="hover:border-purple-500/20  transition-all group hover:transform hover:scale-105 duration-300">
        <FeatureCard
            icon={<MessageSquare className="w-6 h-6 text-white" />}
            title="Multi-Modal Intelligence"
            description="Advanced agents capable of processing text, voice, and visual data for comprehensive understanding"
          />
        </div>

<div className="hover:border-purple-500/20  transition-all group hover:transform hover:scale-105 duration-300">
<FeatureCard
            icon={<Terminal className="w-6 h-6 text-white" />}
            title="Cognitive Integration"
            description="Seamless integration with existing systems through advanced cognitive APIs and neural bridges"
          />
</div>
<div className="hover:border-purple-500/20   transition-all group hover:transform hover:scale-105 duration-300">
<FeatureCard
            icon={<Shield className="w-6 h-6 text-white" />}
            title="Ethical AI Framework"
            description="Built-in ethical guidelines and safety protocols ensuring responsible AI deployment"
          />
</div>
        </div>
      </div>
    </section>
  )
}

