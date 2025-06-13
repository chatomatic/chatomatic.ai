
import { ArrowRight, Zap, Brain, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800 mb-8">
            <Zap className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
              AI-Powered Automation Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Automation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline operations, boost productivity, and unlock growth with our cutting-edge AI automation solutions. 
            Let intelligent systems handle the routine while you focus on innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
              Start Your Automation Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
              Watch Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
              <Brain className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Smart AI Models</h3>
              <p className="text-sm text-muted-foreground text-center">
                Advanced machine learning algorithms tailored to your business needs
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
              <Zap className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground text-center">
                Instant processing and real-time automation for maximum efficiency
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
              <Rocket className="w-8 h-8 text-pink-600 mb-3" />
              <h3 className="font-semibold mb-2">Scale Rapidly</h3>
              <p className="text-sm text-muted-foreground text-center">
                Grow your operations without limits using our scalable platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
