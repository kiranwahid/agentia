import { Brain, CodeXml, Cpu, Earth } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making",
  },
  {
    icon: Cpu,
    title: "Advanced ML",
    description: "Cutting-edge machine learning algorithms",
  },
  {
    icon: CodeXml,
    title: "Deep Learning",
    description: "Sophisticated deep learning models for pattern recognition",
  },

  {
    icon: Earth,
    title: "Global Scale",
    description: "Distributed AI processing across global networks",
  },
]

export default function AIFeatures() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="technology">
      <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r  from-purple-500 to-blue-500 text-transparent bg-clip-text">
        Powered by Advanced AI
      </h2>
      <p className="text-lg text-center text-gray-400 mb-12">Built on cutting-edge neural architectures</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white bg-opacity-5 border hover:border-purple-500/30  transition-all group hover:transform hover:scale-105 duration-300 border-purple-500 border-opacity-10 rounded-xl p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center  transition-all group hover:transform hover:rotate-45 duration-300">
              <feature.icon className="w-8 h-8 text-white transition-all group hover:transform hover:scale-105 duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

