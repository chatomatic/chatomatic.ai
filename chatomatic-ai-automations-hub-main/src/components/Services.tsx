
import { MessageSquare, BarChart3, Workflow, Shield, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Chatbots & Virtual Assistants",
      description: "Deploy intelligent conversational AI that handles customer inquiries, support tickets, and lead qualification 24/7.",
      features: ["Natural Language Processing", "Multi-channel Integration", "Custom Training"]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Automate repetitive tasks and complex workflows to eliminate manual work and reduce human error.",
      features: ["Workflow Optimization", "API Integrations", "Custom Triggers"]
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Insights",
      description: "Transform raw data into actionable insights with AI-powered analytics and predictive modeling.",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports"]
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description: "Protect your business with intelligent threat detection and automated security responses.",
      features: ["Threat Detection", "Automated Responses", "Compliance Monitoring"]
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      description: "Optimize resource allocation and scheduling with AI-driven planning and forecasting systems.",
      features: ["Resource Optimization", "Demand Forecasting", "Automatic Scheduling"]
    },
    {
      icon: Users,
      title: "Customer Experience AI",
      description: "Enhance customer journeys with personalized AI recommendations and automated service delivery.",
      features: ["Personalization", "Journey Mapping", "Automated Service"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our AI Automation{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to revolutionize how your business operates, 
            from customer service to data analysis and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
