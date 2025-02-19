// import AISolutionsSection from "@/components/AiSolution";
import AISolutionsSection from "@/components/AiSolution";
import ContactSection from "@/components/contact";
import EnterpriseAIAgents from "@/components/EnterpriceAiAgent";
import AIFeatures from "@/components/Feature";
import NeuralCapabilities from "@/components/NeuralCapabilities";
import PricingSection from "@/components/Price";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <EnterpriseAIAgents />
      <AIFeatures/>
      <NeuralCapabilities/>
      <AISolutionsSection/>
      <PricingSection/>
      <ContactSection/>
    </div>
  )
}

