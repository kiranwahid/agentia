import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-24 bg-gray-900" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Scale your AI capabilities with our flexible pricing
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="$499"
            features={[
              "2 AI Agent Instances",
              "Basic Neural Processing",
              "24/7 Support",
              "Weekly Analytics",
              "Basic Integration Support",
            ]}
          />
          <PricingCard
            title="Professional"
            price="$999"
            features={[
              "10 AI Agent Instances",
              "Advanced Neural Networks",
              "Priority Support",
              "Real-time Analytics",
              "Custom Integration",
              "API Access",
              "Advanced Security",
            ]}
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited Agents",
              "Full Neural Suite",
              "Dedicated Support Team",
              "Advanced Analytics Dashboard",
              "Custom Development",
              "Full API Access",
              "Enterprise Security",
              "Custom Training",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

const PricingCard = ({ title, price, features, highlighted = false }: any) => {
  return (
    <Card
      className={`${
        highlighted
          ? "bg-gradient-to-b from-purple-900/50 to-blue-900/30 border-2 border-purple-500 hover:border-purple-500/30 transition-all group hover:transform hover:scale-105 duration-300"
          : "bg-white/5 border border-purple-500/10 hover:border-purple-500/30  transition-all group hover:transform hover:scale-105 duration-300"
      } rounded-xl overflow-hidden`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== "Custom" && (
            <span className="text-gray-400 ml-2">/month</span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="mt-6 space-y-4">
          {features.map((feature: any, index: any) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
              <span className="text-white">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full mt-8 ${
            highlighted
              ? "bg-gradient-to-r from-purple-600 to-blue-600"
              : "border border-purple-500/30"
          }`}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};
